<?php
namespace backend\controllers;

use common\models\Image;
use common\models\ImageType;
use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use yii\web\Response;

/**
 * Site controller
 */
class DataController extends Controller
{
    public $layout = false;

    public function beforeAction($action)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return parent::beforeAction($action);
    }

    public function actionFilters()
    {
        return [
            'tags' => Image::findAllTags(),
            'types' => ImageType::findAllShort()
        ];
    }
}