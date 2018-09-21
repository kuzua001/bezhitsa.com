<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/27/17
 * Time: 8:41 PM
 */

namespace frontend\controllers;

use frontend\components\AppHelper;
use frontend\components\LanguageHelper;
use frontend\models\cms\ux\Menu;
use frontend\interfaces\models\menu\MenuInterface;
use frontend\models\cms\ux\MenuItem;
use frontend\views\CmsView;
use yii\base\Module;
use yii\web\Controller;
use yii;
use yii\helpers\Url;
use frontend\models\Page;

class CmsController extends Controller
{

    /**
     * @var $view CmsView
     */
    public $view;

    /**
     * Данные, которые нужны контроллеру для работы
     */
    protected $getParams  = null;

    /**
     * @var Page
     */
    protected $page       = null;


    public function __construct($id, Module $module, array $config = [])
    {
        parent::__construct($id, $module, $config);
        $this->view = new CmsView();
    }

    /**
     * Какого цвета background сей страницы
     * @return string
     */
    public function getDefaultBgColor()
    {
        return !empty($this->page->pageParams->color) ? $this->page->pageParams->color : '#fff';
    }

    /**
     * Вовзращает цвет для мобильного меню
     * @return string
     */
    public function getSubmenuColor() {
        return '#b9a861';
    }


    /**
     * Возвращает ID текущей старницы
     * @return mixed
     */
    public function getPageID()
    {
        return $this->page->id;
    }


    public function beforeAction($action)
    {
        $actionName = $this->action->id;
        if ($actionName === 'error-handler') {
            Yii::$app->getModule('debug')->instance->allowedIPs = [];
            return $action;
        }

        if (!isset(Yii::$app->request->queryParams['pageId'])) {
            throw new yii\web\NotFoundHttpException();
        }

        $pageId     = Yii::$app->request->queryParams['pageId'];
        $languageId = Yii::$app->request->queryParams['languageId'];

        LanguageHelper::setCurrentLanguage($languageId);

        $this->page = Page::id($pageId);




        $this->view->description  = $this->page->pageParams->metaDescription;
        $this->view->title        = $this->page->pageParams->metaTitle;
        $this->view->bgColor      = $this->getDefaultBgColor();
        $this->view->submenuColor = $this->getSubmenuColor();
        $this->view->topMenu      = $this->page->getMenu();

        if (!empty($this->page->pageParams->html)) {
            if ($this->view instanceof CmsView) {
                $this->view->injectedHTML = $this->page->pageParams->html;
            }
        }

        if (!empty($this->page->pageParams->script)) {
            $this->view->registerJs($this->page->pageParams->script, yii\web\View::POS_END);
        }

        $this->setView($this->view);

        return parent::beforeAction($action);
    }
}