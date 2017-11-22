<?php
namespace frontend\controllers;

use Faker\Provider\DateTime;
use frontend\components\AppHelper;
use frontend\models\data\Trainer;
use frontend\models\data\TrainingSchedule;
use yii\web\Controller;
use yii;


class FitnessController extends CmsController
{
    public function actionIndex()
    {
        return $this->render('index.php', [

        ]);
    }

    /**
     * todo я знаю модель, я вижу интерфейс, тудушкой разноцветной Иван спасет код
     * @return string
     */
    public function actionTrainerList()
    {
        $trainers = Trainer::find()->all();

        return $this->render('list.php', [
            'page' => $this->page,
            'trainers' => $trainers
        ]);
    }

    public function actionTrainerItem($alias)
    {
        $item = Trainer::find()->where('alias = :alias', [
            ':alias' => $alias
        ])->one();

        return $this->render('item.php', [
            'page' => $this->page,
            'item' => $item
        ]);
    }

    public function actionSchedule()
    {
        /**
         * Вначале получим начало и коней текцщей недели
         */
        $weekNumber = 0;

        $date = new \DateTime();
        if ($weekNumber > 0) {
            $date = $date->modify('+' . $weekNumber . ' weeks');
        } else if ($weekNumber < 0) {
            $date = $date->modify('-' . -$weekNumber . ' weeks');
        }

        $ts = $date->format('U');
        $start = (date('w', $ts) == 0) ? $ts : strtotime('last monday', $ts);

        // Получим времена начала и конца интересующей недели
        $minDate = date('Y-m-d H:i:s', $start);
        $maxDate = date('Y-m-d H:i:s', strtotime('next sunday', $start));

        $schedule = TrainingSchedule::getSchedule($minDate, $maxDate);

        $maxHour = 0;
        $minHour = 23;

        foreach ($schedule as $date => $timeData) {
            $maxHour = max($maxHour, max(array_keys($timeData)));
            $minHour = min($minHour, min(array_keys($timeData)));
        }

        return $this->render('schedule.php', [
            'page'     => $this->page,
            'schedule' => $schedule,
            'minHour'  => $minHour,
            'maxHour'  => $maxHour,
            'minDate'  => new \DateTime($minDate),
            'maxDate'  => (new \DateTime($maxDate))->modify('+1 sec'),
        ]);
    }

}