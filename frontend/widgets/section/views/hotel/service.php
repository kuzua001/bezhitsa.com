<?php
use frontend\widgets\section\Section;
use frontend\models\pages\HotelMainSectionParams;
use yii\helpers\Html;
use \frontend\models\data\Room;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var HotelMainSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
$rooms = Room::find()->limit(4)->all();
?>
<div class="row indent indent-large">
	<div class="col-md-6">
		<h2 class="elegant-title-element">
			<span class="first">Роскошный</span>
			<span class="second">сервис для</span>
			<span class="third tight">требовательных гостей</span>
		</h2>
		<div class="clearfix"></div>
		<button class="detail-button-element">
			подробнее про отель
		</button>
		<div class="clearfix"></div>
	</div>
	<div class="col-md-6">
		<div class="right-content-block-element">
			<h3>Обслуживание гостей</h3>
			<p>
				Услуги для гостей отеля «Бежица», включают удобства парковки и транспортировки из отеля в аэропорт на люкс автомобиле.
				Гость может воспользываться подключением беспроводного интернета, а также услугами круглосуточного обслуживания в номерах,
				услугами няни, и&nbsp;сервисом по аренде автомобилей и лимузинов.&nbsp;
			</p>
		</div>
		<div class="right-content-block-element">
			<h3>Привелегии для гостей</h3>
			<p>
				После прекрасного ночного отдыха в роскошных интерьерах, встречайте утро свежим завтраком и никуда не спешите,
				ведь у вас есть возможность выехать из отеля позже.
			</p>
		</div>
	</div>
	<div class="clearfix"></div>
	<div class="col-lg-6 col-lg-push-6">
		<div class="card-element indent-desktop">
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
							обслуживание <span class="desktop-only">в номерах</span>
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
<div class="row">
	<div class="col-lg-12 col-md-12 col-sm-12">
		<h3 class="centered-title-element rooms">
			Номера
		</h3>
	</div>
</div>
<div class="row rooms-row">
	<div class="col-lg-4 col-md-12 col-sm-12 rooms-first-col">
		<div>
			<div class="row">
				<div class="col-lg-12 col-md-6">
					<div class="card-element">
						<header class="pale">
							Сведения об отеле
						</header>
						<section class="content">
							<ul>
								<li><span>Время заезда: 14:00. Время выезда: 12:00</span></li>
								<li><span>214 номеров и люксов</span></li>
								<li><span>Сейф в каждом номере</span></li>
								<li><span>Эксклюзивный клубный лаунж Bezhitsa lobby</span></li>
								<li><span>Бесплатный беспроводной Интернет в зонах общего пользования и номерах</span></li>
								<li><span>Круглосуточное обслуживание в номерах</span></li>
								<li><span>Категория SPG 4</span></li>
							</ul>
						</section>
					</div>
				</div>
				<div class="col-lg-12 col-md-6">
					<div class="card-element">
						<header class="pale">
							Описание отеля
						</header>
						<section class="content">
							<ul>
								<li><span>Круглосуточный фитнес</span></li>
								<li><span>Все фитнес-занятия проходят под наблюдением профессиональных инструкторов</span></li>
								<li><span>Владеющий иностранными языками персонал</span></li>
								<li><span>Услуги няни по предварительной договоренности</span></li>
								<li><span>Прачечная и химчистка в тот же день</span></li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-lg-8 col-md-12 col-sm-12 rooms-list-element hidden-xs hidden-sm">
		<div class="row ">
			<?php foreach ($rooms as $i => $item) { ?>
				<div class="col-lg-6 col-md-6 col-sm-12">
					<a href="<?= $item->getUrl() ?>">
						<div class="room-card-element">
							<header>
								<img src="<?= $item->getMainImage()->getSrc(); ?>" />
							</header>
							<section class="content">
								<div class="room-type">
									<h4 class="name"><?= $item->title ?></h4>
									<span class="square"><?= $item->square?> кв.м</span>
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
					</a>
				</div>
			<?php } ?>
		</div>
	</div>
	<slick class="hidden-md hidden-lg hidden-xl full-width" infininte slides-to-show="1" slides-to-scroll="1" center-padding="10%" center-mode="true" arrows="false">
        <?php foreach ($rooms as $item) { ?>
			<div class="col-lg-4 col-md-6">
				<a href="<?= $item->getUrl() ?>">
					<div class="room-card-element">
						<header>
							<img src="<?= $item->getMainImage()->getSrc(); ?>" />
						</header>
						<section class="content">
							<div class="room-type">
								<h4 class="name"><?= $item->title ?></h4>
								<span class="square"><?= $item->square?> кв.м</span>
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
				</a>
			</div>
        <?php } ?>
	</slick>
</div>
<div class="row more-row">
	<div class="col-lg-12 center">
		<button class="detail-button-element">все номера номера</button>
	</div>
</div>