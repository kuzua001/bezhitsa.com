<?php
use frontend\components\LanguageHelper;

$lang = LanguageHelper::getCurrentLanguage();
?>
<footer>
	<div class="content-wrapper">
		<div class="container container-90">
			<div class="row indent">
				<div class="col-md-3 footer-col">
					<div class="logo-wrapper">
						<img class="logo" src="/img/logo_small.png">
						<p class="title">
							<span class="name">Bezhitsa</span>
							<span class="type"><?= $lang == LanguageHelper::LANG_EN ? 'grand hotel' : 'гранд отель' ?></span>
						</p>
					</div>
				</div>
				<div class="col-md-6 footer-col">
					<nav class="scrollto-links">
						<a href="http://bezhitsa.com">Отель</a>
						<a href="http://bzrest.ru">Ресторан</a>
						<a href="http://bzfit.ru">Фитнес клуб</a>
					</nav>
				</div>
				<div class="col-md-3 footer-col">
					<nav class="social">
						<a href="https://facebook.com">
							<i style="background-image: url('/img/social/fb.png')"></i>
						</a>
						<a href="https://twitter.com">
							<i style="background-image: url('/img/social/tw.png')"></i>
						</a>
						<a href="https://ponominalu.ru">
							<i style="background-image: url('/img/social/pn.png')"></i>
						</a>
						<a href="https://instagarm.com">
							<i style="background-image: url('/img/social/ns.png')"></i>
						</a>
						<a href="https://youtube.com">
							<i style="background-image: url('/img/social/yt.png')"></i>
						</a>
					</nav>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-md-push-3 footer-col">
					<nav class="legislation-links">
						<a href="#">Условия пользования сайтом</a>
						<a href="#">Сведения о доступности</a>
						<a href="#">Cookie Consent</a>
					</nav>
					<div class="copyright">
						© 2017 Bezhitsa, Inc. All rights reserved.
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>