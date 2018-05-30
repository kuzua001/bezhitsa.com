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
							<span class="type">grand hotel</span>
						</p>
					</div>
				</div>
				<div class="col-md-6 footer-col">
					<nav class="scrollto-links">
						<a href="http://bezhitsa.com/en">Hotel</a>
						<a href="http://bzrest.ru/en">Restaurant</a>
						<a href="http://bzfit.ru/en">Fitness club</a>
					</nav>
				</div>
				<div class="col-md-3 footer-col">
					<nav class="social">
                        <a target="_blank" href="<?= AppHelper::getFooterLink(AppHelper::FOOTER_LINK_TA) ?>">
                            <img src="/img/svg/tripadvisor.svg">
                        </a>
                        <a target="_blank" href="<?= AppHelper::getFooterLink(AppHelper::FOOTER_LINK_IN) ?>">
                            <img src="/img/svg/insta.svg">
                        </a>
                        <a target="_blank" href="<?= AppHelper::getFooterLink(AppHelper::FOOTER_LINK_FB) ?>">
                            <img src="/img/svg/fb.svg">
                        </a>
                        <a target="_blank" href="<?= AppHelper::getFooterLink(AppHelper::FOOTER_LINK_VK) ?>">
                            <img src="/img/svg/vk.svg">
                        </a>
                        <a target="_blank" href="<?= AppHelper::getFooterLink(AppHelper::FOOTER_LINK_OK) ?>">
                            <img src="/img/svg/ok.svg">
                        </a>
					</nav>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-md-push-3 footer-col">
					<nav class="legislation-links">
						<a href="#">Terms</a>
						<a href="#">Availability info</a>
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