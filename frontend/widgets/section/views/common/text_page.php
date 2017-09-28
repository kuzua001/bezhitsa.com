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
<section class="text" style="background-color: <?= !empty($sectionParams->bgColor) ? $sectionParams->bgColor : '#fff' ?>">>
    <div class="content-wrapper">
        <div class="container container-90">
            <div class="row">
                <div class="col l12 m12 s12">
                    <h2 class="centered-title-element black-text">
                        <?= $sectionParams->title ?>
                    </h2>
                </div>
            </div>
            <?= $sectionParams->content ?>
            <div class="row more-row">
                <div class="col l12 center">
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
        </div>
    </div>
</section>
