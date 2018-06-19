<?php

namespace backend\controllers\api;

use frontend\models\Page;
use yii\web\Response;
use yii\data\ActiveDataProvider;
use yii\filters\VerbFilter;


class SettingsController extends ApiController
{
    protected function verbs() {
        return [
            'index' => [ 'GET' ],
            'update' => [ 'PUT' ],
            'create' => [ 'POST' ],
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
                'update' => ['put'],
                'create' => ['post']
            ],
        ];

        return $behaviors;
    }


    public function actions()
    {
        $actions = parent::actions();
        $actions['index']['class']   = 'backend\controllers\api\settings\CustomIndexAction';

        return $actions;
    }

    public $modelClass = 'frontend\models\cms\CmsSettings';
}