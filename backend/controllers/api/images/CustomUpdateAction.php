<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/17
 * Time: 3:37 PM
 */
namespace backend\controllers\api\images;

use Yii;
use yii\db\Exception;
use yii\helpers\Url;
use yii\rest\UpdateAction;
use yii\web\Response;
use yii\web\ServerErrorHttpException;
use common\models\Image;

class CustomUpdateAction extends UpdateAction
{

    /**
     * @param string $id
     * @return ActiveRecord|\yii\db\ActiveRecordInterface
     * @throws ServerErrorHttpException
     * @throws \yii\base\InvalidConfigException
     * @throws \yii\web\NotFoundHttpException
     */
    public function run($id)
    {
        /* @var $model ActiveRecord */
        $model = $this->findModel($id);

        if ($this->checkAccess) {
            call_user_func($this->checkAccess, $this->id, $model);
        }

        $model->scenario = $this->scenario;
        $model->load(Yii::$app->getRequest()->getBodyParams(), '');
        if ($model->save() === false && !$model->hasErrors()) {
            throw new ServerErrorHttpException('Failed to update the object for unknown reason.');
        }

        // todo - сделать замену картинки

        return $model;
    }
}