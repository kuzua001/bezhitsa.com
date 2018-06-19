<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/17
 * Time: 3:37 PM
 */
namespace backend\controllers\api\images;

use yii\rest\IndexAction;

class CustomIndexAction extends IndexAction
{

    protected function prepareDataProvider()
    {
        $provider = parent::prepareDataProvider();
        $provider->pagination = false;
        return $provider;
    }

    public function run()
    {
        return parent::run();
    }
}