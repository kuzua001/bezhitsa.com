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
 * @property $title string
 * @property $color string
 * @property $description string
 * @property $short_title string
 * @package frontend\models\data
 */
class TrainingActivityType extends ActiveRecord
{
    use TranslatableTrait;

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

    /**
     * @return \yii\db\ActiveRecord|TrainingActivity[]
     */
    public function getActivities()
    {
        return $this->hasMany(TrainingActivity::className(), ['type_id' => 'id'])->all();
    }
}