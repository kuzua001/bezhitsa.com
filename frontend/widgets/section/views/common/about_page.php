<?php
use frontend\models\Page;
use frontend\widgets\buttons\DetailButton;

/** @var $page \frontend\models\pages\LandingPage */
$page = Page::id(23);
/* @var $sectionParams SliderTabsSectionParams */
$sectionParams = $page->pageParams->sectionsParams[1];
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
						<h3 class="title"><!--{{slide.tabTitle}}-->Отель "Бежица"</h3>
						<div class="swipe-buttons">
							<button ng-click="slider.swipe(false);">вперед</button>
							<button ng-click="slider.swipe(true);">назад</button>
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
					<h4>Обслуживание гостей</h4>
					<p>
						Услуги для гостей отеля «Бежица», включают удобства парковки и транспортировки из отеля в аэропорт на люкс автомобиле. Гость может воспользываться подключением беспроводного интернета, а также услугами круглосуточного обслуживания в номерах, услугами няни, и сервисом по аренде автомобилей и лимузинов. 
					</p>
					<h4>Обслуживание гостей</h4>
					<p>
						Услуги для гостей отеля «Бежица», включают удобства парковки и транспортировки из отеля в аэропорт на люкс автомобиле. Гость может воспользываться подключением беспроводного интернета, а также услугами круглосуточного обслуживания в номерах, услугами няни, и сервисом по аренде автомобилей и лимузинов. 
					</p>
				</div>
				<div class="col-lg-6">
					<div class="card-element">
						<header>
							Почему стоит бронировать у нас?
						</header>
						<section class="content">
							<p>
								Услуги для гостей отеля «Бежица», включают удобства парковки и транспортировки из отеля в аэропорт на люкс автомобиле.
								Гость может воспользываться подключением беспроводного интернета, а также услугами <!--круглосуточного обслуживания в номерах,
					услугами няни, и&nbsp;сервисом по аренде автомобилей и лимузинов.-->
							</p>
							<ul class="item-list three-col">
								<li class="item">
									<i class="item-icon" style="background-image: url('/img/icons/emblem.png');"></i>
									<p>
										Гарантия<br>
										лучших тарифов
									</p>
								</li>
								<li class="item">
									<i class="item-icon" style="background-image: url('/img/icons/service.png');"></i>
									<p>
										Круглосуточное<br>
										обслуживание в номерах
									</p>
								</li>
								<li class="item">
									<i class="item-icon" style="background-image: url('/img/icons/fitnes.png');"></i>
									<p>
										Оздоровительный<br>
										финес центр
									</p>
								</li>
							</ul>
							<p>
								Роскошный дизайн интерьеров, высокая кухня ресторана, светские и деловые события.
							</p>
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