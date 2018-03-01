<?php

use yii\db\Migration;

class m180228_185504_page_add_column_params_data_ru_en extends Migration
{
    public function up()
    {
        $this->addColumn('page', 'params_data_ru', $this->text());
        $this->addColumn('page', 'params_data_en', $this->text());
    }

    public function down()
    {
        $this->dropColumn('page', 'params_data_ru');
        $this->dropColumn('page', 'params_data_en');
    }
}
