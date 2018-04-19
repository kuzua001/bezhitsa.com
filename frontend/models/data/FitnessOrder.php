<?php

namespace frontend\models\data;

use Yii;

/**
 * This is the model class for table "fitness_orders".
 *
 * @property int $id
 * @property string $name
 * @property string $phone
 * @property string $email
 * @property int $ts_created
 * @property int $trainer_id
 */
class FitnessOrder extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'fitness_orders';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['ts_created', 'trainer_id'], 'integer'],
            [['name', 'phone', 'email'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'phone' => 'Phone',
            'email' => 'Email',
            'ts_created' => 'Ts Created',
            'trainer_id' => 'Trainer ID',
        ];
    }
}
