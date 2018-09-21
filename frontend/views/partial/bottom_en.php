<?php
use frontend\components\LanguageHelper;
use \frontend\components\AppHelper;
use frontend\models\cms\CmsSettings;

$links = CmsSettings::getValueArr(AppHelper::getDomain()->id,'FOOTER_LINKS_EN');
$popups = CmsSettings::getValueArr(AppHelper::getDomain()->id,'FOOTER_POPUPS_EN');
$copyright = CmsSettings::getValueArr(AppHelper::getDomain()->id,'COPYRIGHT');
$icons = CmsSettings::getValueArr(AppHelper::getDomain()->id,'ICONS');
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
                        <?php foreach ($links as $link) { ?>
                            <a href="<?= $link['link']?>"><?= $link['name']?></a>
                        <?php } ?>
                    </nav>
                </div>
				<div class="col-md-3 footer-col">
					<?= $this->render('social_icons', [
					        'icons' => $icons
                    ]); ?>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-md-push-3 footer-col">
					<nav class="legislation-links">
                        <?php foreach ($popups as $popup) { ?>
                            <a href="#" data-target="<?= $popup['id'] ?>"><?= $popup['name']?></a>
                        <?php } ?>
					</nav>
					<div class="copyright">
                        © 2018 <?= $copyright['en'] ?>.
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>