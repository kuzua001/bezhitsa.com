<?php
namespace frontend\controllers;

use frontend\components\AppHelper;
use frontend\models\data\Trainer;
use yii\web\Controller;
use yii;


class FitnessController extends CmsController
{
    public function actionIndex()
    {
        return $this->render('index.php', [

        ]);
    }

    /**
     * todo я знаю модель, я вижу интерфейс, тудушкой разноцветной Иван спасет код
     * @return string
     */
    public function actionTrainerList()
    {
        $trainers = Trainer::find()->all();

        return $this->render('list.php', [
            'page' => $this->page,
            'trainers' => $trainers
        ]);
    }

    public function actionTrainerItem($alias)
    {
        $item = Trainer::find()->where('alias = :alias', [
            ':alias' => $alias
        ])->one();

        return $this->render('item.php', [
            'page' => $this->page,
            'item' => $item
        ]);
    }

}