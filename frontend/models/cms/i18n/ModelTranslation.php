<?php

namespace frontend\models\cms\i18n;

use Yii;

/**
 * This is the model class for table "cms_model_translation".
 *
 * @property integer $id
 * @property string $full_field_key
 * @property integer $model_id
 * @property integer $lang_code
 * @property string $value
 */
class ModelTranslation extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'cms_model_translation';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['model_id', 'lang_code'], 'integer'],
            [['full_field_key'], 'string', 'max' => 255],
            [['value'], 'string', 'max' => 8000],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'full_field_key' => 'Ключ переводимого поля в какой-то модели',
            'model_id' => 'Значение id конкретной модели, поле которой мы переводим',
            'lang_code' => 'Код языка на который переводим',
            'value' => 'Значение перевода',
        ];
    }

    /**
     * @inheritdoc
     * @return ModelTranslationQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new ModelTranslationQuery(get_called_class());
    }
}
