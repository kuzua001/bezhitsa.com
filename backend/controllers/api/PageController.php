<?php

namespace backend\controllers\api;

use frontend\models\Page;
use yii\data\ActiveDataProvider;
use yii\filters\VerbFilter;


class PageController extends ApiController
{
    protected function verbs() {
        return [
            'index' => [ 'GET' ],
            'update' => [ 'PUT' ],
        ];
    }

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['verbs'] =
        [
            'class' => VerbFilter::className(),
            'actions' => [
                'index'  => ['get'],
                'update' => ['put']
            ],
        ];

        return $behaviors;
    }

    public function prepareDataProvider()
    {
        return new ActiveDataProvider([
            'query' => Page::find(),
            'pagination' => false,
        ]);
    }

    public function actions()
    {
        $actions = parent::actions();
        $actions['create']['class'] = 'backend\controllers\api\page\CustomCreateAction';
        $actions['index']['prepareDataProvider'] = [$this, 'prepareDataProvider'];

        return $actions;
    }

    public $modelClass = 'frontend\models\Page';
}