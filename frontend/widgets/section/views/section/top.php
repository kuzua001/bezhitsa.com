<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/15/17
 * Time: 8:06 PM
 */
use frontend\widgets\section\Section;
use frontend\models\pages\SectionBgSizeParams;
use yii\helpers\Html;

/** @var Section $widget */

$widget        = $this->context;
$sectionParams = $widget->sectionParams;
$bgItems       = !empty($sectionParams->bgItems) ? $sectionParams->bgItems : [];

usort($bgItems, function(SectionBgSizeParams $a, SectionBgSizeParams $b) {
	return $a->viewportSize > $b->viewportSize;
});
?>
<section class="<?= $sectionParams->getSectionClass()?>" style="background-color: <?= !empty($sectionParams->bgColor) ? $sectionParams->bgColor : '#fff' ?>">
    <div class="content-wrapper">
		<picture picturefill class="bg">
			<?php foreach ($bgItems as $i => $item) { ?>
				<?php
				/** @var $item SectionBgSizeParams */
				?>
<!--				--><?php //if ($i === 0) { ?>
<!--					<img src="--><?//= $item->image ?><!--" />-->
<!--				--><?php //} ?>
				<source srcset="<?= $item->image ?>" pf-media="screen-<?= $item->getViewportPrefix()?>"/>
			<?php } ?>
		</picture>
        <div class="container container-90">
