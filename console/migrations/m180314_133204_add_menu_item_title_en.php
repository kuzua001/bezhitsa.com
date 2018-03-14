<?php

use yii\db\Migration;

class m180314_133204_add_menu_item_title_en extends Migration
{
    public function up()
    {
        $this->addColumn('cms_menu_item', 'title_en', $this->string(255)->comment('Английская версия пункта меню'));
    }

    public function down()
    {
        $this->dropColumn('cms_menu_item', 'title_en');
    }
}
