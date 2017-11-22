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
 * @property $room_id integer
 * @property $trainer_id integer
 * @property $activity_id integer
 * @property $date_start \DateTime
 * @property $date_end \DateTime
 * @property $week_regularity boolean
 * @property $duration float
 * @package frontend\models\data
 */
class TrainingSchedule extends ActiveRecord
{
    /**
     * @return \yii\db\ActiveRecord|Room
     */
    public function getRoom()
    {
        return $this->hasOne(TrainingRoom::className(), ['id' => 'room_id'])->one();
    }

    /**
     * @return \yii\db\ActiveRecord|Trainer
     */
    public function getTrainer()
    {
        return $this->hasOne(Trainer::className(), ['id' => 'trainer_id'])->one();
    }

    /**
     * @return \yii\db\ActiveRecord|TrainingActivity
     */
    public function getActivity()
    {
        return $this->hasOne(TrainingActivity::className(), ['id' => 'activity_id'])->one();
    }

    public function afterFind()
    {
        $this->date_start = new \DateTime($this->date_start);
        $this->date_end   = new \DateTime($this->date_end);
    }

    /**
     * Получает расписание в виде массива [день недели][час][тренировка 1, тренировка 2]
     * @param int $weekNumber
     *
     * @return array
     */
    public static function getSchedule($start_date, $end_date) {

        $schedule = self::find()
           ->where(':start between date_start and date_end or :end between date_start and date_end and week_regularity = 1', [
               ':start' => $start_date,
               ':end' => $end_date,
           ])->orWhere('date_start between :start and :end and week_regularity = 0', [
                ':start' => $start_date,
                ':end' => $end_date
           ])->all();

        $scheduleIndex = [];

        foreach ($schedule as $item) {
            /** @var $item TrainingSchedule */

            $hour = $item->date_start->format('H');
            $day  = $item->date_start->format('w');

            if (!isset($scheduleIndex[$day])) {
                $scheduleIndex[$day] = [];
            }

            if (!isset($scheduleIndex[$day][$hour])) {
                $scheduleIndex[$day][$hour] = [];
            }

            $scheduleIndex[$day][$hour][] = $item;
        }

        return $scheduleIndex;
    }
}