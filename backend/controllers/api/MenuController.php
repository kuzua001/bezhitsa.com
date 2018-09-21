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

    public function actions()
    {
        $actions = parent::actions();
        $actions['index']['prepareDataProvider'] = [$this, 'prepareDataProvider'];

        return $actions;
    }
}