<?php
use frontend\components\LanguageHelper;
use \frontend\components\AppHelper;
use frontend\models\cms\CmsSettings;

$links = CmsSettings::getValueArr(AppHelper::getDomain()->id,'FOOTER_LINKS_EN');
$title = CmsSettings::getValueArr(AppHelper::getDomain()->id,'TITLE');
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
						<img class="logo" src="/img/svg/main_logo.svg">
						<p class="title">
							<span class="name">Bezhitsa</span>
							<span class="type"><?= $title['en'] ?></span>
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
                            <span data-toggle="modal" data-target="#<?= $popup['id']?>"><?= $popup['name']?></span>
                        <?php } ?>
					</nav>
                    <div>
                        <?php foreach ($popups as $popup) { ?>
                            <div class="modal" tabindex="-1" role="dialog" id="<?= $popup['id']?>">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title"><?= $popup['name'] ?></h4>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <?= $popup['content'] ?>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
					<div class="copyright">
                        © 2018 <?= $copyright['en'] ?>.
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>