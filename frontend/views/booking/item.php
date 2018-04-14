<?php
use frontend\assets\BootstrapAsset;
use frontend\widgets\buttons\DetailButton;
use frontend\models\Page;
use frontend\models\pages\SliderTabsSectionParams;

BootstrapAsset::register($this);
/**
 * @var $item  frontend\models\data\Room
 * @var $rooms frontend\models\data\Room[]
 */
?>
<section class="booking">
	<header>
		<div class="content-wrapper">
			<div class="row">
				<div class="container container-90">
					<div class="col-lg-4 center hidden-xs hidden-sm hidden-md">
						<img src="/img/big-logo.png">
						<h1>
							<span class="name">BEZHITSA</span><br>
							<span class="type"><?= Yii::t('app/labels', 'гранд отель'); ?></span>
						</h1>
					</div>
					<div class="col-lg-8">
						<div class="contacts">
							<dl class="contacts-element inline">
								<dt title="Адрес">
									<i class="address"></i>
								</dt>
								<dd>
                                    <?= Yii::t('app/address', 'Клинцовская, 41,'); ?><br>
                                    <?= Yii::t('app/labels', 'Брянск'); ?><br>
                                    <?= Yii::t('app/labels', 'Российская Федерация'); ?><br>
								</dd>
								<dt title="Телефон">
									<i class="phone"></i>
								</dt>
								<dd>
									8(4832)40-00-01
								</dd>
							</dl>
						</div>
						<div class="row">
							<div class="reservation-form-element nobg large">
								<div id="tl-search-form"><noindex><a href="http://www.travelline.ru/products/tl-hotel/" rel="nofollow">система онлайн-бронирования</a></noindex></div>
								<script type="text/javascript">
									(function(w){
										var q=[
											['setContext', 'TL-INT-bezhitsa.new', '<?= \frontend\components\LanguageHelper::getCurrentLanguageCode(); ?>'],
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
		<header class="content room-list">
			<div class="container container-90">
                <?php

                $slides = $item->getSlides();
                ?>
				<div class="row">
					<div class="col-lg-12">
						<div ng-controller="SliderController as slider" ng-init="slider.slides = <?= htmlspecialchars(json_encode($slides))?>">
							<div class="hidden-sm hidden-xs">
								<div class="row slider-group row-flex-desktop">
									<div class="col-lg-8 col-md-8 col-sm-12" ng-swipe-left="slider.swipe(true)" ng-swipe-right="slider.swipe(false)">
										<div class="slider slider-element sticky-container">
											<ul class="slides sticky-content">
												<li ng-repeat="slide in slider.slides" ng-cloak ng-class="{active:slider.currentSlide == $index,previous:slider.previousSlide == $index}">
													<div class="wrapper">
														<img src="{{ slide.image }}">
													</div>
												</li>
											</ul>
											<div class="caption sticky-footer small-height">
												<div ng-repeat="slide in slider.slides" ng-show="slider.currentSlide == $index">
													<h3 class="title">{{slide.description }}</h3>
													<div class="swipe-buttons">
														<button ng-click="slider.swipe(true);"><?= Yii::t('app/labels', 'назад'); ?></button>
														<button ng-click="slider.swipe(false);"><?= Yii::t('app/labels', 'вперед'); ?></button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-4  col-md-4 col-sm-12">
										<div class="room-select-wrapper-element">
											<div class="card-element room-select-element">
												<header class="white no-padding">
                                                    <div class="custom-dropdown">
                                                        <p>
															<?= $item->title ?>
															<img src="/img/controls/select-small.png">
														</p>
														<ul class="room-class dropdown-list">
															<li class="triangle-container"></li>
															<?php foreach ($rooms as $room) { ?>
																<li <?= $item->id == $room->id ? 'class="active"' : '' ?>>
																	<a href="<?= $room->getUrl();?>">
																		<?= $room->title ?>
																	</a>
																</li>
															<?php } ?>
														</ul>
													</div>
												</header>
											</div>
											<div class="card-element room-item">
												<section class="content">
                                                    <?= $item->text ?>
												</section>
												<footer>
                                                    <?= DetailButton::widget([
                                                        'hasDetailButton'  => true,
                                                        'detailButtonText' => Yii::t('app/labels', 'Забронировать от ') .
															'<span class="price">' . $item->price_from . '</span>',
                                                        'detailButtonLink' => '/' . Page::id(30)->getUrl() . '/?room-type=' . $item['tl_room_type'],
                                                        'isColored'        => false,
                                                        'bgColor'          => null,
                                                        'blackText'        => true,
                                                    ]); ?>
													<?= $item->title ?>
												</footer>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="hidden-md hidden-lg hidden-xl full-width">
								<div class="row">
									<div class="col-lg-12">
										<div class="custom-dropdown">
											<p>
                                                <?= $item->title ?>
												<img src="/img/controls/select-small.png">
											</p>
											<ul class="room-class dropdown-list">
												<li class="triangle-container"></li>
                                                <?php foreach ($rooms as $room) { ?>
													<li <?= $item->id == $room->id ? 'class="active"' : '' ?>>
														<a href="<?= $room->getUrl();?>">
                                                            <?= $room->title ?>
														</a>
													</li>
                                                <?php } ?>
											</ul>
										</div>
									</div>
								</div>
								<slick infininte slides-to-show="1" slides-to-scroll="1" center-padding="10%" center-mode="true" arrows="false">
									<div ng-repeat="slide in slider.slides">
										<div class="wrapper">
											<img src="{{ slide.image }}">
										</div>
									</div>
								</slick>
								<div class="row">
									<div class="col-lg-12" style="margin-bottom: 15px;">
										<div class="card-element">
											<header class="pale"><?= $room->title ?></header>
											<section class="content"><?= $item->text ?></section>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-lg-12">
                                        <?= DetailButton::widget([
                                            'hasDetailButton'  => true,
                                            'detailButtonText' => Yii::t('app/labels', 'Забронировать от ') .
                                                '<span class="price">' . $item->price_from . '</span>',
                                            'detailButtonLink' => '/' . Page::id(30)->getUrl() . '/?room-type=' . $item['tl_room_type'],
                                            'isColored'        => false,
                                            'bgColor'          => null,
                                            'blackText'        => true,
                                        ]); ?>
									</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row more-row">
					<div class="col-lg-12 center">

					</div>
				</div>
			</div>
		</section>
	</div>
</section>
