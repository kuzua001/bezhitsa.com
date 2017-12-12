<?php
namespace frontend\controllers;

use Faker\Provider\DateTime;
use frontend\components\AppHelper;
use frontend\models\data\Trainer;
use frontend\models\data\TrainingActivity;
use frontend\models\data\TrainingActivityType;
use frontend\models\data\TrainingSchedule;
use yii\web\Controller;
use yii;
use yii\web\NotFoundHttpException;


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

    /**
     * Показывает раписание
     * @param $weekNumber integer сдвиг от текущей недели
     *
     * @throws NotFoundHttpException
     * @return string
     */
    public function actionSchedule($weekNumber = 0)
    {
        $weekNumber = (int) $weekNumber;

        if ($weekNumber < -10) {
            throw new NotFoundHttpException('Не найдено расписание для этой недели');
        }

        $date = new \DateTime();
        if ($weekNumber > 0) {
            $date = $date->modify('+' . $weekNumber . ' weeks');
        } else if ($weekNumber < 0) {
            $date = $date->modify('-' . -$weekNumber . ' weeks');
        }

        $ts = $date->format('U');
        $start = (date('w', $ts) == 0) ? $ts : strtotime('last monday', $ts);

        // Получим времена начала и конца интересующей недели
        $minDate = date('Y-m-d 00:00:00', $start);
        $maxDate = date('Y-m-d 23:59:59', strtotime('next sunday', $start));

        $schedule = TrainingSchedule::getSchedule($minDate, $maxDate);

        $maxHour = 0;
        $minHour = 23;

        foreach ($schedule as $date => $timeData) {
            $maxHour = max($maxHour, max(array_keys($timeData)));
            $minHour = min($minHour, min(array_keys($timeData)));

//            print_r($date);
//            print_r(array_keys($timeData));
//            if (isset($timeData[13])) {
//                print_r($date);
//                print_r($timeData[13]);
//            }
        }

        //exit();

        $activityTypes = TrainingActivityType::find()->all();

        return $this->render('schedule.php', [
            'page'          => $this->page,
            'schedule'      => $schedule,
            'activityTypes' => $activityTypes,
            'minHour'       => $minHour,
            'maxHour'       => $maxHour,
            'minDate'       => new \DateTime($minDate),
            'maxDate'       => (new \DateTime($maxDate))->modify('+1 sec'),
            'weekNumber'    => $weekNumber,
            'dayNumber'     => date('w', time()),
        ]);
    }

}