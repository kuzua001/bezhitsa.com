<?php
use frontend\assets\BootstrapAsset;
use frontend\widgets\buttons\DetailButton;
use frontend\models\Page;
use frontend\models\pages\SliderTabsSectionParams;
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
					<div class="room-card-element col-lg-4 col-md-6">
						<header>
							<img src="/img/room1.png" />
						</header>
						<section class="content">
							<div class="room-type">
								<h4 class="name">Люкс</h4>
								<span class="square">20-24 кв.м</span>
							</div>
							<div class="price-item">
								от <span class="price">7 600</span> руб
							</div>
						</section>
						<footer>
							<div class="property-item-element">
								<i class="property-icon one-bed"></i>
								<span class="property-description">1 двуспальная кровать</span>
							</div>
							<div class="property-item-element">
								<i class="property-icon two-people"></i>
								<span class="property-description">2 гостя</span>
							</div>
						</footer>
					</div>
					<div class="room-card-element col-lg-4 col-md-6">
						<header>
							<img src="/img/room1.png" />
						</header>
						<section class="content">
							<div class="room-type">
								<h4 class="name">Люкс</h4>
								<span class="square">20-24 кв.м</span>
							</div>
							<div class="price-item">
								от <span class="price">7 600</span> руб
							</div>
						</section>
						<footer>
							<div class="property-item-element">
								<i class="property-icon one-bed"></i>
								<span class="property-description">1 двуспальная кровать</span>
							</div>
							<div class="property-item-element">
								<i class="property-icon two-people"></i>
								<span class="property-description">2 гостя</span>
							</div>
						</footer>
					</div>
					<div class="room-card-element col-lg-4 col-md-6">
						<header>
							<img src="/img/room1.png" />
						</header>
						<section class="content">
							<div class="room-type">
								<h4 class="name">Люкс</h4>
								<span class="square">20-24 кв.м</span>
							</div>
							<div class="price-item">
								от <span class="price">7 600</span> руб
							</div>
						</section>
						<footer>
							<div class="property-item-element">
								<i class="property-icon one-bed"></i>
								<span class="property-description">1 двуспальная кровать</span>
							</div>
							<div class="property-item-element">
								<i class="property-icon two-people"></i>
								<span class="property-description">2 гостя</span>
							</div>
						</footer>
					</div>
					<div class="room-card-element col-lg-4 col-md-6">
						<header>
							<img src="/img/room1.png" />
						</header>
						<section class="content">
							<div class="room-type">
								<h4 class="name">Люкс</h4>
								<span class="square">20-24 кв.м</span>
							</div>
							<div class="price-item">
								от <span class="price">7 600</span> руб
							</div>
						</section>
						<footer>
							<div class="property-item-element">
								<i class="property-icon one-bed"></i>
								<span class="property-description">1 двуспальная кровать</span>
							</div>
							<div class="property-item-element">
								<i class="property-icon two-people"></i>
								<span class="property-description">2 гостя</span>
							</div>
						</footer>
					</div>
					<div class="room-card-element col-lg-4 col-md-6">
						<header>
							<img src="/img/room1.png" />
						</header>
						<section class="content">
							<div class="room-type">
								<h4 class="name">Люкс</h4>
								<span class="square">20-24 кв.м</span>
							</div>
							<div class="price-item">
								от <span class="price">7 600</span> руб
							</div>
						</section>
						<footer>
							<div class="property-item-element">
								<i class="property-icon one-bed"></i>
								<span class="property-description">1 двуспальная кровать</span>
							</div>
							<div class="property-item-element">
								<i class="property-icon two-people"></i>
								<span class="property-description">2 гостя</span>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>