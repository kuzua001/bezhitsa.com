<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/21/17
 * Time: 9:04 PM
 */

use frontend\components\AppHelper;
use frontend\widgets\fitness\TrainingItem;
use frontend\models\Page;

$interval  = new DateInterval('P1D');
$dateRange = new DatePeriod($minDate, $interval , $maxDate);

/**
 * @var $weekNumber integer
 * @var $dayNumber integer
 * @var $activityTypes \frontend\models\data\TrainingActivityType[]
 * @var $page \frontend\models\pages\FitnessPage
 */
?>
<section class="training-schedule-element" style="background-color: #eae4cf">
	<div class="content-wrapper">
		<div class="container container-80">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12">
					<h2 class="centered-title-element black-text"><?= Yii::t('app/titles', 'Расписание'); ?></h2>
				</div>
			</div>
			<?php if ($page->pageParams->showCustomSchedule) { ?>
				<?= $page->pageParams->customSchedule ?>
			<?php } else { ?>
				<div class="schedule-top">
					<div class="row navigation">
						<div class="col-xs-2 col-md-3 left">
							<a href="<?= Page::id(36)->getUrl(['weekNumber' => $weekNumber - 1],true) ?>">
								<button class="arrow prev"></button>
								<span class="label">Предыдующая неделя</span>
							</a>
						</div>
						<div class="col-xs-8 col-md-6 center">
					<span class="header">
						<span class="desktop-only">Групповые занятия</span> с <?= $minDate->format('d.m.Y') ?> по <?= $maxDate->format('d.m.Y') ?>
					</span>
						</div>
						<div class="col-xs-2 col-md-3 right">
							<a href="<?= Page::id(36)->getUrl(['weekNumber' => $weekNumber + 1],true) ?>">
								<span class="label">Следующая неделя</span>
								<button class="arrow next"></button>
							</a>
						</div>
					</div>
					<div class="clearfix"></div>
					<div class="activity-type-list desktop-only hidden-md">
						<div class="row">
							<?php foreach($activityTypes as $type) { ?>
								<div class="col-lg-2"><i class="trainig-activity-type" style="background-color: <?= $type->color ?>"></i><?= $type->short_title ?></div>
							<?php } ?>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<div class="mobile-only">
								<div class="days-of-week" ng-controller="TabsController as tabs" ng-model="tabs.activeTabIndex" ng-init="tabs.activeTabIndex = <?= $dayNumber?>" ng-cloak>
									<?php foreach ($dateRange as $day => $date) { ?>
										<div class="day" ng-class="{ true: 'selected'}[tabs.activeTabIndex == <?= $day?>]" ng-click="tabs.setActiveTabIndex(<?= $day?>)">
											<?= str_replace("\n", "<br>", AppHelper::getFormattedDayOfWeek($date, "D\nd")); ?>
										</div>
									<?php } ?>
									<?php foreach ($dateRange as $day => $date) { ?>
										<?php
										$trainigs = isset($schedule[$day + 1])  ? call_user_func_array('array_merge', $schedule[$day + 1]) : [];
										?>
										<div class="day-events" ng-show="tabs.activeTabIndex == <?= $day?>">
											<?php if (count($trainigs)) { ?>
												<?php foreach ($trainigs as $item) { ?>
													<?php
													/** @var $item \frontend\models\data\TrainingSchedule */
													echo TrainingItem::widget([
														'item' => $item,
														'large' => true,
													]) ?>
												<?php } ?>
											<?php } else { ?>
												<div class="no-trainings">
													Нет занятий
												</div>
											<?php } ?>
										</div>
									<?php } ?>
								</div>
							</div>
							<table class="schedule desktop-only">
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
										<?php foreach ($dateRange as $day => $date) { ?>
											<?php
											$trainigs = isset($schedule[$day + 1]) && isset($schedule[$day + 1][$hour]) ? $schedule[$day + 1][$hour] : [];
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
					<div class="extended-title hidden-sm">
					<span class="item">
						<i class="fire"></i>Высокой интенсивности
					</span>
						<span class="item">
						<i class="new"></i>Новые уроки
					</span>
						<span class="item">
						<i class="training-room-number">1</i>Номер зала
					</span>
						<span class="item">
						<i class="training-room-number">2</i>Номер зала
					</span>
						<span class="item">
						<i class="training-room-number">3</i>Бассейн
					</span>
					</div>
					<div class="extended-title row visible-sm">
						<div class="item col-sm-12">
							<i class="fire"></i>Урок высокой интенсивности
						</div>
						<div class="item col-sm-12">
							<i class="new"></i>Новые уроки
						</div>
						<div class="item col-sm-12">
							<i class="training-room-number">1</i>Номер зала
						</div>
						<div class="item col-sm-12">
							<i class="training-room-number">2</i>Номер зала
						</div>
						<div class="item col-sm-12">
							<i class="training-room-number">3</i>Бассейн
						</div>
					</div>
				</div>
			<?php } ?>
			<div class="schedule-bottom">
                <?php if ($page->pageParams->showCustomActivities) { ?>
					<?= $page->pageParams->customActivities ?>
				<?php } else { ?>
                	<?php foreach($activityTypes as $type) { ?>
					<div class="activity-type-element">
						<h3 class="title">
							<i class="activity-type" style="background-color: <?= $type->color ?>"></i>
                            <?= $type->title ?>
						</h3>
						<p>
							<?= $type->description ?>
						</p>
						<div class="row">
                            <?php foreach($type->getActivities() as $activity) { ?>
								<div class="col-lg-4">
									<div class="card-element">
										<header><?= $activity->title ?></header>
										<section class="content">
											<p>
                                                <?= $activity->description ?>
											</p>
										</section>
									</div>
								</div>
                            <?php } ?>
						</div>
					</div>
                <?php } ?>
				<?php } ?>
			</div>
		</div>
	</div>
</section>