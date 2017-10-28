<?php
namespace frontend\controllers;

use frontend\components\AppHelper;
use yii\web\Controller;
use yii;


class FitnessController extends CmsController
{
    public function actionIndex()
    {
        return $this->render('index.php', [

        ]);
    }
}