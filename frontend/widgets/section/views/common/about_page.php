<?php
use frontend\models\Page;
use frontend\widgets\buttons\DetailButton;
use frontend\models\pages\AboutSectionParams;
use frontend\widgets\section\Section;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var AboutSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
?>
<div class="row slider-group">
	<div class="col-lg-12">
		<div ng-controller="SliderController as slider" ng-init="slider.slides = <?= htmlspecialchars(json_encode($sectionParams->slides))?>">
			<div class="slider slider-element sticky-container">
				<ul class="slides sticky-content">
					<li ng-repeat="slide in slider.slides" ng-cloak ng-class="{active:slider.currentSlide == $index,previous:slider.previousSlide == $index}">
						<div class="wrapper">
							<img src="{{slide.image}}">
							<div ng-if="slide.hasCard" class="caption left-align">
								<h3 class="elegant-title-element small black-text">
									<span class="first">{{slide.cardTitleFirst}}</span>
									<span class="second">{{slide.cardTitleSecond}}</span>
									<span class="third">{{slide.cardTitleThird}}</span>
								</h3>
								<div class="property-item-element">
									<i class="property-icon" style="background-image: url('/img/icons/clock.png'); width: 22px; height: 27px;"></i>
									<span class="property-description">Круглосуточно</span>
								</div>
								<div class="property-item-element">
									<i class="property-icon" style="background-image: url('/img/icons/phone.png'); width: 22px; height: 27px;"></i>
									<span class="property-description">8(4832)40-00-00</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div class="caption sticky-footer">
					<div ng-repeat="slide in slider.slides" ng-show="slider.currentSlide == $index">
						<h3 class="title">{{slide.tabTitle}}</h3>
						<div class="swipe-buttons">
							<button ng-click="slider.swipe(true);">назад</button>
							<button ng-click="slider.swipe(false);">вперед</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="row">
	<div class="col-lg-12">
		<div class="card-wrapper">
			<div class="row">
				<div class="col-lg-6 card-wrapper-content">
					<?= $sectionParams->leftHTML ?>
				</div>
				<div class="col-lg-6">
					<div class="card-element">
						<header>
							<?= $sectionParams->title ?>
						</header>
						<section class="content">
                            <?= $sectionParams->cardHTML ?>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="row more-row">
	<div class="col-lg-12 center">
		<?= DetailButton::widget([
			'hasDetailButton'  => $sectionParams->hasDetailButton,
			'detailButtonText' => $sectionParams->detailButtonText,
			'detailButtonLink' => $sectionParams->detailButtonLink,
			'isColored'        => $sectionParams->detailButtonIsColored,
			'bgColor'          => $sectionParams->detailButtonBgColor,
			'blackText'        => true,
		]); ?>
	</div>
</div>