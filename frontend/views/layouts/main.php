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

		<!-- start TL head script -->
		<script type="text/javascript">
			(function(w){
				var q=[
					['setContext', 'TL-INT-bezhitsa.new', 'ru']
				];
				var t=w.travelline=(w.travelline||{}),ti=t.integration=(t.integration||{});ti.__cq=ti.__cq?ti.__cq.concat(q):q;
				if (!ti.__loader){ti.__loader=true;var d=w.document,p=d.location.protocol,s=d.createElement('script');s.type='text/javascript';s.async=true;s.src=(p=='https:'?p:'http:')+'//ibe.tlintegration.com/integration/loader.js';(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(s);}
			})(window);
		</script>
		<!-- end TL head script -->

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