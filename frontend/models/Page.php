<?php
/**
 * Created by PhpStorm.
 * User: dan
 * Date: 7/25/17
 * Time: 3:18 PM
 */

namespace frontend\models;

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
 * @property $id          integer
 * @property $url         string
 * @property $name        string
 * @property $action_id   integer
 * @property $pages_id    integer
 * @property $domain_id   integer
 * @property $params_data string
 * @property $parent_id   integer
 * @property $is_enabled  boolean
 */
class Page extends ActiveRecord
{
    public function fields()
    {
        return ['id', 'url', 'action_id', 'name', 'is_enabled', 'pages_id', 'domain_id', 'parent_id'];
    }

    public function scenarios()
    {
        return [
            'default' => ['id', 'url', 'action_id', 'name', 'is_enabled', 'pages_id', 'domain_id', 'parent_id']
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

    public function afterFind()
    {
        $this->initPageParams();
        if (!is_null($this->pageParams)) {
            $this->pageParams->initFromSerialized($this->params_data);
        }
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
        if (parent::beforeSave($insert)) {
            if (!is_null($this->pageParams)) {
                $this->params_data = $this->pageParams->toSerialized();
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
    public function getUrl(array $params = [])
    {
        return '/' . ltrim($this->url, '/');
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
     * @return array
     */
    public static function getRoutes()
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

            $routes[] = [
                'pattern' => $page->url,
                'route' => Actions::id($page->action_id)->getRoute(),
                'defaults' => [
                    'pageId' => $page->id,
                ]
            ];
        }

        return $routes;
    }
}