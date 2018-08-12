<?php

namespace backend\controllers\api;

use yii\filters\VerbFilter;


class TrainerController extends ApiController
{
    public $modelClass = 'frontend\models\data\Trainer';

    public function behaviors()
    {
        $behaviors = parent::behaviors();

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

        return $behaviors;
    }

}