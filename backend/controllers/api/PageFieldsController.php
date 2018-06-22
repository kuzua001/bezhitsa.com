<?php

namespace backend\controllers\api;

use frontend\models\Page;
use frontend\models\PageParams;
use yii\filters\VerbFilter;



class PageFieldsController extends ApiController
{
    protected function verbs() {
        return [
            'index' => [ 'GET' ],
            'update' => [ 'PUT' ],
        ];
    }

    public $enableCsrfValidation = false;


    public function behaviors()
    {
        $behaviors = [];//parent::behaviors();

        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors'  => [
                // restrict access to domains:
                'Origin'                           => ['*'],
                'Access-Control-Request-Method' => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                'Access-Control-Request-Headers' => ['Origin', 'X-Requested-With', 'Content-Type', 'accept', 'Authorization'],
                'Access-Control-Allow-Credentials' => true,
//                'Access-Control-Max-Age'           => 3600,
            ]
        ];

        $behaviors['verbs'] = [
            'class' => VerbFilter::className(),
            'actions' => [
                'index'  => ['get'],
                'update' => ['put']
            ],
        ];

        return $behaviors;
    }

    public function actions()
    {
        $actions = parent::actions();
        $actions['view']['class']   = 'backend\controllers\api\pagefields\CustomViewAction';
        $actions['update']['class'] = 'backend\controllers\api\pagefields\CustomUpdateAction';


        return $actions;
    }

    public $modelClass = 'frontend\models\PageParams';
}