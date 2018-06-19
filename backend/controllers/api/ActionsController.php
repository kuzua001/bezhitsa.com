<?php

namespace backend\controllers\api;

use frontend\models\Page;
use yii\data\ActiveDataProvider;
use yii\filters\VerbFilter;


class ActionsController extends ApiController
{
    public $modelClass = 'frontend\models\Actions';
}