<?php
use frontend\widgets\section\Section;
use frontend\models\pages\FitnessMainSectionParams;
use yii\helpers\Html;
use frontend\widgets\buttons\DetailButton;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var FitnessMainSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
?>
<div class="row clear indent">
	<div class="col-lg-4 center desktop-only">
		<img class="logo" src="/img/big-logo-black.png">
		<h1>
			<span class="name"><?= Yii::t('app/labels', 'Бежица'); ?></span><br>
			<span class="type"><?= Html::encode($sectionParams->mainHeaderTypePart) ?></span>
		</h1>
	</div>
	<div class="col-lg-3 col-lg-push-5 col-sm-12">
		<dl class="contacts-element">
			<dt title="Адрес">
				<i class="address black-icon"></i>
			</dt>
			<dd>
				<?= $sectionParams->address ?>
			</dd>
			<dt title="Телефон">
				<i class="phone black-icon"></i>
			</dt>
			<dd>
				<?= $sectionParams->phone ?>
			</dd>
		</dl>
	</div>
</div>
<div class="row clear indent indent-large middle-row">
	<div class="col-lg-8 col-sm-12">
		<h2 class="elegant-title-element">
			<span class="first"><?= $sectionParams->sloganFirst ?></span>
			<span class="second"><?= $sectionParams->sloganSecond ?></span>
			<span class="third"><?= $sectionParams->sloganThird ?></span>
		</h2>
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
<div class="row clear">
	<div class="col-lg-push-6 col-lg-6 col-md-push-4 col-md-8">
		<div class="right-content-block-element">
			<h3>
			</h3>
			<p>
			</p>
		</div>
	</div>
</div>
