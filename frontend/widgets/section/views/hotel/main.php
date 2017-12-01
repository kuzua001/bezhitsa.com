<?php
use frontend\widgets\section\Section;
use frontend\models\pages\HotelMainSectionParams;
use yii\helpers\Html;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var HotelMainSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
?>
<div class="row clear indent indent-large">
	<div class="col-lg-4 col-md-6 center desktop-only logo-col">
		<img class="logo" src="/img/big-logo.png">
		<h1 class="bezhitsa-title-element">
			<span class="name">Bezhitsa</span><br>
			<span class="type"><?= Html::encode($sectionParams->mainHeaderTypePart) ?></span>
		</h1>
	</div>
	<div class="col-lg-5 col-sm-6 col-xs2-6 greeting">
		<p class="header">
			<b><?= Html::encode($sectionParams->greetingHeader) ?></b>
		</p>
		<p class="content">
			<?= Html::encode($sectionParams->greetingContent) ?>
		</p>
	</div>
	<div class="col-lg-3 col-md-6 col-sm-6 col-xs2-6">
		<dl class="contacts-element">
			<dt title="Адрес">
				<i class="address"></i>
			</dt>
			<dd>
				Клинцовская, 41,<br>
				Брянск<br>
				Российская Федерация<br>
			</dd>
			<dt title="Телефон">
				<i class="phone"></i>
			</dt>
			<dd>
				+7 (915) 117-98-77
			</dd>
		</dl>
	</div>
	<div class="clearfix hidden-md"></div>
	<div class="col-lg-4 col-md-6 col-sm-6 col-xs2-6 center indent">
		<section class="reservation-form-element">
			<header>
				Забронировать <span class="hidden-md hidden-sm hidden-xs">проживание</span>
			</header>
			<div id="tl-search-form"><noindex><a href="http://www.travelline.ru/products/tl-hotel/" rel="nofollow">система онлайн-бронирования</a></noindex></div>
			<script type="text/javascript">
				(function(w){
					var q=[
						['setContext', 'TL-INT-bezhitsa', 'ru'],
						['embed', 'search-form', {container: 'tl-search-form'}]
					];
					var t=w.travelline=(w.travelline||{}),ti=t.integration=(t.integration||{});ti.__cq=ti.__cq?ti.__cq.concat(q):q;
					if (!ti.__loader){ti.__loader=true;var d=w.document,p=d.location.protocol,s=d.createElement('script');s.type='text/javascript';s.async=true;s.src=(p=='https:'?p:'http:')+'//ibe.tlintegration.com/integration/loader.js';(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(s);}
				})(window);
			</script>
	</div>
	<div class="col-lg-8 col-md-6 col-sm-6 col-xs2-6">
		<h2 class="main-slogan elegant-title-element">
			<span class="first"><?= Html::encode($sectionParams->sloganFirst) ?></span>
			<span class="second"><?= Html::encode($sectionParams->sloganSecond) ?></span>
			<span class="third"><?= Html::encode($sectionParams->sloganThird) ?></span>
		</h2>
	</div>
</div>
<div class="row clear slick-wrapper">
	<slick class="content-slider-element" infininte="true" slides-to-show="3" slides-to-scroll="1" center-padding="0" center-mode="true"
		   responsive="[
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        adaptiveHeight: true
                    }
                }
            ]">
		<div>
			<div class="slide-wrapper">
				<h3>Харакетристики отеля</h3>
				<p>
					Отель «Бежица» предлагает 48 роскошных номеров в самом центре города. Наслаждайтесь стильным интерьером, уникальным дизайном стандартных номеров, делюксов и люксов .
				</p>
			</div>
		</div>
		<div>
			<div class="slide-wrapper">
				<h3>Харакетристики отеля</h3>
				<p>
					Отель «Бежица» предлагает 48 роскошных номеров в самом центре города. Наслаждайтесь стильным интерьером, уникальным дизайном стандартных номеров, делюксов и люксов .
				</p>
			</div>
		</div>
		<div>
			<div class="slide-wrapper">
				<h3>Харакетристики отеля</h3>
				<p>
					Отель «Бежица» предлагает 48 роскошных номеров в самом центре города. Наслаждайтесь стильным интерьером, уникальным дизайном стандартных номеров, делюксов и люксов .
				</p>
			</div>
		</div>
		<div>
			<div class="slide-wrapper">
				<h3>Харакетристики отеля</h3>
				<p>
					Отель «Бежица» предлагает 48 роскошных номеров в самом центре города. Наслаждайтесь стильным интерьером, уникальным дизайном стандартных номеров, делюксов и люксов .
				</p>
			</div>
		</div>
	</slick>
</div>