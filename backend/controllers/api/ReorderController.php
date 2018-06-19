<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 9/4/17
 * Time: 2:19 AM
 */

namespace backend\controllers\api;

use frontend\models\data\Trainer;
use yii;
use yii\filters\VerbFilter;
use yii\web\Controller;
use yii\web\UploadedFile;
use yii\web\Response;
use backend\models\UploadForm;

class ReorderController extends Controller
{
    private static $models = [
        'trainer' => 'frontend\models\data\Trainer',
    ];

    protected function verbs() {
        return [
            'index' => [ 'POST' ],
        ];
    }

    public $enableCsrfValidation = false;


    public function behaviors()
    {
        $behaviors = [];

        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors'  => [
                'Origin'                           => ['*'],
                'Access-Control-Request-Method' => ['POST', 'OPTIONS'],
                'Access-Control-Request-Headers' => ['Origin', 'X-Requested-With', 'Content-Type', 'accept', 'Authorization'],
                'Access-Control-Allow-Credentials' => true,
            ]
        ];

        $behaviors['verbs'] = [
            'class' => VerbFilter::className(),
            'actions' => [
                'index'  => ['post'],
            ],
        ];

        return $behaviors;
    }

    public function actionIndex()
    {
        $modelKey = Yii::$app->request->get('model');
        $modelClass = isset(self::$models[$modelKey]) ? self::$models[$modelKey] : null;
        $order = Yii::$app->request->post('order');
        if ($modelClass) {
            foreach ($order as $id => $n) {
                /** @var yii\db\ActiveRecord $item */
                $item = $modelClass::find()->where(['id' => $id])->one();
                //var_dump($item);
                $item->n = $n;
                $item->save();
            }
        }
    }
}