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
use Yii;
use yii\base\Exception;
use yii\base\Object;
use yii\rest\ViewAction;
use yii\web\HttpException;

class CustomViewAction extends ViewAction
{
    /**
     * @param string $id
     * @return \frontend\models\PageFields|null|\yii\db\ActiveRecordInterface
     * @throws HttpException
     * @throws \Exception
     */
    public function run($id)
    {
        $request = Yii::$app->request;
        $langId = $request->get('lang', LanguageHelper::getDefaultLanguage());
        try {
            LanguageHelper::setCurrentLanguage($langId);
        } catch (Exception $e) {
            throw new HttpException(400, $e->getMessage());
        }


        $page = Page::id($id);

        return !empty($page) ? $page->getPageFields() : null;
    }
}