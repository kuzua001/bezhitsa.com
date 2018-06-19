<?php

namespace backend\controllers\api;

use frontend\models\Page;
use yii\data\ActiveDataProvider;
use yii\filters\VerbFilter;


class PageTypesController extends ApiController
{
    public $modelClass = 'frontend\models\PageType';
}