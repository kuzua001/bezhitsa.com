<?php
use frontend\widgets\section\Section;
use frontend\models\pages\FitnessStyleSectionParams;
use yii\helpers\Html;
use \frontend\models\pages\TrainersListSectionParams;
use frontend\models\data\Trainer;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var TrainersListSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;



$trainers = Trainer::find()->all();
$trainer = $trainers[0];
?>