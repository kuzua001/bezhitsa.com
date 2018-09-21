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
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\web\Controller;
use yii\web\UnauthorizedHttpException;
use yii\web\UploadedFile;
use yii\web\Response;
use backend\models\UploadForm;

class ReorderController extends Controller
{
    private static $models = [
        'trainingActivityType' => 'frontend\models\data\TrainingActivityType',
        'trainer' => 'frontend\models\data\Trainer',
        'room' => 'frontend\models\data\Room',
        'page' => 'frontend\models\Page',
        'restaurantMenu' => 'frontend\models\data\RestaurantMenu'
    ];

    private static $fields = [
        'page' => 'order'
    ];

    const DEFAULT_FIELD = 'n';

    protected static function getOrderField($modelKey)
    {
        return isset(self::$fields[$modelKey]) ? self::$fields[$modelKey] : self::DEFAULT_FIELD;
    }

    protected function verbs() {
        return [
            'index' => [ 'POST' ],
        ];
    }

    public $enableCsrfValidation = false;


    public function behaviors()
    {
        $behaviors = parent::behaviors();

        $behaviors ['access'] = [
            'class' => AccessControl::className(),
            'rules' => [
                [
                    'allow' => true,
                    'roles' => ['@'],
                ],

            ],
            'denyCallback' => function ($rule, $action) {
                throw new UnauthorizedHttpException('You are not allowed to access this page');
            }
        ];

        $behaviors['verbFilter'] = [
            'class' => VerbFilter::className(),
            'actions' => $this->verbs(),
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
                $item->{self::getOrderField($modelKey)} = $n;
                $item->save();
            }
        }
    }
}