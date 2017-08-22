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
        ];
    }

    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'index' => ['get'],
                ],
            ],
        ];
    }

    public function actions()
    {
        $actions = parent::actions();
        $actions['view']['class'] = 'backend\controllers\api\pagefields\CustomViewAction';

        return $actions;
    }

    public $modelClass = 'frontend\models\PageParams';
}