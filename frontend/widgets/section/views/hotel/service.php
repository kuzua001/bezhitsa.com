<?php
use frontend\components\AppHelper;
use frontend\widgets\section\Section;
use frontend\models\pages\HotelMainSectionParams;
use yii\helpers\Html;
use \frontend\models\data\Room;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var \frontend\models\pages\HotelServiceSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
$rooms = Room::find()->where('published = 1')->limit(4)->all();

/**
 * @var $rooms Room[]
 */
?>
<div class="row indent indent-large">
	<div class="col-md-6">
		<h2 class="elegant-title-element">
			<span class="first"><?= $sectionParams->sloganFirst ?></span>
			<span class="second"><?= $sectionParams->sloganSecond ?></span>
			<span class="third tight"><?= $sectionParams->sloganThird ?></span>
		</h2>
		<div class="clearfix"></div>
		<a href="<?= $sectionParams->detailButtonLink ?>">
		  <button class="detail-button-element">
				<?= $sectionParams->detailButtonText ?>
		  </button>
		</a>
		<div class="clearfix"></div>
	</div>
	<div class="col-md-6">
		<div class="right-content-block-element">
			<h3><?= $sectionParams->block1Title ?></h3>
			<?= $sectionParams->block1Content ?>
		</div>
		<div class="right-content-block-element">
			<h3><?= $sectionParams->block2Title ?></h3>
            <?= $sectionParams->block2Content ?>
		</div>
	</div>
	<div class="clearfix"></div>
	<div class="col-lg-6">
		<div class="card-element indent-desktop">
			<header>
				<?= $sectionParams->whyHeader ?>
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
			<?= $sectionParams->title ?>
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
							<?= $sectionParams->infoTitle ?>
						</header>
						<section class="content">
							<?= $sectionParams->infoContent ?>
						</section>
					</div>
				</div>
				<div class="col-lg-12 col-md-6">
					<div class="card-element">
						<header class="pale">
							<?= $sectionParams->descriptionTitle ?>
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
                <?php
                if ($item->getMainImage() === null) {
                    continue;
                }
                ?>
				<div class="col-lg-6 col-md-6 col-sm-12">
					<a href="<?= $item->getUrl() ?>">
						<div class="room-card-element">
							<header>
								<img src="<?= $item->getMainImage()->getSrc(); ?>" />
							</header>
							<section class="content">
								<div class="room-type">
									<h4 class="name"><?= $item->title ?></h4>
									<span class="square"><?= $item->square?> <?= Yii::t('app/units', 'кв.м') ?></span>
								</div>
								<div class="price-item">
                                    <?= Yii::t('app/units', 'от') ?> <span class="price"><?= $item->price_from ?></span> <?= Yii::t('app/units', 'руб') ?>
								</div>
							</section>
						</div>
					</a>
				</div>
			<?php } ?>
		</div>
	</div>
	<slick class="hidden-md hidden-lg hidden-xl full-width" infininte slides-to-show="1" slides-to-scroll="1" center-padding="10%" center-mode="true" arrows="false">
        <?php foreach ($rooms as $item) { ?>
            <?php
            if ($item->getMainImage() === null) {
                continue;
            }
            ?>
			<div class="col-lg-4 col-md-6">
				<a href="<?= $item->getUrl() ?>">
					<div class="room-card-element">
						<header>
							<img src="<?= $item->getMainImage()->getSrc(); ?>" />
						</header>
						<section class="content">
							<div class="room-type">
								<h4 class="name"><?= $item->title ?></h4>
								<span class="square"><?= $item->square?> <?= Yii::t('app/units', 'кв.м') ?></span>
							</div>
							<div class="price-item">
                                <?= Yii::t('app/units', 'от') ?> <span class="price"><?= $item->price_from ?></span> <?= Yii::t('app/units', 'руб') ?>
							</div>
						</section>
					</div>
				</a>
			</div>
        <?php } ?>
	</slick>
</div>
<div class="row more-row">
	<div class="col-lg-12 center">
		<a href="<?= AppHelper::getMultilingualLink('/room') ?>"><button class="detail-button-element"><?= $sectionParams->allRoomsButtonText ?></button></a>
	</div>
</div>
