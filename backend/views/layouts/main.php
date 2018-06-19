<?php

/* @var $this \yii\web\View */
/* @var $content string */

use backend\assets\AppAsset;
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use common\widgets\Alert;

AppAsset::register($this);

$isStaticContent = isset($this->params['isStaticContent']) ? $this->params['isStaticContent'] : false;
$mainTag = isset($this->params['mainTag']) ? $this->params['mainTag'] : 'ng-app';
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <base href="/admin/admin/dist/">
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<style>
	[interfaceElement] {
		overflow: hidden;
	}

	[interfaceElement] div.section {
		margin-bottom: 22px;
		border: 1px solid #aaa;
		padding: 20px;
	}
</style>
<div class="wrap">
	<?php
	NavBar::begin([
		'brandLabel' => 'Bezhitsa admin',
		'brandUrl' => Yii::$app->homeUrl,
		'options' => [
			'class' => 'navbar-inverse navbar-fixed-top',
		],
	]);
	$menuItems = [
		['label' => 'Pages', 'url' => ['/site/index']],
		['label' => 'Images', 'url' => ['/site/images']],
	];
	if (Yii::$app->user->isGuest) {
		$menuItems[] = ['label' => 'Login', 'url' => ['/site/login']];
	} else {
		$menuItems[] = '<li>'
			. Html::beginForm(['/site/logout'], 'post')
			. Html::submitButton(
				'Logout (' . Yii::$app->user->identity->username . ')',
				['class' => 'btn btn-link logout']
			)
			. Html::endForm()
			. '</li>';
	}
	echo Nav::widget([
		'options' => ['class' => 'navbar-nav navbar-right'],
		'items' => $menuItems,
	]);
	NavBar::end();
	?>

	<div class="container admin-wrapper-element">
		<?= Breadcrumbs::widget([
			'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
		]) ?>
		<?= Alert::widget() ?>
		<?php if ($isStaticContent) { ?>
			<?= $content?>
		<?php } else { ?>
			<<?= $mainTag ?>><?= $content?></<?= $mainTag ?>>
		<?php } ?>
	</div>
</div>

<!--<footer class="footer">-->
<!--    <div class="container">-->
<!--        <p class="pull-left">&copy; My Company --><?//= date('Y') ?><!--</p>-->
<!---->
<!--        <p class="pull-right">--><?//= Yii::powered() ?><!--</p>-->
<!--    </div>-->
<!--</footer>-->

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
