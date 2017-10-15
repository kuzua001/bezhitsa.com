<?php
use frontend\widgets\section\Section;
use frontend\models\pages\FitnessStyleSectionParams;
use yii\helpers\Html;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var FitnessStyleSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
?>
<div class="row clear">
	<div class="col-lg-6 col-sm-12 col-lg-push-6">
		<div class="right-content-block-element">
			<h2 class="elegant-title-element">
				<span class="first"><?= $sectionParams->sloganFirst ?></span>
				<span class="second"><?= $sectionParams->sloganSecond ?></span>
				<span class="third tight"><?= $sectionParams->sloganThird ?></span>
			</h2>
			<?= $sectionParams->content ?>
			<div class="card-element">
				<header>
					<?= $sectionParams->cardTitle ?>
				</header>
				<section class="content">
					<?= $sectionParams->cardContent ?>
				</section>
			</div>
		</div>
	</div>
</div>