<?php

use yii\db\Migration;

class m180314_134930_add_page_name_en extends Migration
{
    public function up()
    {
        $this->addColumn('cms_page', 'name_en', $this->string(255)->comment('Английское название страницы'));
    }

    public function down()
    {
        $this->dropColumn('cms_page', 'name_en');
    }
}
