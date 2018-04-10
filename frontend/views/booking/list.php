<?php
use frontend\assets\BootstrapAsset;
use frontend\widgets\buttons\DetailButton;
use frontend\models\Page;
use frontend\models\pages\SliderTabsSectionParams;

/**
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
		<section class="content">
			<div class="container container-90">
				<div class="row">
					<div class="col-lg-12">
						<div class="characteristics">
							<div class="row">
								<div class="col-lg-12">
									<div class="custom-select-control large">
										<label for="select-room-class" class="dropdown"></label>
										<select name="room-class" id="select-room-class">
											<?php foreach ($rooms as $item) { ?>
												<option data-href="<?= $item->getUrl();?>" value="<?= $item->id?>"><?= $item->title ?></option>
											<?php } ?>
										</select>
									</div>
									<?php
									$first = $rooms[0];
									?>
									<div class="price-from">
                                        <?= Yii::t('app/labels', 'от'); ?> <span class="price"><?= $first->price_from ?></span> <?= Yii::t('app/units', 'руб'); ?>.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container container-90">
				<div class="clearfix"></div>
				<div class="row">
					<?php foreach ($rooms as $item) { ?>
						<div class="col-lg-4 col-md-6">
							<a href="<?= $item->getUrl() ?>">
								<div class="room-card-element">
									<header>
										<img src="<?= $item->getMainImage()->getSrc(); ?>">
									</header>
									<section class="content">
										<div class="room-type">
											<h4 class="name"><?= $item->title ?></h4>
											<span class="square"><?= $item->square?> <?= Yii::t('app/units', 'кв.м'); ?></span>
										</div>
										<div class="price-item">
                                            <?= Yii::t('app/labels', 'от'); ?> <span class="price"><?= $item->price_from ?></span> <?= Yii::t('app/units', 'руб'); ?>
										</div>
									</section>
									<!--<footer>
										<div class="property-item-element">
											<i class="property-icon <?= $item->getBedIconClass() ?>"></i>
											<span class="property-description"><?= $item->getBedTitle() ?></span>
										</div>
										<div class="property-item-element">
											<i class="property-icon <?= $item->getPersonIconClass() ?>"></i>
											<span class="property-description"><?= $item->getPersonTitle() ?></span>
										</div>
									</footer>-->
								</div>
							</a>
						</div>
					<?php } ?>
                    <?php if ($page->pageParams->showBookingRules) { ?>
						<div class="col-lg-12">
							<?= $page->pageParams->bookingRulesText ?>
						</div>
                    <?php } ?>
				</div>
			</div>
		</section>
	</div>
</section>
