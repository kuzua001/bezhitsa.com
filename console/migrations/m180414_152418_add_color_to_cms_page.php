<?php

use yii\db\Migration;

/**
 * Class m180414_152418_add_color_to_cms_page
 */
class m180414_152418_add_color_to_cms_page extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('cms_page', 'color', $this->string(255));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('cms_page', 'color');

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180414_152418_add_color_to_cms_page cannot be reverted.\n";

        return false;
    }
    */
}
