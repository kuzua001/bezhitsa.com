<?php

use yii\db\Migration;

/**
 * Class m180419_055345_create_fitness_orders
 */
class m180419_055345_create_fitness_orders extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('fitness_orders', [
            'id' => $this->primaryKey(),
            'name' => $this->string(255),
            'phone' => $this->string(255),
            'email' => $this->string(255),
            'ts_created' => $this->integer(),
            'trainer_id' => $this->integer()
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('fitness_orders');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180419_055345_create_fitness_orders cannot be reverted.\n";

        return false;
    }
    */
}
