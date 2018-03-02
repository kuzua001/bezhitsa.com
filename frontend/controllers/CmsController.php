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

    /**
     * Какого цвета background сей страницы
     * @return string
     */
    public function getDefaultBgColor()
    {
        return '#fff';
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
        $url        = Url::to();

        if (!isset(Yii::$app->request->queryParams['pageId'])) {
            throw new yii\web\NotFoundHttpException();
        }

        $pageId     = Yii::$app->request->queryParams['pageId'];
        $languageId = Yii::$app->request->queryParams['languageId'];

        LanguageHelper::setCurrentLanguage($languageId);

        $this->page = Page::id($pageId);



        $view = new CmsView();
        $view->description  = $this->page->pageParams->metaDescription;
        $view->title        = $this->page->pageParams->metaTitle;
        $view->bgColor      = $this->getDefaultBgColor();
        $view->submenuColor = $this->getSubmenuColor();
        $view->topMenu      = $this->page->getMenu();


        $this->setView($view);

        return parent::beforeAction($action);
    }
}