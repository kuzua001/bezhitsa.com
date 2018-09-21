<?php

/* @var $this \yii\web\View */
/* @var $content string */

use frontend\components\LanguageHelper;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use frontend\assets\AppAsset;
use common\widgets\Alert;
use \frontend\components\AppHelper;
use \frontend\models\Domain;

AppAsset::register($this);
$lang = LanguageHelper::getCurrentLanguage();
$langCode = LanguageHelper::getCurrentLanguageCode();
$domainId = AppHelper::getDomain()->domain;
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
		<?php if (property_exists($this, 'injectedHTML')) { echo $this->injectedHTML; } ?>
		<?php if (false && $domainId === Domain::DOMAIN_HOTEL_ID) { ?>
			<!-- start TL head script -->
			<script type="text/javascript">
				(function(w){
					var q=[
						['setContext', 'TL-INT-bezhitsa.new', '<?= \frontend\components\LanguageHelper::getCurrentLanguageCode(); ?>']
					];
					var t=w.travelline=(w.travelline||{}),ti=t.integration=(t.integration||{});ti.__cq=ti.__cq?ti.__cq.concat(q):q;
					if (!ti.__loader){ti.__loader=true;var d=w.document,p=d.location.protocol,s=d.createElement('script');s.type='text/javascript';s.async=true;s.src=(p=='https:'?p:'http:')+'//ibe.tlintegration.com/integration/loader.js';(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(s);}
				})(window);
			</script>
			<!-- end TL head script -->
		<?php } ?>

		<?php $this->head() ?>
	</head>
	<body ng-app="main" ng-controller="SiteController as site">
		<?php
            if ($this instanceof \frontend\views\CmsView) {
                foreach ($this->getModals() as $name) {
                    echo $this->render("//modal/$name");
                }
            }
		?>
		<?php $this->beginBody() ?>
			<div class="content" style="background-color: <?= isset($this->bgColor) ? $this->bgColor : '#fff'?>">
				<?= $this->render("//partial/top", [
					'firstSectionColor' => isset($this->submenuColor) ? $this->submenuColor : '#fff'
				]) ?>
				<?= $content ?>
			</div>
      <?php if ($lang === LanguageHelper::LANG_RU) { ?>
        <?= $this->render("//partial/bottom_ru") ?>
      <?php } else if ($lang === LanguageHelper::LANG_EN) { ?>
        <?= $this->render("//partial/bottom_en") ?>
      <?php } else { ?>
        <?= $this->render("//partial/bottom") ?>
      <?php } ?>
		<?php $this->endBody() ?>
	</body>
</html>
<?php $this->endPage() ?>