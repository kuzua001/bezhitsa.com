<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/17
 * Time: 3:37 PM
 */
namespace backend\controllers\api\activity;

use Yii;
use yii\rest\IndexAction;

class CustomIndexAction extends IndexAction
{

    protected function prepareDataProvider()
    {
        $typeId = Yii::$app->request->get('type_id');

        $provider = parent::prepareDataProvider();
        $provider->pagination = false;

        if ($typeId) {
            $provider->query->where('type_id = :type', [
                'type' => $typeId
            ]);
        }

        return $provider;
    }

    public function run()
    {
        return parent::run();
    }
}