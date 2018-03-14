<?php

use yii\db\Migration;
use frontend\models\cms\ux\MenuItem;

class m180314_133515_seed_menu_item_title_en extends Migration
{
    public function up()
    {
        $this->translate('Отель', 'Hotel');
        $this->translate('Фитнес', 'Fitness');
        $this->translate('Ресторан', 'Restaurant');
        $this->translate('Главная', 'Mainpage');
    }

    /**
     * Перевести пункты меню
     * @param $from Какое слово с русского переводить в меню
     * @param $toEn На какое английское слово переводить
     */
    private function translate($from, $toEn) {
        /**
         * @var $hotelItems MenuItem[]
         */
        $hotelItems = MenuItem::find()->where('title = :title', [
            'title' => $from
        ])->all();
        foreach ($hotelItems as $hotelItem) {
            $hotelItem->title_en = $toEn;
            $hotelItem->save();
        }
    }

    public function down()
    {
        echo "m180314_133515_seed_menu_item_title_en cannot be reverted.\n";

        return false;
    }
}
