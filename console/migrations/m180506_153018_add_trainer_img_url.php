<?php

use yii\db\Migration;

/**
 * Class m180506_153018_add_trainer_img_url
 */
class m180506_153018_add_trainer_img_url extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('trainer', 'img_url', $this->string(255));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('trainer', 'img_url');

        return false;
    }
}
