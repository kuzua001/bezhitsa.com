<?php
use frontend\widgets\section\Section;
use frontend\models\pages\HotelMainSectionParams;
use yii\helpers\Html;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var HotelMainSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
?>
<div class="row clear indent indent-large">
	<div class="col-lg-4 center desktop-only">
		<img class="logo" src="/img/big-logo.png">
		<h1 class="bezhitsa-title-element">
			<span class="name">Bezhitsa</span><br>
			<span class="type"><?= Html::encode($sectionParams->mainHeaderTypePart) ?></span>
		</h1>
	</div>
	<div class="col-lg-5 greeting">
		<p class="header">
			<b><?= Html::encode($sectionParams->greetingHeader) ?></b>
		</p>
		<p class="content">
			<?= Html::encode($sectionParams->greetingContent) ?>
		</p>
	</div>
	<div class="col-lg-3">
		<dl class="contacts-element">
			<dt title="Адрес">
				<i class="address"></i>
			</dt>
			<dd>
				Клинцовская, 41,<br>
				Брянск<br>
				Российская Федерация<br>
			</dd>
			<dt title="Телефон">
				<i class="phone"></i>
			</dt>
			<dd>
				+7 (915) 117-98-77
			</dd>
		</dl>
	</div>
</div>
<div class="row clear indent indent-large middle-row">
	<div class="col-lg-4 col-md-4 center">
		<section class="reservation-form-element">
			<header>
				Забронировать проживание
			</header>
			<section class="content">
				<div class="dates">
					<input type="text" class="from" placeholder="заезд">
					<input type="text" class="to" placeholder="выезд">
				</div>
				<div class="people">
					<input type="text" class="select" placeholder="1 Номер, 1 Взрослый, 0 Детей">
					<!-- redmine test -->

				</div>
			</section>
			<footer>
				<div class="apply">Бронировать</div>
			</footer>
		</section>
	</div>
	<div class="col-lg-8 col-md-8">
		<h2 class="main-slogan elegant-title-element">
			<span class="first"><?= Html::encode($sectionParams->sloganFirst) ?></span>
			<span class="second"><?= Html::encode($sectionParams->sloganSecond) ?></span>
			<span class="third"><?= Html::encode($sectionParams->sloganThird) ?></span>
		</h2>
	</div>
</div>
<div class="row clear">
	<div class="col-lg-push-6 col-lg-6 col-md-push-4 col-md-8">
		<div class="right-content-block-element">
			<h3>Харакетристики отеля</h3>
			<p>
				Отель «Бежица» предлагает 48 роскошных номеров в самом центре города. Наслаждайтесь стильным интерьером, уникальным дизайном стандартных номеров, делюксов и люксов .
			</p>
		</div>
	</div>
</div>