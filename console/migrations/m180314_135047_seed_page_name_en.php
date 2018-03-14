<?php

use yii\db\Migration;
use frontend\models\Page;

class m180314_135047_seed_page_name_en extends Migration
{
    public function up()
    {
        $this->translate('Фитнес', 'Fitness');
        $this->translate('О Бежица Фитнес', 'About Bezhitsa Fitness');
        $this->translate('Услуги', 'Services');
        $this->translate('Контакты', 'Contacts');
        $this->translate('Все номера', 'All rooms');
        $this->translate('Главная страница', 'Mainpage');
        $this->translate('Бронирование', 'Booking');
        $this->translate('Об отеле', 'About');
        $this->translate('Ресторан', 'Restaurant');
        $this->translate('Тренеры', 'Trainers');
        $this->translate('Меню', 'Menu');
        $this->translate('Страница номера', 'Room page');
        $this->translate('Страница тренера', 'Trainer page');
        $this->translate('Сервис', 'Service');
        $this->translate('О Ресторане', 'About restaurant');
        $this->translate('Расписание', 'Schedule');
        $this->translate('Вакансии', 'Vacancies');
    }

    /**
     * Перевести пункты меню
     * @param $from Какое слово с русского переводить в меню
     * @param $toEn На какое английское слово переводить
     */
    private function translate($from, $toEn) {
        /**
         * @var $pages Page[]
         */
        $pages = Page::find()->where('name = :name', [
            'name' => $from
        ])->all();
        foreach ($pages as $page) {
            $page->name_en = $toEn;
            $page->save();
        }
    }

    public function down()
    {
        echo "m180314_135047_seed_page_name_en cannot be reverted.\n";

        return false;
    }
}
