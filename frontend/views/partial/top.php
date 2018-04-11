<?php

use frontend\models\cms\ux\Menu;
use frontend\models\cms\ux\MenuItem;
use frontend\components\LanguageHelper;
use frontend\components\AppHelper;

/** @var $this \frontend\views\CmsView*/

/**
 * Меню, которое выводится, когда не знаем, что конкретно выводить в качестве меню
 * todo переделать это, чтобы дефолтное меню возвращал контроллер, а во сьюхе всегда гарантированно был объект topMenu
 */
if (empty($this->topMenu)) {
    $topMenu = Menu::findOne(1);
} else {
    $topMenu = $this->topMenu;
}

$lang     = LanguageHelper::getCurrentLanguage();
$langCode = LanguageHelper::getCurrentLanguageCode();
$domain   = AppHelper::getDomain();
$canonicalUrl = '/' . ltrim(str_replace($domain->base_url, '', $_SERVER['REQUEST_URI']), '/');
if ($lang !== LanguageHelper::getDefaultLanguage()) {
	$canonicalUrl = '/' . str_replace('/' . $langCode, '', $canonicalUrl);
}

$engUrl = '/en' . $canonicalUrl;

$lang = LanguageHelper::getCurrentLanguage();

$hasSubMenu = false;
$subMenuItems = [];
foreach ($topMenu->getItems() as $i => $item) {
    if (!empty($item->getSubMenu()) && $item->page_id == $topMenu->parent_page_id && count($item->getSubMenu()->getItems())) {
        $hasSubMenu = true;
        $subMenuItems = $item->getSubMenu()->getItems();
        break;
    }
}
?>
<section class="header<?= $hasSubMenu ? ' with-sumbenu' : ''?>">
	<div class="content-wrapper">
		<header class="header-element">
			<div class="mobile-only container">
				<div class="slide-dummy-element" ng-swipe-right="site.setMenuState(true)"></div>
				<div class="row">
					<div class="col-sm-12">
						<span class="hamburger-element" ng-click="site.toggleMenu()">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</span>
						<a class="header-logo" href="https://bezhitsa.com<?= LanguageHelper::getBaseUrl() ?>" title="beshitza.ru">
							<img src="/img/logo_header_mobile.png">
						</a>
					</div>
				</div>
			</div>
			<div class="desktop-only container container-90">
				<div class="row">
					<div class="col-md-4">
						<a class="header-logo" href="https://bezhitsa.com<?= LanguageHelper::getBaseUrl() ?>" title="beshitza.ru">
							<img src="/img/logo_header.jpg">
						</a>
					</div>
					<div class="header-menu col-md-5">
                        <?php if (count($topMenu->getItems())) { ?>
							<nav class="menu">
								<?php foreach ($topMenu->getItems() as $i => $item) { ?>
									<?= $item->getHTML() ?>
								<?php } ?>
							</nav>
                        <?php } ?>
					</div>
					<div class="lang-switcher col-md-3">
						<a href="<?= $lang == LanguageHelper::LANG_EN ? $canonicalUrl : $engUrl ?>">
							<?= $lang == LanguageHelper::LANG_EN ? 'на русском' : 'in english' ?>
						</a>
					</div>
				</div>
			</div>
		</header>
	</div>
    <?php if ($hasSubMenu) { ?>
		<div class="desktop-only submenu">
			<div class="content-wrapper">
				<div class="container container-90">
					<div class="row">
						<div class="col-md-9 col-md-push-2 text-center">
							<nav class="submenu">
								<div class="item">
									<?php foreach ($subMenuItems as $subItem) { ?>
										<?= $subItem->getHTML() ?>
									<?php } ?>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
    <?php } ?>
</section>
<div class="slide-menu-element mobile-only" ng-class="{'active':site.slideMenuState}" ng-swipe-left="site.setMenuState(false)">
	<div class="before" ng-click="site.setMenuState(false)"></div>
	<nav class="menu">
        <div class="main">
            <?php foreach ($topMenu->getItems() as $item) { ?>
                <?= $item->getHTML() ?>
            <?php } ?>
		</div>
        <?php if ($hasSubMenu) { ?>
			<div class="sub" style="background-color: <?= $firstSectionColor ?>">
				<?php foreach ($subMenuItems as $subItem) { ?>
					<?= $subItem->getHTML() ?>
				<?php } ?>
			</div>
		<?php } ?>
	</nav>
</div>
