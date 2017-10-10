<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;

/**
 * Site controller
 */
class DynamicController extends Controller
{
    public $layout = false;

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionImages()
    {
        return $this->render('images');
    }

    public function actionPageEdit($pageId)
    {
        return $this->render('page/edit');
    }
}