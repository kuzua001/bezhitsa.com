<?php
use frontend\widgets\common\MainSection;
use yii\helpers\Html;

/** @var MainSection $widget */

$widget = $this->context;
?>
<section class="main">
	<div class="content-wrapper">
		<img class="bg" src="/img/top-bg.jpg">
		<div class="container container-90">
			<div class="row clear indent">
				<div class="col l4 center">
					<img class="logo" src="/img/big-logo.png">
					<h1>
                        <?= $widget->title() ?>
					</h1>
				</div>
				<div class="col l5 greeting">
					<p class="header">
						<b>
						<?= $widget->welcomeHeader ?>
						</b>
					</p>
					<p class="content">
						<?= $widget->welcomeContent ?>
					</p>
				</div>
				<div class="col l3">
					<?php if (count($widget->contactsList)) { ?>
						<dl class="contacts-element">
							<?php foreach($widget->contactsList as $item) { ?>
								<dt title="<?= $item['title'] ?>">
									<i class="<?= $item['class'] ?>"></i>
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
				<div class="col l4 m4 center">
					<section class="reservation-form-element">
						<header>
							Забронировать проживание
						</header>
						<section class="content">
							<div class="dates">
								<input type="text" class="from" placeholder="заезд">
								<input type="text" class="to" placeholder="выезд">
							</div>
							<div class="people">
								<input type="text" class="select" placeholder="1 Номер, 1 Взрослый, 0 Детей">
								<!-- redmine test -->

							</div>
						</section>
						<footer>
							<div class="apply">Бронировать</div>
						</footer>
					</section>
				</div>
				<div class="col l8 m8">
					<h2 class="main-slogan elegant-title-element">
						<span class="first"><?= $widget->mainSloganFirst ?></span>
						<span class="second"><?= $widget->mainSloganSecond ?></span>
						<span class="third"><?= $widget->mainSloganThird ?></span>
					</h2>
				</div>
			</div>
			<div class="row clear">
				<div class="col push-l6 ml6 push-m4 m8">
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