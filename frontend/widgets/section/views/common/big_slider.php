<?php
use frontend\models\Page;
use frontend\widgets\buttons\DetailButton;
use frontend\models\pages\AboutSectionParams;
use frontend\widgets\section\Section;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var \frontend\models\pages\BigSliderSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
?>
<?php if (!empty($sectionParams->title)) { ?>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <h2 class="centered-title-element black-text">
                <?= $sectionParams->title ?>
            </h2>
        </div>
    </div>
<?php } ?>
<div class="row slider-group">
	<div class="col-lg-12">
		<div ng-controller="SliderController as slider" ng-init="slider.slides = <?= htmlspecialchars(json_encode($sectionParams->slides))?>">
			<div class="slider slider-element sticky-container desktop-only big-slider">
				<div class="arrow prev" ng-click="slider.swipe(true);"></div>
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
                <div class="arrow next" ng-click="slider.swipe(false);"></div>
				<div class="caption sticky-footer">
					<div ng-repeat="slide in slider.slides" ng-show="slider.currentSlide == $index">
						<h3 class="title">{{slide.tabTitle}}</h3>
						<div class="swipe-buttons">
							<button ng-click="slider.swipe(true);"><?= Yii::t('app/labels', 'назад');?></button>
							<button ng-click="slider.swipe(false);"><?= Yii::t('app/labels', 'вперед');?></button>
						</div>
					</div>
				</div>
			</div>
			<slick class="mobile-only" infininte slides-to-show="1" slides-to-scroll="1" center-padding="10%" center-mode="true" arrows="false">
				<div ng-repeat="slide in slider.slides" ng-cloak ng-class="{active:slider.currentSlide == $index,previous:slider.previousSlide == $index}">
					<img src="{{slide.image}}">
				</div>
			</slick>
		</div>
	</div>
</div>