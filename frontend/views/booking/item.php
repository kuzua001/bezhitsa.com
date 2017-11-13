<?php
use frontend\assets\BootstrapAsset;
use frontend\widgets\buttons\DetailButton;
use frontend\models\Page;
use frontend\models\pages\SliderTabsSectionParams;

BootstrapAsset::register($this);
/**
 * @var $item frontend\models\data\Room
 */
?>
<section class="booking">
	<header>
		<div class="content-wrapper">
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
								<div id="tl-search-form"><noindex><a href="http://www.travelline.ru/products/tl-hotel/" rel="nofollow">система онлайн-бронирования</a></noindex></div>
								<script type="text/javascript">
									(function(w){
										var q=[
											['setContext', 'TL-INT-bezhitsa', 'ru'],
											['embed', 'search-form', {container: 'tl-search-form'}]
										];
										var t=w.travelline=(w.travelline||{}),ti=t.integration=(t.integration||{});ti.__cq=ti.__cq?ti.__cq.concat(q):q;
										if (!ti.__loader){ti.__loader=true;var d=w.document,p=d.location.protocol,s=d.createElement('script');s.type='text/javascript';s.async=true;s.src=(p=='https:'?p:'http:')+'//ibe.tlintegration.com/integration/loader.js';(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(s);}
									})(window);
								</script>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<div class="content-wrapper">
		<section class="content">
			<div class="container container-90">
				<div class="row">
					<div class="col-lg-12">
						<div class="characteristics">
							<div class="row">
								<div class="col-sm-6 col-md-4">
									<div class="custom-select-control large">
										<label for="select-room-class" class="dropdown"></label>
										<select name="room-class" id="select-room-class">
											<option value="1">Стандарт</option>
											<option value="2">Комфорт</option>
											<option value="3">Люкс</option>
										</select>
									</div>
									<div class="price-from">
										от <span class="price">5000</span> руб.
									</div>
								</div>
								<div class="col-sm-6 col-md-8 inline-contents text-right">
									<div class="property-item-element">
										<i class="property-icon one-bed"></i>
										<span class="property-description">1 двуспальная кровать</span>
									</div>
									<div class="property-item-element">
										<i class="property-icon two-people"></i>
										<span class="property-description">2 гостя</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container container-90">
                <?php

                /** @var $page \frontend\models\pages\LandingPage */
                $page = Page::id(12);
                /* @var $sectionParams SliderTabsSectionParams */
                $sectionParams = $page->pageParams->sectionsParams[1];
                ?>
				<div class="row">
					<div class="col-lg-12">
						<div ng-controller="SliderController as slider" ng-init="slider.slides = <?= htmlspecialchars(json_encode($sectionParams->slides))?>">
							<div class="desktop-only">
								<div class="row slider-group row-flex-desktop<?= $sectionParams->isRight ? ' reverse-order' : ''?>">
									<div class="col-lg-8 col-md-8 col-sm-12" ng-swipe-left="slider.swipe(true)" ng-swipe-right="slider.swipe(false)">
										<div class="slider slider-element sticky-container">
											<ul class="slides sticky-content">
												<li ng-repeat="slide in slider.slides" ng-cloak ng-class="{active:slider.currentSlide == $index,previous:slider.previousSlide == $index}">
													<div class="wrapper">
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
													</div>
												</li>
											</ul>
											<div class="caption sticky-footer">
												<div ng-repeat="slide in slider.slides" ng-show="slider.currentSlide == $index">
													<h3 class="title">{{slide.tabTitle }}</h3>
													<div class="swipe-buttons">
														<button ng-click="slider.swipe(false);">вперед</button>
														<button ng-click="slider.swipe(true);">назад</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-4  col-md-4 col-sm-12">
										<div class="card-element">
											<header class="pale">
												Фитнес центр
											</header>
											<section class="content">
												<p>
													Современный фитнес-клуб в центре города, ориентированный на тех, кому дорого и здоровье и время.
													Мы предлагаем стратегический подход к спорту: каждый наш специалист сделает все, чтобы вы достигли не просто кратковременных результатов, а улучшили образ жизни в целом.
												</p>
												<p>
													<em>
														Это стиль жизни, стремление быть лучше.
													</em>
												</p>
												<p class="increased-margin">
													Новые фитнес-технологии позволяют по-новому взглянуть на достижение целей, а инфраструктура спортклуба — полезно организовать время.
												</p>
											</section>
										</div>
									</div>
								</div>
							</div>
							<div class="mobile-only slider-element">
								<ul class="slides">
									<li ng-repeat="slide in slider.slides">
										<div class="wrapper">
											<img src="{{ slide.image }}">
										</div>
										<div class="elegant-card-element">
											<div class="tab-list-element">
												<div>
													<span class="link" ng-cloak>{{ slide.tabTitle }}</span>
													<section class="content" ng-bind-html="slide.tabContent | html">{{slide.tabContent}}</section>
												</div>
											</div>
										</div>
									</li>
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
			</div>
		</section>
	</div>
</section>