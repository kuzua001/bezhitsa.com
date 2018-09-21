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

class ImageTypesController extends ApiController
{
    public $modelClass = 'common\models\ImageType';

    protected function verbs() {
        return [
            'index' => [ 'GET' ],
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
                ],
            ];

        return $behaviors;
    }

}