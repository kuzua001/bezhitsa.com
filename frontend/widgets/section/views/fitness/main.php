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
<section class="fitness-main">
	<div class="content-wrapper">
		<img class="bg large" src="/img/backgrounds/top-fitness-bg.jpg">
		<div class="container container-90">
			<div class="row clear indent">
				<div class="col l4 center desktop-only">
					<img class="logo" src="/img/big-logo-black.png">
					<h1>
						<span class="name">Бежица</span><br>
						<span class="type"><?= Html::encode($sectionParams->mainHeaderTypePart) ?></span>
					</h1>
				</div>
				<div class="col l3 push-l5 s12">
					<dl class="contacts-element">
						<dt title="Адрес">
							<i class="address black-icon"></i>
						</dt>
						<dd>
							Клинцовская, 41,<br>
							Брянск<br>
							Российская Федерация<br>								</dd>
						<dt title="Телефон">
							<i class="phone black-icon"></i>
						</dt>
						<dd>
							8(4832)40-00-00								</dd>
					</dl>
				</div>
			</div>
			<div class="row clear indent indent-large middle-row">
				<div class="col l8 s12">
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
				<div class="col push-l6 ml6 push-m4 m8">
					<div class="right-content-block-element">
						<h3>
						</h3>
						<p>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>