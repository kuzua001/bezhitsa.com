<?php
namespace frontend\controllers;

use frontend\components\AppHelper;
use frontend\models\cms\ux\Menu;
use frontend\models\Domain;
use frontend\models\cms\ux\MenuItem;
use frontend\models\restaurant\RestaurantMenu;
use frontend\views\CmsView;
use yii\web\Controller;
use yii;


class RestaurantController extends CmsController
{
    public function actionIndex()
    {
        return $this->render('index.php', [

        ]);
    }

    public function actionMenu()
    {
        return $this->render('menu.php', [
            'page'  => $this->page,
            'menu' => RestaurantMenu::getInstance(),
        ]);
    }
}