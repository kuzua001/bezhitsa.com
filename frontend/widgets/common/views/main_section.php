<?php
use frontend\widgets\common\MainSection;
use yii\helpers\Html;

/** @var MainSection $widget */

$widget = $this->context;
?>
<?= Yii::t('message_1', 'текст на исходном языке'); ?>
<section class="main">
	<div class="content-wrapper">
		<img class="bg" src="/img/top-bg.jpg">
		<div class="container container-90">
			<div class="row clear indent">
				<div class="col-lg-4 center desktop-only">
					<img class="logo" src="/img/big-logo.png">
					<h1>
                        <?= $widget->title() ?>
					</h1>
				</div>
				<div class="col-lg-5 greeting">
					<p class="header">
						<b>
						<?= $widget->welcomeHeader ?>
						</b>
					</p>
					<p class="content">
						<?= $widget->welcomeContent ?>
					</p>
				</div>
				<div class="col-lg-3">
					<?php if (count($widget->contactsList)) { ?>
						<dl class="contacts-element">
							<?php foreach($widget->contactsList as $item) { ?>
								<dt title="<?= $item['title'] ?>">
									<i class="<?= $item['class'] ?>"></i>
								</dt>
								<dd>
									<?= $item['value'] ?>
								</dd>
							<?php } ?>
						</dl>
					<?php } ?>
				</div>
			</div>
			<div class="row clear indent indent-large middle-row">
				<div class="col-lg-4 col-md-4 center">
					<section class="reservation-form-element" ng-controller="ReservationFormController as $form">
						<header>
							Забронировать проживание
						</header>
						<section class="content">
							<div class="dates">
								<input type="text" class="from" placeholder="заезд" style="font-size: 12px; color: #000" ng-model="$form.from">
								<input type="text" class="to" placeholder="выезд">
							</div>
							<div class="people">
								<input type="text" class="select" placeholder="1 Номер, 1 Взрослый, 0 Детей">
								<!-- redmine test -->

							</div>
						</section>
						<footer>
							<div class="apply" ng-cloak>Бронировать <span ng-bind="$form.from"></span></div>
						</footer>
					</section>
				</div>
				<div class="col-lg-8 col-md-8">
					<h2 class="main-slogan elegant-title-element">
						<span class="first"><?= $widget->mainSloganFirst ?></span>
						<span class="second"><?= $widget->mainSloganSecond ?></span>
						<span class="third"><?= $widget->mainSloganThird ?></span>
					</h2>
				</div>
			</div>
			<div class="row clear">
				<div class="col-lg-push-6 col-lg-6 col-md-push-4 col-md-8">
					<div class="right-content-block-element">
						<h3>
							<?= $widget->rightBlockHeader ?>

						</h3>
						<p>
                            <?= $widget->rightBlockContent ?>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>