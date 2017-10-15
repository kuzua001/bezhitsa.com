<?php
use frontend\widgets\section\Section;
use frontend\models\pages\TextPageParams;
use frontend\widgets\buttons\DetailButton;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var TextPageParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
?>
<div class="row">
	<div class="col-lg-12 col-md-12 col-sm-12">
		<h2 class="centered-title-element black-text">
			<?= $sectionParams->title ?>
		</h2>
	</div>
</div>
<?= $sectionParams->content ?>
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