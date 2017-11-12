<?php

use frontend\models\cms\ux\Menu;
use frontend\models\cms\ux\MenuItem;

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
?>
<section class="header">
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
						<a class="header-logo" href="/" title="beshitza.ru">
							<img src="/img/logo_header_mobile.png">
						</a>
					</div>
				</div>
			</div>
			<div class="desktop-only container container-90">
				<div class="row">
					<div class="col-md-4">
						<a class="header-logo" href="http://bezhitsa.com" title="beshitza.ru">
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
						<a>
							in english
						</a>
					</div>
				</div>
			</div>
		</header>
	</div>
	<div class="desktop-only submenu">
		<div class="content-wrapper">
			<div class="container container-90">
				<div class="row">
					<div class="col-md-9 col-md-push-2 text-center">
						<nav class="submenu">
                            <?php foreach ($topMenu->getItems() as $i => $item) { ?>
                                <?php if (!empty($item->getSubMenu()) && $item->page_id == $topMenu->parent_page_id) { ?>
									<div class="item">
                                        <?php foreach ($item->getSubMenu()->getItems() as $subItem) { ?>
                                            <?= $subItem->getHTML() ?>
                                        <?php } ?>
									</div>
                                <?php } ?>
                            <?php } ?>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="slide-menu-element mobile-only" ng-class="{'active':site.slideMenuState}" ng-swipe-left="site.setMenuState(false)">
	<nav class="menu">
        <?php foreach ($topMenu->getItems() as $item) { ?>
            <?= $item->getHTML() ?>
        <?php } ?>
	</nav>
</div>