<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/11/17
 * Time: 4:50 PM
 */
use frontend\models\restaurant\RestaurantMenu;
use yii\helpers\Html;

/**
 * @var $menu RestaurantMenu
 */

/**
 * @param $group \frontend\models\restaurant\RestaurantMenuGroup
 * @return string
 */
$renderMenuGroup = function(\frontend\models\restaurant\RestaurantMenuGroup $group) {
	$html = '';

	foreach($group->getCategories() as $cat) {
		$itemsHTML = Html::tag('div', $cat->getTitle(), ['class' => 'title']);
		foreach ($cat->getItems() as $item) {

			$variationsSizes = $item->getVariations();
			array_walk($variationsSizes, function(&$item, $key) {
				$item = $item['size'];
			});

			$itemsHTML .= Html::tag('div',
				Html::tag(
					'div',
                    Html::tag(
                    	'div',
						$item->getTitle() .
							Html::tag('span', implode('/', $variationsSizes), ['class' => 'sizes']),
						[
							'class' => 'description'
						]
					) . Html::tag('div', $item->getPrice() . 'р.', [
						'class' => 'price'
					])
				),
				[
					'class' => 'item'
				]
			);
		}
        $html .= Html::tag('div', $itemsHTML, ['class' => 'menu-category']);
	}

	return $html;
}
?>
<section class="restaurant-dessert"  id="section4">
	<div class="content-wrapper">
		<div class="container container-90">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12">
					<h2 class="centered-title-element black-text">
						Меню
					</h2>
				</div>
			</div>
		<div class="mobile-only container container-90">
			<div class="restaurant-menu-element mobile">
				<header>
					<ul class="tab-list">
						<li>основное меню</li>
						<li>банкетное меню</li>
						<li>банкетная карта</li>
					</ul>
				</header>
				<section class="content">
					<div class="tab"></div>
				</section>
			</div>
		</div>
		<div class="desktop-only container container-90">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12">
					<div class="restaurant-menu-element desktop" ng-controller="TabsController as tabs" ng-init="tabs.activeTabIndex = 1">
						<header>
							<ul class="tab-list">
								<li ng-click="tabs.setActiveTabIndex(1)" ng-class="tabs.getActiveClass(1)"><?= $menu->getMainMenu()->getTitle() ?></li>
								<li ng-click="tabs.setActiveTabIndex(2)" ng-class="tabs.getActiveClass(2)"><?= $menu->getBanketMenu()->getTitle() ?></li>
								<li ng-click="tabs.setActiveTabIndex(3)" ng-class="tabs.getActiveClass(3)"><?= $menu->getBarMapMenu()->getTitle() ?></li>
							</ul>
						</header>
						<section class="content">
							<div class="tab" ng-class="tabs.getActiveClass(1)">
								<?= $renderMenuGroup($menu->getMainMenu()) ?>
							</div>
							<div class="tab" ng-class="tabs.getActiveClass(2)">
								<?= $renderMenuGroup($menu->getBanketMenu()) ?>
							</div>
							<div class="tab" ng-class="tabs.getActiveClass(3)">
                                <?= $renderMenuGroup($menu->getBarMapMenu()) ?>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>