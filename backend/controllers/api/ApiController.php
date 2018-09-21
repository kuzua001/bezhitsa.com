<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/10/17
 * Time: 12:57 AM
 */
namespace backend\controllers\api;

use frontend\components\LanguageHelper;
use Yii;
use yii\data\Pagination;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use \yii\rest\ActiveController;
use \yii\data\ActiveDataProvider;
use yii\web\HttpException;
use yii\web\Response;
use yii\web\UnauthorizedHttpException;


class ApiController extends ActiveController
{

    protected function verbs()
    {
        return [
            'index' => ['GET', 'HEAD'],
            'view' => ['GET', 'HEAD'],
            'create' => ['POST'],
            'update' => ['PUT', 'PATCH'],
            'delete' => ['DELETE'],
        ];
    }

    /**
     * @param $action
     * @return bool
     * @throws HttpException
     * @throws \Exception
     * @throws \yii\web\BadRequestHttpException
     */
    public function beforeAction($action)
    {
        $result =  parent::beforeAction($action);

        $lang = Yii::$app->request->get('lang');

        if (!empty($lang)) {
            try {
                LanguageHelper::setCurrentLanguage($lang);
            } catch (yii\base\Exception $e) {
                throw new HttpException(400, $e->getMessage());
            }

        }

        return $result;
    }

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

        $behaviors['verbFilter'] = [
            'class' => VerbFilter::className(),
            'actions' => $this->verbs(),
        ];

        // В это место мы будем добавлять поведения (читай ниже)
        return $behaviors;
    }
}