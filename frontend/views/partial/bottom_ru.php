<?php
use frontend\components\LanguageHelper;
use \frontend\components\AppHelper;
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
							<span class="type">гранд отель</span>
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

						<a target="_blank" href="<?= AppHelper::getFooterLink(AppHelper::FOOTER_LINK_IN) ?>">
							<i style="background-image: url('/img/social/ns.png')"></i>
						</a>
						<a target="_blank" href="<?= AppHelper::getFooterLink(AppHelper::FOOTER_LINK_TA) ?>">
							<i style="background-image: url('/img/social/ta.png')"></i>
						</a>
            <a target="_blank" href="<?= AppHelper::getFooterLink(AppHelper::FOOTER_LINK_FB) ?>">
              <i style="background-image: url('/img/social/fb.png')"></i>
            </a>
						<a target="_blank" href="<?= AppHelper::getFooterLink(AppHelper::FOOTER_LINK_VK) ?>">
							<i style="background-image: url('/img/social/vk.png')"></i>
						</a>
            <a target="_blank" href="<?= AppHelper::getFooterLink(AppHelper::FOOTER_LINK_OK) ?>">
              <i style="background-image: url('/img/social/ok.png')"></i>
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
						© 2018 Bezhitsa, Inc. All rights reserved.
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>