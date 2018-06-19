<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/17
 * Time: 3:37 PM
 */
namespace backend\controllers\api\settings;

use backend\models\api\ArrayResponse;
use frontend\models\cms\CmsSettings;
use Yii;
use yii\rest\IndexAction;

class CustomIndexAction extends IndexAction
{
    /**
     * @return ArrayResponse|\yii\data\ActiveDataProvider
     */
    public function run()
    {
        $siteId = Yii::$app->request->get('site_id', null);

        return CmsSettings::getLoadedSettings($siteId);
    }
}