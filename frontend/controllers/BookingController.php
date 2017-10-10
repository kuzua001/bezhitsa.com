<?php
namespace frontend\controllers;

use frontend\components\AppHelper;
use yii\web\Controller;
use yii;


class BookingController extends CmsController
{
    public function actionIndex()
    {
        return $this->render('index.php', ['page' => $this->page]);
    }
}