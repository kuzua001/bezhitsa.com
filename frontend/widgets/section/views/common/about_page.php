<?php
use frontend\models\Page;
use frontend\widgets\buttons\DetailButton;

/** @var $page \frontend\models\pages\LandingPage */
$page = Page::id(26);
/* @var $sectionParams SliderTabsSectionParams */
$sectionParams = $page->pageParams->sectionsParams[1];
?>
<header>
	<div class="row">
		<div class="container container-90">
			<div class="col-lg-4 center desktop-only">
				<img src="/img/big-logo.png">
				<h1>
					<span class="name">Bezhitsa</span><br>
					<span class="type">гранд отель</span>
				</h1>
			</div>
			<div class="col-lg-8">
				<div class="contacts">
					<dl class="contacts-element inline">
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
							8(4832)40-00-00
						</dd>
					</dl>
				</div>
				<div class="row">
					<div class="reservation-form-element nobg">
						<section class="content row col-lg-8">
							<div class="dates col-xs-6">
								<input type="text" class="from" placeholder="заезд">
								<input type="text" class="to" placeholder="выезд">
							</div>
							<div class="people col-xs-6">
								<input type="text" class="select" placeholder="1 Номер, 1 Взрослый, 0 Детей">
							</div>
						</section>
						<footer class="col-lg-4">
							<div class="apply">Бронировать</div>
						</footer>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
<section class="content">
	<div class="container container-90">
		<div ng-controller="SliderController as slider" ng-init="slider.slides = <?= htmlspecialchars(json_encode($sectionParams->slides))?>">
			<div class="row slider-group row-flex row-flex-desktop<?= $sectionParams->isRight ? ' reverse-order' : ''?>">
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
								<button ng-click="slider.swipe(false);">вперед</button>
								<button ng-click="slider.swipe(true);">назад</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card-element">
			<section class="content">
				<div class="row">
					<div class="col-lg-6">

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
			</section>
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

	</div>
</section>