<?php

use yii\db\Migration;

/**
 * Handles the creation of table `cms_model_translation`.
 */
class m180410_194645_create_cms_model_translation_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('cms_model_translation', [
            'id' => $this->primaryKey(),
            'full_field_key' => $this->string(255)->comment('Ключ переводимого поля в какой-то модели'),
            'model_id' => $this->integer()->comment('Значение id конкретной модели, поле которой мы переводим'),
            'lang_code' => $this->integer()->comment('Код языка на который переводим'),
            'value' => $this->string(8000)->comment('Значение перевода'),
        ]);

        $this->createIndex('idx_cms_model_translation_full_field_key', 'cms_model_translation', 'full_field_key');
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('cms_model_translation');
    }
}
