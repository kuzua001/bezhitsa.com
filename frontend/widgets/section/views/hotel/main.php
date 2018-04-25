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
	<div class="col-lg-4 col-md-6 center desktop-only logo-col">
		<img class="logo" src="/img/big-logo-black.png">
		<h1 class="bezhitsa-title-element">
			<span class="name">Bezhitsa</span><br>
			<span class="type"><?= Html::encode($sectionParams->mainHeaderTypePart) ?></span>
		</h1>
	</div>
	<div class="col-lg-5 col-sm-6 col-xs2-6 greeting">
		<p class="header">
			<b><?= Html::encode($sectionParams->greetingHeader) ?></b>
		</p>
		<p class="content">
			<?= Html::encode($sectionParams->greetingContent) ?>
		</p>
	</div>
	<div class="col-lg-3 col-md-6 col-sm-6 col-xs2-6">
		<dl class="contacts-element">
			<dt title="Адрес">
				<i class="address"></i>
			</dt>
			<dd>
				<?= $sectionParams->address ?>
			</dd>
			<dt title="Телефон">
				<i class="phone"></i>
			</dt>
			<dd>
				<?= $sectionParams->phone ?>
			</dd>
		</dl>
	</div>
	<div class="clearfix hidden-md"></div>
	<div class="col-lg-4 col-md-6 col-sm-6 col-xs2-6 center indent">
		<section class="reservation-form-element" ng-controller="ReservationController as reservation">
			<header>
				Забронировать <span class="hidden-md hidden-sm hidden-xs">проживание</span>
			</header>
			<section class="content">
				<div class="dates">
					<datepicker datepicker-mobile="false" date-max-limit="{{reservation.convertDate(to, -1)}}" date-format="dd.MM.yyyy" ng-class="{'error' : from == ''}">
						<input type="text" class="from" placeholder="заезд" ng-model="from" required>
					</datepicker>
					<datepicker datepicker-mobile="false" date-min-limit="{{reservation.convertDate(from, 1)}}" date-format="dd.MM.yyyy" ng-class="{'error' : to == ''}">
						<input type="text" class="to" placeholder="выезд" ng-model="to" required>
					</datepicker>
				</div>
			</section>
			<footer>
				<div class="apply" ng-click="apply()">Бронировать</div>
			</footer>
		</section>
	</div>
	<div class="col-lg-8 col-md-6 col-sm-6 col-xs2-6 center indent">
		<h2 class="main-slogan elegant-title-element">
			<span class="first"><?= Html::encode($sectionParams->sloganFirst) ?></span>
			<span class="second"><?= Html::encode($sectionParams->sloganSecond) ?></span>
			<span class="third"><?= Html::encode($sectionParams->sloganThird) ?></span>
		</h2>
	</div>
</div>
<div class="row clear slick-wrapper">
	<slick class="content-slider-element" infininte="true" slides-to-show="3" slides-to-scroll="1" center-padding="0" center-mode="true"
		   responsive="[
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        adaptiveHeight: true
                    }
                }
            ]">
		<div>
			<div class="slide-wrapper">
				<h3><?= Html::encode($sectionParams->title1) ?></h3>
                <?= $sectionParams->text1 ?>
			</div>
		</div>
		<div>
			<div class="slide-wrapper">
				<h3><?= Html::encode($sectionParams->title2) ?></h3>
                <?= $sectionParams->text2 ?>
			</div>
		</div>
		<div>
			<div class="slide-wrapper">
				<h3><?= Html::encode($sectionParams->title3) ?></h3>
                <?= $sectionParams->text3 ?>
			</div>
		</div>
        <div>
            <div class="slide-wrapper">
                <h3><?= Html::encode($sectionParams->title4) ?></h3>
                <?= $sectionParams->text4 ?>
            </div>
        </div>
        <div>
            <div class="slide-wrapper">
                <h3><?= Html::encode($sectionParams->title5) ?></h3>
                <?= $sectionParams->text5 ?>
            </div>
        </div>
	</slick>
</div>
