<?php
use frontend\widgets\common\MainSection;
use yii\helpers\Html;

/** @var MainSection $widget */

$widget = $this->context;
?>
<section class="service">
	<div class="content-wrapper">
		<img class="bg" src="/img/section2-bg.jpg">
		<div class="container container-90">
			<div class="row indent">
				<div class="col-lg-6 col-md-6 col-sm-12">
					<h2 class="elegant-title-element">
						<span class="first">Роскошный</span>
						<span class="second">сервис для</span>
						<span class="third tight">требовательных гостей</span>
					</h2>
					<button class="detail-button-element">
						подробнее про отель
					</button>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12">
					<?= $widget->content ?>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12">
					<h3 class="centered-title-element rooms">
						<?= $widget->title() ?>
					</h3>
				</div>
			</div>
			<div class="row rooms-row">
				<div class="col-lg-4 col-md-12 col-sm-12 rooms-first-col">
					<?= $widget->roomsDescription ?>
				</div>
				<div class="col-lg-8 col-md-12 col-sm-12 rooms-list-element">
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-12">
							<div class="room-card-element">
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
										<img class="property-icon" src="/img/icons/one-bed.png">
										<span class="property-description">1 двуспальная кровать</span>
									</div>
									<div class="property-item-element">
										<img class="property-icon" src="/img/icons/2people.png">
										<span class="property-description">2 гостя</span>
									</div>
								</footer>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-12">
							<div class="room-card-element">
								<header>
									<img src="/img/room2.png" />
								</header>
								<section class="content">
									<div class="room-type">
										<h4 class="name">Стандарт</h4>
										<span class="square">30-36 кв.м</span>
									</div>
									<div class="price-item">
										от <span class="price">5 000</span> руб
									</div>
								</section>
								<footer>
									<div class="property-item-element">
										<img class="property-icon" src="/img/icons/one-bed.png">
										<span class="property-description">1 двуспальная кровать</span>
									</div>
									<div class="property-item-element">
										<img class="property-icon" src="/img/icons/2people.png">
										<span class="property-description">2 гостя</span>
									</div>
								</footer>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-12">
							<div class="room-card-element">
								<header>
									<img src="/img/room1.png" />
								</header>
								<section class="content">
									<div class="room-type">
										<h4 class="name">Стандарт</h4>
										<span class="square">20-24 кв.м</span>
									</div>
									<div class="price-item">
										от <span class="price">6 800</span> руб
									</div>
								</section>
								<footer>
									<div class="property-item-element large-icon">
										<img class="property-icon" src="/img/icons/two-bed.png">
										<span class="property-description">2 односпальных кровати</span>
									</div>
									<div class="property-item-element">
										<img class="property-icon" src="/img/icons/2people.png">
										<span class="property-description">2 гостя</span>
									</div>
								</footer>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-12">
							<div class="room-card-element">
								<header>
									<img src="/img/room1.png" />
								</header>
								<section class="content">
									<div class="room-type">
										<h4 class="name">Стандарт</h4>
										<span class="square">20-24 кв.м</span>
									</div>
									<div class="price-item">
										от <span class="price">7 600</span> руб
									</div>
								</section>
								<footer>
									<div class="property-item-element">
										<img class="property-icon" src="/img/icons/one-bed.png">
										<span class="property-description">1 двуспальная кровать</span>
									</div>
									<div class="property-item-element">
										<img class="property-icon" src="/img/icons/2people.png">
										<span class="property-description">2 гостя</span>
									</div>
								</footer>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row more-row">
				<div class="col-lg-12 col-md-12 col-sm-12 center">
					<button class="detail-button-element">все номера номера</button>
				</div>
			</div>
		</div>
	</div>
</section>
