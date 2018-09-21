<?php

namespace backend\controllers\api;

use yii\filters\VerbFilter;


class TrainingActivityController extends ApiController
{
    public $modelClass = 'frontend\models\data\TrainingActivity';

    public function actions()
    {
        $actions = parent::actions();
        $actions['index']['class'] = 'backend\controllers\api\activity\CustomIndexAction';

        return $actions;
    }

}