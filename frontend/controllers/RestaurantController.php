<?php
namespace frontend\controllers;

use frontend\components\AppHelper;
use frontend\models\cms\ux\Menu;
use frontend\models\Domain;
use frontend\models\cms\ux\MenuItem;
use frontend\views\CmsView;
use yii\web\Controller;
use yii;


class RestaurantController extends CmsController
{
    public function beforeAction($action) {
        $menu = new Menu();
        $menu->addMenuItem(MenuItem::create('http://' . Domain::findOne(1)->domain, 'Отель', $menu,true));
        $menu->addMenuItem(MenuItem::create('http://' . Domain::findOne(2)->domain, 'Фитнес', $menu,true));
        $menu->addMenuItem(MenuItem::create('http://' . Domain::findOne(3)->domain, 'Ресторан', $menu,true));

        $view = new CmsView();
        $view->topMenu  = $menu;

        $this->setView($view);
        return parent::beforeAction($action);
    }

    public function actionIndex()
    {
        return $this->render('index.php', [

        ]);
    }

    public function actionMenu()
    {

        $menu = [];

        return $this->render('menu.php', [
            'page'  => $this->page,
            'menu' => $menu,
        ]);
    }
}