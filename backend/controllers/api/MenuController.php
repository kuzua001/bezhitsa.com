<?php

namespace backend\controllers\api;

use frontend\models\data\RestaurantMenu;
use yii\data\ActiveDataProvider;
use yii\filters\VerbFilter;


class MenuController extends ApiController
{
    public $modelClass = 'frontend\models\data\RestaurantMenu';

    public function prepareDataProvider()
    {
        return new ActiveDataProvider([
            'query' => RestaurantMenu::find(),
            'pagination' => false,
        ]);
    }

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

    public function actions()
    {
        $actions = parent::actions();
        $actions['index']['prepareDataProvider'] = [$this, 'prepareDataProvider'];

        return $actions;
    }
}