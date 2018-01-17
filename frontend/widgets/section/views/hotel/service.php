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

/**
 * @var $rooms Room[]
 */
?>
<div class="row indent indent-large">
	<div class="col-md-6">
		<h2 class="elegant-title-element">
			<span class="first">Роскошный</span>
			<span class="second">сервис для</span>
			<span class="third tight">требовательных гостей</span>
		</h2>
		<div class="clearfix"></div>
		<a href="http://bezhitsa.com/service">
            <button class="detail-button-element">
    			подробнее про отель
		    </button>
        </a>
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
				<?= $sectionParams->whyContent ?>
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
							<?= $sectionParams->infoContent ?>
						</section>
					</div>
				</div>
				<div class="col-lg-12 col-md-6">
					<div class="card-element">
						<header class="pale">
							Описание отеля
						</header>
						<section class="content">
							<?= $sectionParams->descriptionContent ?>
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
									<i class="property-icon <?= $item->getBedIconClass() ?>"></i>
									<span class="property-description"><?= $item->getBedTitle() ?></span>
								</div>
								<div class="property-item-element">
									<i class="property-icon <?= $item->getPersonIconClass() ?>"></i>
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
		<a href="/room"><button class="detail-button-element">все номера</button></a>
	</div>
</div>
