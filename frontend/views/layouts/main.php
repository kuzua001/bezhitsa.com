<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;

AppAsset::register($this);
Yii::$app->language = 'ru';
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
	<head>
		<meta charset="<?= Yii::$app->charset ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<meta name="description" content="<?= isset($this->description) ? $this->description : '' ?>">
		<?= Html::csrfMetaTags() ?>
		<title><?= Html::encode($this->title) ?></title>
		<?php $this->head() ?>
	</head>
	<body ng-app="main" ng-controller="SiteController as site">
		<?php $this->beginBody() ?>
			<div class="content" style="background-color: <?= isset($this->bgColor) ? $this->bgColor : '#fff'?>">
				<?= $this->render("//partial/top", [
					'firstSectionColor' => isset($this->submenuColor) ? $this->submenuColor : '#fff'
				]) ?>
				<?= $content ?>
			</div>
			<?= $this->render("//partial/bottom") ?>
		<?php $this->endBody() ?>
	</body>
</html>
<?php $this->endPage() ?>