<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/21/17
 * Time: 12:15 AM
 */

namespace frontend\models\data;

use yii\db\ActiveRecord;

/**
 * Class TrainingActivity
 * @property $id integer
 * @property $type_id integer
 * @property $title string
 * @property $description string
 * @package frontend\models\data
 */
class TrainingActivity extends ActiveRecord
{
    /**
     * @return \yii\db\ActiveRecord|TrainingActivityType
     */
    public function getActivityType()
    {
        return $this->hasOne(TrainingActivityType::className(), ['id' => 'type_id'])->one();
    }
}