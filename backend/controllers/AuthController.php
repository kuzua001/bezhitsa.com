<?php
namespace backend\controllers;

use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use yii\web\Response;
use yii\web\UnauthorizedHttpException;

/**
 * Site controller
 */
class AuthController extends Controller
{
    public $layout = false;

    public function beforeAction($action)
    {
        $this->enableCsrfValidation = false;
        Yii::$app->response->format = Response::FORMAT_JSON;
        return parent::beforeAction($action);
    }

    public function actionIndex()
    {
        $userData = [
            'auth' => !Yii::$app->user->isGuest,
            'status' => 'success'
        ];
        try {
            if (!Yii::$app->user->isGuest) {
                $userData['userName'] = Yii::$app->getUser()->getIdentity()->username;
                $userData['userEmail'] = Yii::$app->getUser()->getIdentity()->email;
            }
        } catch (\Exception $e) {
            return ['status' => 'error'];
        }

        return $userData;
    }

    /**
     * Login action.
     * @throws UnauthorizedHttpException
     */
    public function actionLogin()
    {
        $model = new LoginForm();

        if ($model->load(Yii::$app->request->post(), '') && $model->login()) {
            return $this->actionIndex();
        } else {
            throw new UnauthorizedHttpException('Provided credentials are not valid');
        }
    }

    /**
     * Logout action.
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return [
            'status' => 'success'
        ];
    }
}
