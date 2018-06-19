<?php
/**
 * Created by PhpStorm.
 * User: dan
 * Date: 7/25/17
 * Time: 3:18 PM
 */

namespace frontend\models;

use frontend\components\AppHelper;
use frontend\components\LanguageHelper;
use frontend\components\MetadataExtractor;
use frontend\controllers\CmsController;
use frontend\models\pages\LandingPage;
use frontend\models\pages\TextPage;
use frontend\models\cms\ux\Menu;
use yii\db\ActiveRecord;
use yii\db\Exception;
use yii\db\Query;

/**
 * Class Page
 * @package frontend\models
 * @property $id             integer
 * @property $url            string
 * @property $name           string
 * @property $name_en        string
 * @property $action_id      integer
 * @property $pages_id       integer
 * @property $domain_id      integer
 * @property $params_data    string
 * @property $params_data_ru string
 * @property $params_data_en string
 * @property $parent_id      integer
 * @property $is_enabled     boolean
 * @property $color          string
 * @property $show_in_menu   boolean
 */
class Page extends ActiveRecord
{
    public function fields()
    {
        return ['id', 'url', 'action_id', 'name', 'name_en', 'is_enabled', 'pages_id', 'domain_id', 'parent_id', 'show_in_menu'];
    }

    public function scenarios()
    {
        return [
            'default' => ['id', 'url', 'action_id', 'name', 'name_en', 'is_enabled', 'pages_id', 'domain_id', 'parent_id', 'show_in_menu']
        ];
    }
    /**
     * @var PageParams
     */
    public $pageParams = null;

    /**
     * Пустой метод, реализуемый у всех дочерних страниц, служит заглушкой, чтобы мы могли
     * создавать экземпляры базового класса Page
     */
    protected function initPageParams()
    {

    }

    /**
     * Получить относящийся к странице домен
     * @return array|null|Domain
     */
    public function getDomain()
    {
        return $this->hasOne(Domain::className(), ['id' => 'domain_id'])->one();
    }

    /**
     * Возвращает значение поля с параметрами с учетом текущего языка (выбор из разных полей)
     * @return mixed
     */
    private function getParamsDataSource()
    {
        switch (LanguageHelper::getCurrentLanguage()) {
            case LanguageHelper::LANG_RU:
                return $this->params_data_ru;
            case LanguageHelper::LANG_EN:
                return $this->params_data_en;
        }

        return $this->params_data;
    }

    /**
     * Сохранить значение value в одно из мультиязычных полей
     * @param $value
     *
     * @return mixed
     */
    protected function saveParamsData($value)
    {
        switch (LanguageHelper::getCurrentLanguage()) {
            case LanguageHelper::LANG_RU:
                $this->params_data_ru = $value;
            break;
            case LanguageHelper::LANG_EN:
                $this->params_data_en = $value;
            break;
        }

        // В силу того, что языков всего только 2, дефолтное значение берется из русского
        $this->params_data = LanguageHelper::getDefaultLanguage() == LanguageHelper::LANG_EN ? $this->params_data_en : $this->params_data_ru;
    }

    public function afterFind()
    {
        $this->initPageParams();
        if (!is_null($this->pageParams)) {
            $this->pageParams->initFromSerialized($this->getParamsDataSource());
        }
    }

    public static function create($name, $domainId, $pagesId, $showInMenu, $url, $actionId)
    {
        $pageClassName = MetadataExtractor::getClassName(MetadataExtractor::PAGES_MAPPING, $pagesId);

        /** @var Page $page */
        $page = new $pageClassName();
        $page->name    = $name;
        $page->name_en = $name;
        $page->show_in_menu = $showInMenu;
        $page->domain_id = $domainId;

        $parentPage = Page::find()->where('domain_id = :domain_id and parent_id is null', [
            'domain_id' => $domainId
        ])->one();
        if ($parentPage instanceof Page) {
            $page->parent_id = $parentPage->id;
        }

        $page->pages_id = $pagesId;
        $page->url = rtrim(Domain::getDomain($domainId)->base_url, '/') . '/' . ltrim($url,'/');
        $page->action_id = $actionId;
        $page->initPageParams();
        LanguageHelper::setCurrentLanguage(LanguageHelper::LANG_RU);
        $page->save(false);
        LanguageHelper::setCurrentLanguage(LanguageHelper::LANG_EN);
        $page->save(false);

        return $page;
    }

    /**
     * @return (ParamField)[]
     */
    public function getPageFields()
    {
        return !empty($this->pageParams) ? $this->pageParams->toPageFields() : new PageFields;
    }

    public static function tableName()
    {
        return 'cms_page';
    }

    /**
     * При сохранении страниц в БД сериализует параметры страницы
     * @param bool $insert
     *
     * @return bool
     */
    public function beforeSave($insert)
    {
        echo "Saving page: " . $this->id . "\n";

        if (parent::beforeSave($insert)) {
            if (!is_null($this->pageParams)) {
                $this->saveParamsData($this->pageParams->toSerialized());
            }

            return true;
        } else {
            return false;
        }
    }

    /**
     * Возвращает страницу по ее id
     * @param $pageId
     * @return Page|null
     */
    public static function id($pageId)
    {
        $basePage = Page::findOne($pageId);

        if (empty($basePage)) {
            return null;
        }

        $pageClasId = $basePage->pages_id;
        $pageClassName = MetadataExtractor::getClassName(MetadataExtractor::PAGES_MAPPING, $pageClasId);

        try {
            $page = $pageClassName::findOne($pageId);
            if (is_subclass_of($page, self::className())) {
                return $page;
            }
        } catch (Exception $ex) {
        }

        return null;
    }

    /**
     * Возвращает url адрес текущей страницы, при необходимости формирует его на основе параматеров
     * шаблона url
     */
    public function getUrl(array $params = [], $canonical = false)
    {
        $url = ltrim($this->url, '/');
        $url = preg_replace_callback('/\<([a-zA-Z]+)\:[^\>]*\>/', function($matches) use ($params) {
            $key = $matches[1];
            return isset($params[$key]) ? $params[$key] : '';
        }, $url);

        if ($canonical) {
            $domain = $this->getDomain();
            $url = $domain->getCanonicalUrl($url, '', LanguageHelper::getCurrentLanguage());
        }

        return $url;
    }

    /**
     * Возвращает меню текущей страницы или null, если его нет
     * @return null|Menu
     */
    public function getMenu()
    {
        $menu = Menu::findOne(['parent_page_id' => $this->id]);

        if (empty($menu) && !empty($parentPage = Page::id($this->parent_id))) {
            $menu = $parentPage->getMenu();
        }

        if (empty($menu)) {
            $menu = null;
        }

        return $menu;
    }

    /**
     * Возвращает маршруты всех активных старниц сайта
     * @todo перенести в какой-то отдельный сервис
     * @param $multilingual boolean Дублировать ли правила для мультиязычности
     * @return array
     */
    public static function getRoutes($multilingual = false)
    {
        $routes = [];
        $pages = self::find()->all();

        foreach ($pages as $page) {
            /**
             * @var $page TextPage|LandingPage
             */
            if (!$page->is_enabled) {
                continue;
            }

            if ($multilingual) {
                foreach (LanguageHelper::$allowedLanguages as $langId => $code) {
                    $routes[] = [
                        'pattern' => '/' . $code . '/' . ltrim($page->url, '/'),
                        'route' => Actions::id($page->action_id)->getRoute(),
                        'defaults' => [
                            'pageId'     => $page->id,
                            'languageId' => $langId
                        ]
                    ];
                }
            }

            $routes[] = [
                'pattern' => $page->url,
                'route' => Actions::id($page->action_id)->getRoute(),
                'defaults' => [
                    'pageId'     => $page->id,
                    'languageId' => LanguageHelper::getDefaultLanguage()
                ]
            ];
        }

        return $routes;
    }
}