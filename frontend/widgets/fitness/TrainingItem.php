<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 6/7/17
 * Time: 7:46 PM
 */

namespace frontend\widgets\fitness;

use frontend\assets\AppAsset;
use frontend\models\data\Trainer;
use frontend\models\pages\SectionParams;
use frontend\models\SectionItem;
use yii\base\Widget;
use yii\helpers\Html;
use frontend\models\data\TrainingSchedule;
use frontend\assets\BootstrapAsset;

class TrainingItem extends Widget
{

    /**
     * Элемент расписания
     * @var $item TrainingSchedule
     */
    public $item;

    public function run()
    {
        $trainer    = $this->item->getTrainer();
        $activity   = $this->item->getActivity();
        $roomNumber = $this->item->getRoom()->number;

        $html = Html::tag('div',
            Html::tag('i', '', ['class' => 'training-extra']) .
            Html::tag('h2', $activity->title, ['class' => 'title']) .
            Html::tag('a', $trainer->name, ['class' => 'trainer-link', 'href' => $trainer->getUrl()]) .
            Html::tag('i', $roomNumber, ['class' => 'training-room-number']),
            [
                'class' => 'training-item'
            ]
        );

        return $html;
    }
}