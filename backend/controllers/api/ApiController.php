<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/10/17
 * Time: 12:57 AM
 */
namespace backend\controllers\api;

use yii\data\Pagination;
use yii\filters\VerbFilter;
use \yii\rest\ActiveController;
use \yii\data\ActiveDataProvider;


class ApiController extends ActiveController
{

//    public function afterAction($action, $result)
//    {
//        $result =  parent::afterAction($action, $result);
//        /** @var ActiveDataProvider $result */
//        $result->pagination = new Pagination([
//            'pageSizeLimit' => [0, 1],
//        ]);
//
//        return $result;
//    }

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


    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['corsFilter' ] = [
            'class' => \yii\filters\Cors::className(),
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

       /* $behaviors['access'] = [
            'class' => \yii\filters\AccessControl::className(),
            'only' => ['create', 'update', 'delete'],
            'rules' => [
                [
                    'actions' => ['create', 'update', 'delete'],
                    'allow' => true,
                    'roles' => ['@'],
                ],
            ],
        ]; */

        // В это место мы будем добавлять поведения (читай ниже)
        return $behaviors;
    }
}