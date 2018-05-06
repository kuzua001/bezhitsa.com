<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 5/27/17
 * Time: 2:31 AM
 */

namespace frontend\controllers;

use frontend\components\AppHelper;
use frontend\models\data\FitnessOrder;
use yii\web\Controller;
use yii;

// Yii2 cache
// Yii2 cache invalidation
// Yii2 dependency injection (compomnents)
// Ajax npost get examples
// CSRF validation mechanizm
// Jquery fadeIn/fadeOut, css tranzition
// CSS display none;
// twitter bootstrap
// yii2 User model authorization
// todo yii2 RBAC

class AjaxController extends Controller
{
    public function beforeAction($action)
    {
        // Отключение csrf
        $this->enableCsrfValidation = false;

        return parent::beforeAction($action);
    }


    public function actionCreateOrder()
    {
        if (!Yii::$app->request->isPost) {
            return;
        }

        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

        $name = Yii::$app->request->post('name');
        $phone = Yii::$app->request->post('phone');
        $email = Yii::$app->request->post('email');
        $trainerId = Yii::$app->request->post('trainer_id');

        try {
            $order = new FitnessOrder();
            $order->name = $name;
            $order->phone = $phone;
            $order->email = $email;
            $order->trainer_id = $trainerId;
            $order->ts_created = time();
            $order->save();
            $result = [
                'status' => 'success',
                'order_id' => $order->id,
                'message' => 'Ваша заявка блабла бла',
            ];
        } catch (yii\db\Exception $ex) {
            $result = [
                'status' => 'error'
            ];
        }

        return $result;
    }
}