<?php
use frontend\widgets\common\MainSection;
use yii\helpers\Html;

/** @var MainSection $widget */

$widget = $this->context;
?>
<section class="fitness-main">
	<div class="content-wrapper">
		<img class="bg large" src="/img/backgrounds/top-fitness-bg.jpg">
		<div class="container container-90">
			<div class="row clear indent">
				<div class="col-lg-4 center desktop-only">
					<img class="logo" src="/img/big-logo-black.png">
					<h1>
						<span class="name">Бежица</span><br>
						<span class="type">фитнес</span>
					</h1>
				</div>
				<div class="col-lg-3 col-lg-push-5 col-sm-12">
					<?php if (count($widget->contactsList)) { ?>
						<dl class="contacts-element">
							<?php foreach($widget->contactsList as $item) { ?>
								<dt title="<?= $item['title'] ?>">
									<i class="<?= $item['class'] ?> black-icon"></i>
								</dt>
								<dd>
									<?= $item['value'] ?>
								</dd>
							<?php } ?>
						</dl>
					<?php } ?>
				</div>
			</div>
			<div class="row clear indent indent-large middle-row">
				<div class="col-lg-8 col-sm-12">
					<h2 class="elegant-title-element">
						<span class="first"><?= $widget->mainSloganFirst ?></span>
						<span class="second"><?= $widget->mainSloganSecond ?></span>
						<span class="third tight"><?= $widget->mainSloganThird ?></span>
					</h2>
					<button class="detail-button-element black-text">
						подробнее
					</button>
				</div>
			</div>
			<div class="row clear">
				<div class="col-lg-push-6 col-lg-6 col-md-push-4 col-md-8">
					<div class="right-content-block-element">
						<h3>
							<?= $widget->rightBlockHeader ?>
						</h3>
						<p>
                            <?= $widget->rightBlockContent ?>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>