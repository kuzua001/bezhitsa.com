<?php

use yii\db\Migration;

class m171027_205431_page_add_parent_id extends Migration
{
    public function up()
    {
        $this->addColumn('cms_page', 'parent_id', $this->integer()->null());
    }

    public function down()
    {
        $this->dropColumn('cms_page', 'parent_id');
    }
}
