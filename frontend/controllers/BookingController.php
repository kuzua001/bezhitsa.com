<?php
namespace frontend\controllers;

use frontend\components\AppHelper;
use frontend\models\data\Room;
use yii\web\Controller;
use yii;


class BookingController extends CmsController
{

    public function actionList()
    {
        $rooms = Room::find()->all();
        return $this->render('list.php', [
            'page'  => $this->page,
            'rooms' => $rooms,
        ]);
    }

    public function actionItem($alias)
    {
        $rooms = Room::find()->all();
        $item = Room::find()->where('alias = :alias', [
            ':alias' => $alias
        ])->one();

        if (empty($item)) {
            throw new yii\web\NotFoundHttpException('Страница с таким номером не найдена');
        }

        return $this->render('item.php', [
            'page'  => $this->page,
            'item'  => $item,
            'rooms' => $rooms,
        ]);
    }

    public function actionStart()
    {
        return $this->render('start.php', [
            'page'  => $this->page,
        ]);
    }
}