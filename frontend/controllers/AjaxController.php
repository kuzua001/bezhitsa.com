<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 5/27/17
 * Time: 2:31 AM
 */

namespace frontend\controllers;

use frontend\components\AppHelper;
use frontend\models\cms\CmsSettings;
use frontend\models\data\FitnessOrder;
use frontend\models\data\Trainer;
use frontend\models\Domain;
use yii\web\Controller;
use yii;

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
            $trainer = Trainer::find()->where(['id' => $trainerId])->one();
            $order->ts_created = time();
            $order->save();
            $result = [
                'status' => 'success',
                'order_id' => $order->id,
                'message' => '',
            ];

            $recipients = CmsSettings::getValueArr(Domain::DOMAIN_FITNESS_ID,'EMAIL_LIST');
            $subject = CmsSettings::getValue(Domain::DOMAIN_FITNESS_ID,'EMAIL_SUBJECT');
            $from = 'testfit@bezhitsa.com';

            foreach ($recipients as $item) {
                $to = $item['email'];
                Yii::$app->mailer->compose('fitness/email', ['order' => $order, 'trainer' => $trainer])
                    ->setFrom($from)
                    ->setTo($to)
                    ->setSubject($subject)
                    ->send();
            }

        } catch (yii\db\Exception $ex) {
            $result = [
                'status' => 'error'
            ];
        }

        return $result;
    }
}