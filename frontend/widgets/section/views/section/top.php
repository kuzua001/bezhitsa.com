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
$bgData        = [];

foreach ($bgItems as $item) {
	$bgData[] = ['(max-width: ' . $item->getViewportWidh() .'px)', $item->image];
	if ($item === end($bgItems)) {
        $bgData[] = ['(min-width: ' . $item->getViewportWidh() .'px)', $item->image];
	}
}
?>
<section class="<?= $sectionParams->getSectionClass()?>" style="background-color: <?= !empty($sectionParams->bgColor) ? $sectionParams->bgColor : '#fff' ?>"
	 data-lang="<?= \frontend\components\LanguageHelper::getCurrentLanguageCode(); ?>">
    <div class="content-wrapper">
		<?php if (!empty($bgData)) { ?>
			<div class="bg-wrapper">
				<img class="bg<?= $sectionParams->isBgLarge ? ' large' : ''?>" bh-src-responsive='<?= json_encode($bgData);?>'>
			</div>
		<?php } ?>
        <div class="container container-90">
