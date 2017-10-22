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
foreach (SectionBgSizeParams::getBgfForAllViewports($bgItems) as $item) {
	$bgData[] = ['(min-width: ' . $item->getViewportWidh() .'px)', $item->image];
}
?>
<section class="<?= $sectionParams->getSectionClass()?>" style="background-color: <?= !empty($sectionParams->bgColor) ? $sectionParams->bgColor : '#fff' ?>">
    <div class="content-wrapper">
		<div class="bg-wrapper">
			<img class="bg" bh-src-responsive='<?= json_encode($bgData);?>'>
		</div>
        <div class="container container-90">
