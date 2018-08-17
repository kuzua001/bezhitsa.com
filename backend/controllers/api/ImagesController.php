<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 9/4/17
 * Time: 2:19 AM
 */

namespace backend\controllers\api;

use common\models\Image;
use yii;
use yii\data\ActiveDataProvider;
use yii\filters\VerbFilter;
use yii\web\Controller;
use yii\web\UploadedFile;
use yii\web\Response;
use backend\models\UploadForm;

class ImagesController extends ApiController
{
    public $modelClass = 'common\models\Image';


    protected function verbs() {
        return [
            'index' => [ 'GET' ],
            'create' => [ 'POST' ],
        ];
    }

    public function actionIndex()
    {
        return new ActiveDataProvider([
            'pagination' => false,
        ]);
    }

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['verbs'] =
            [
                'class' => VerbFilter::className(),
                'actions' => [
                    'index'  => ['get'],
                    'create' => ['post']
                ],
            ];

        return $behaviors;
    }

    public function actions()
    {
        $actions = parent::actions();
        $actions['create']['class'] = 'backend\controllers\api\images\CustomCreateAction';
        $actions['update']['class'] = 'backend\controllers\api\images\CustomUpdateAction';
        $actions['index']['class'] = 'backend\controllers\api\images\CustomIndexAction';

        return $actions;
    }

}