<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/17
 * Time: 3:37 PM
 */
namespace backend\controllers\api\page;

use Yii;
use yii\db\Exception;
use yii\helpers\Url;
use yii\web\Response;
use yii\web\ServerErrorHttpException;
use frontend\models\Page;
use yii\rest\CreateAction;

class CustomCreateAction extends CreateAction
{
    /**
     * Displays a model.
     * @return Page the model being displayed
     */
    public function run()
    {
        $name       = Yii::$app->request->post('name');
        $domainId   = Yii::$app->request->post('domain_id');
        $showInMenu = Yii::$app->request->post('show_in_menu');
        $url        = Yii::$app->request->post('url');


        $page = Page::create($name, $domainId, $showInMenu, $url);

        Yii::$app->response->format = Response::FORMAT_JSON;
        return $page;
    }
}