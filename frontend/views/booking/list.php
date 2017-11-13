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
				<div class="row">
					<?php foreach ($rooms as $item) { ?>
						<div class="col-lg-4 col-md-6">
							<div class="room-card-element">
								<header>
									<img src="/img/room1.png" />
								</header>
								<section class="content">
									<div class="room-type">
										<h4 class="name"><?= $item->title ?></h4>
										<span class="square">20-24 кв.м</span>
									</div>
									<div class="price-item">
										от <span class="price"><?= $item->price_from ?></span> руб
									</div>
								</section>
								<footer>
									<div class="property-item-element">
										<i class="property-icon one-bed"></i>
										<span class="property-description"><?= $item->getBedTitle() ?></span>
									</div>
									<div class="property-item-element">
										<i class="property-icon two-people"></i>
										<span class="property-description"><?= $item->getPersonTitle() ?></span>
									</div>
								</footer>
							</div>
						</div>
					<?php } ?>
				</div>
			</div>
		</section>
	</div>
</section>