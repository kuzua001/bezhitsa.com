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


    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        $behaviors = parent::behaviors();

        $behaviors ['access'] = [
            'class' => AccessControl::className(),
            'rules' => [
                [
                    'allow' => true,
                    'roles' => ['@'],
                ],

            ],
            'denyCallback' => function ($rule, $action) {
                throw new UnauthorizedHttpException('You are not allowed to access this page');
            }
        ];

        $behaviors['contentNegotiator'] = [
            'class' => \yii\filters\ContentNegotiator::className(),
            'formats' => [
                'application/json' => \yii\web\Response::FORMAT_JSON,
            ],
        ];

        return $behaviors;
    }

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