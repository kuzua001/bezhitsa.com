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
				<div class="col-lg-4 center desktop-only">
					<img class="logo" src="/img/big-logo.png">
					<h1>
                        <?= $widget->title() ?>
					</h1>
				</div>
				<div class="col-lg-5 greeting">
					<p class="header">
						<b>
						<?= $widget->welcomeHeader ?>
						</b>
					</p>
					<p class="content">
						<?= $widget->welcomeContent ?>
					</p>
				</div>
				<div class="col-lg-3">
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
				<div class="col-lg-4 col-md-4 center">
					<section class="reservation-form-element">
						<header>
							Забронировать проживание
						</header>
						<div id="tl-search-form"><noindex><a href="http://www.travelline.ru/products/tl-hotel/" rel="nofollow">система онлайн-бронирования</a></noindex></div>
						<script type="text/javascript">
							(function(w){
								var q=[
									['setContext', 'TL-INT-bezhitsa', '<?= \frontend\components\LanguageHelper::getCurrentLanguageCode(); ?>'],
									['embed', 'search-form', {container: 'tl-search-form'}]
								];
								var t=w.travelline=(w.travelline||{}),ti=t.integration=(t.integration||{});ti.__cq=ti.__cq?ti.__cq.concat(q):q;
								if (!ti.__loader){ti.__loader=true;var d=w.document,p=d.location.protocol,s=d.createElement('script');s.type='text/javascript';s.async=true;s.src=(p=='https:'?p:'http:')+'//ibe.tlintegration.com/integration/loader.js';(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(s);}
							})(window);
						</script>
					</section>
				</div>
				<div class="col-lg-8 col-md-8">
					<h2 class="main-slogan elegant-title-element">
						<span class="first"><?= $widget->mainSloganFirst ?></span>
						<span class="second"><?= $widget->mainSloganSecond ?></span>
						<span class="third"><?= $widget->mainSloganThird ?></span>
					</h2>
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