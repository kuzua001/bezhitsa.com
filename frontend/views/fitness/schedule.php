<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/21/17
 * Time: 9:04 PM
 */

use frontend\components\AppHelper;
use frontend\widgets\fitness\TrainingItem;

$interval  = new DateInterval('P1D');
$dateRange = new DatePeriod($minDate, $interval , $maxDate);
?>
<section class="training-schedule-element" style="background-color: #eae4cf">
	<div class="content-wrapper">
		<div class="container container-90">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12">
					<h2 class="centered-title-element black-text">Расписание</h2>
				</div>
			</div>
			<div class="schedule-top">
				<div class="row navigation">
					<div class="col-lg-3 left">
						<button class="arrow prev"></button>
						Предыдующая неделя
					</div>
					<div class="col-lg-6 center">
					<span class="header">
						Групповые занятия с 20.11.2017 по 26.11.2017
					</span>
					</div>
					<div class="col-lg-3 right">
						Следующая неделя
						<button class="arrow next"></button>
					</div>
				</div>
				<div class="activity-type-list">
					<div class="row">
						<div class="col-lg-2"><i class="trainig-activity-type" style="background-color: #00aa00"></i>Аэробные тренировки</div>
						<div class="col-lg-2"></div>
						<div class="col-lg-2"></div>
						<div class="col-lg-2"></div>
						<div class="col-lg-2"></div>
						<div class="col-lg-2"></div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<table class="schedule">
							<thead>
							<tr>
								<th></th>
                                <?php foreach ($dateRange as $date) { ?>
									<th class="day">
                                        <?= AppHelper::getFormattedDayOfWeek($date) ?>
									</th>
                                <?php } ?>
							</tr>
							</thead>
							<tbody>
                            <?php for ($hour = $minHour; $hour <= $maxHour; $hour ++) { ?>
								<tr>
									<td class="hour"><?= $hour . ':00' ?></td>
                                    <?php for ($day = 1; $day <= 7; $day ++) { ?>
                                        <?php
                                        $trainigs = isset($schedule[$day]) && isset($schedule[$day][$hour]) ? $schedule[$day][$hour] : [];
                                        $nCol = count($trainigs);
                                        ?>
										<td class="col-<?= $nCol?>">
                                            <?php foreach ($trainigs as $item) { ?>
                                                <?php
                                                /** @var $item \frontend\models\data\TrainingSchedule */
                                                echo TrainingItem::widget([
                                                    'item' => $item
                                                ]) ?>
                                            <?php } ?>
										</td>
                                    <?php } ?>
								</tr>
                            <?php } ?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>

    <div class="content-wrapper schedule-data">

    </div>

</section>