<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 9/4/17
 * Time: 2:19 AM
 */

namespace backend\controllers\api;

use frontend\components\LanguageHelper;
use frontend\models\data\RestaurantMenu;
use Yii;
use yii\filters\VerbFilter;
use yii\web\Controller;

class MenuBulkController extends Controller
{
    protected function verbs() {
        return [
            'rename' => [ 'PUT' ],
            'delete' => [ 'DELETE' ],
        ];
    }

    public $enableCsrfValidation = false;

    private $currentLang = LanguageHelper::LANG_RU;

    public function behaviors()
    {
        $behaviors = [];
        $behaviors['verbs'] = [
            'class' => VerbFilter::className(),
            'actions' => [
                'rename' => [ 'PUT' ],
                'delete' => [ 'DELETE' ],
            ],
        ];

        return $behaviors;
    }

    public function beforeAction($action)
    {
        $lang = Yii::$app->request->get('lang');
        try {
            LanguageHelper::setCurrentLanguage($lang);
        } catch (yii\base\Exception $e) {
            throw new HttpException(400, $e->getMessage());
        }

        $this->currentLang = $lang;
        return parent::beforeAction($action);
    }

    public function getCategoryFieldName()
    {

        return $this->currentLang == LanguageHelper::LANG_EN ? 'category_title_en' : 'category_title_ru';
    }

    public function actionRename()
    {
        $newTitle = Yii::$app->request->post('newTitle');
        $oldTitle = Yii::$app->request->post('oldTitle');

        RestaurantMenu::updateAll([$this->getCategoryFieldName() => $newTitle], $this->getCategoryFieldName() . ' = :title', [
            'title' => $oldTitle
        ]);
    }

    public function actionDelete()
    {
        $catTitle = Yii::$app->request->get('catTitle');
        RestaurantMenu::deleteAll($this->getCategoryFieldName() . ' = :title', [
            'title' => $catTitle
        ]);
    }
}