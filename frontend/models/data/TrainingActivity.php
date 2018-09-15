<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/21/17
 * Time: 12:15 AM
 */

namespace frontend\models\data;

use frontend\components\TranslatableTrait;
use yii\db\ActiveRecord;

/**
 * Class TrainingActivity
 * @property $id integer
 * @property $type_id integer
 * @property $title string
 * @property $description string
 * @property $training_class string
 * @package frontend\models\data
 */
class TrainingActivity extends ActiveRecord
{
    use TranslatableTrait {
        beforeSave as public traitBeforeSave;
    }

    /**
     * Классы тренировок
     */
    const TYPE_NONE        = 0;
    const TYPE_CLASS_NEW   = 1;
    const TYPE_FAT_BURNING = 2;

    protected function translateFields() {
        return [
            'title', 'description'
        ];
    }

    public function afterFind()
    {
        parent::afterFind();
        $this->loadTranslations();
    }

    public function beforeSave($insert)
    {
        return $this->traitBeforeSave($insert);
    }

    /**
     * Возвращает класс для класса тренировка
     * @return string
     */
    public function getClassClass()
    {
        return $this->training_class == (self::TYPE_NONE ? '' :
                ($this->training_class == self::TYPE_CLASS_NEW ? ' new' : ' fire'));

    }

    /**
     * @return \yii\db\ActiveRecord|TrainingActivityType
     */
    public function getActivityType()
    {
        return $this->hasOne(TrainingActivityType::className(), ['id' => 'type_id'])->one();
    }

    public function scenarios()
    {
        return [
            'default' => $this->fields()
        ];
    }

    public function fields()
    {
        return [
            'id',
            'type_id',
            'title',
            'description',
            'training_class',
        ];
    }
}