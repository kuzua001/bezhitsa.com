<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use yii\web\Response;

/**
 * Site controller
 */
class ErrorController extends Controller
{
    public function actionError()
    {
        $exception = Yii::$app->errorHandler->exception;
        Yii::$app->response->format = Response::FORMAT_JSON;
        return [
            'status' => 'error',
            'message' => $exception->getMessage()
        ];
    }
}
