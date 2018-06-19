<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/17
 * Time: 3:37 PM
 */
namespace backend\controllers\api\pagefields;

use frontend\components\LanguageHelper;
use frontend\models\Page;
use backend\models\api\PageFieldsUpdateResponse;
use frontend\models\PageParams;
use yii\rest\UpdateAction;

class CustomUpdateAction extends UpdateAction
{

    /**
     * Displays a model.
     *
     * @param string $id the primary key of the model.
     *
     * @return PageFieldsUpdateResponse the model being displayed
     */
    public function run($id)
    {
        $data = json_decode(\Yii::$app->getRequest()->getRawBody(), true);

        $langId = \Yii::$app->request->get('lang', LanguageHelper::getDefaultLanguage());
        LanguageHelper::setCurrentLanguage($langId);

        $page = Page::id($id);

        $page->pageParams->initFromArray($data);

        $page->save();


        return new PageFieldsUpdateResponse([
            'test' => 'test'
        ]);
        //return !empty($page) ? $page->getPageFields() : null;
    }
}