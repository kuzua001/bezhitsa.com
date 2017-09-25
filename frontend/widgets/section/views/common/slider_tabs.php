<?php
use frontend\widgets\section\Section;
use frontend\models\pages\SliderTabsSectionParams;
use yii\helpers\Html;
use frontend\widgets\buttons\DetailButton;
use \frontend\models\pages\SliderItemParams;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var SliderTabsSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
?>
<section class="events"  id="section3">
    <div class="content-wrapper">
        <div class="container container-90">
            <div class="row">
                <div class="col l12 m12 s12">
                    <h2 class="centered-title-element black-text">
                        <?= $sectionParams->title ?>
                    </h2>
                </div>
            </div>
            <div class="row slider-group row-flex row-flex-desktop<?= $sectionParams->isRight ? ' reverse-order' : ''?>"
				 ng-controller="SliderController as slider" ng-init="slider.slides = <?= htmlspecialchars(json_encode($sectionParams->slides))?>">
                <div class="col l8 m12 s12" ng-swipe-left="slider.swipe(true)" ng-swipe-right="slider.swipe(false)">
                    <div class="slider slider-element">
                        <ul class="slides">
							<li ng-repeat="slide in slider.slides" ng-cloak ng-class="{active:slider.currentSlide == $index,previous:slider.previousSlide == $index}">
								<img src="{{ slide.image }}">
								<div ng-if="slide.hasCard" class="caption left-align">
									<h3 class="elegant-title-element small black-text">
										<span class="first">{{ slide.cardTitleFirst }}</span>
										<span class="second">{{ slide.cardTitleSecond }}</span>
										<span class="third">{{ slide.cardTitleThird }}</span>
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
							</li>
                        </ul>
                    </div>
                </div>
                <div class="col l4  m12 s12">
                    <div class="elegant-card-element">
                        <ul class="tab-list-element">
							<li ng-click="slider.changeSlide($index)" ng-repeat="slide in slider.slides" ng-class="{active:slider.currentSlide == $index,previous:slider.previousSlide == $index}">
								<span class="link" ng-cloak>{{ slide.tabTitle }}</span>
								<section class="content" ng-bind-html="slide.tabContent | html">{{slide.tabContent}}</section>
							</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row more-row">
                <div class="col l12 center">
                    <?= DetailButton::widget([
                        'hasDetailButton'  => $sectionParams->hasDetailButton,
                        'detailButtonText' => $sectionParams->detailButtonText,
                        'detailButtonLink' => $sectionParams->detailButtonLink,
                        'blackText'        => true,
                    ]); ?>
                </div>
            </div>
        </div>
    </div>
</section>
