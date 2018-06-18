<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/13/17
 * Time: 12:39 PM
 */

use frontend\components\LanguageHelper;
use frontend\models\data\Trainer;

/** @var $item Trainer **/

$links = [];

if (!empty($item->vk_link)) {
	$links[] = [
		'link' => $item->vk_link,
		'img' => '/img/svg/colored/vk.svg'
	];
}

if (!empty($item->fb_link)) {
    $links[] = [
        'link' => $item->fb_link,
        'img' => '/img/svg/colored/fb.svg'
    ];
}
if (!empty($item->inst_link)) {
    $links[] = [
        'link' => $item->inst_link,
        'img' => '/img/svg/colored/insta.svg'
    ];
}

$hasLinks = count($links) > 0;

?>
<section class="trainers" style="background-color: #eae4cf">
    <div class="content-wrapper">
        <div class="container container-90">
            <div class="row">
                <div class="col-lg-4 col-sm-4">
                    <div class="trainer-card-element">
                        <img class="face" src="<?= $item->img_url ?>">
                        <h4 class="trainer-name">
                            <?= $item->name ?>
                        </h4>
                        <div class="trainer-position<?= (LanguageHelper::getCurrentLanguage() === LanguageHelper::LANG_RU ? $item->two_lines_position : $item->two_lines_position_en) ? ' two-lines' : ''?>">
                            <?= $item->position ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-sm-8">
                    <div class="trainer-description-element">
                        <div class="wrapper">
							<?= $item->description ?>
						</div>
						<?php if ($hasLinks) { ?>
							<div class="container-full social-links">
								<div class="row">
									<?php foreach ($links as $link) { ?>
										<div class="col-lg-4">
											<a href="<?= $link['link'] ?>">
												<img src="<?= $link['img'] ?>">
												<span><?= str_replace("http://", "", $link['link']) ?></span>
											</a>
										</div>
									<?php } ?>
								</div>
							</div>
						<?php } ?>
                    </div>
					<div>
						<form class="trainer-form-element" novalidate name="trainerForm" ng-controller="OrderController as order" ng-cloak ng-init="order.trainerId= <?= $item->id?>">
							<div class="wrapper">
								<h3>
                                    <?= Yii::t('app/fitness', 'Персональный тренинг'); ?>
								</h3>
								<p class="details">
                                    <?= Yii::t('app/fitness','Закажите консультацию — мы позвоним вам')?><br>
                                    <?= Yii::t('app/fitness','с выгодным предложением по тренировкам')?>.
								</p>
								<div class="row">
									<div class="col-lg-12">
										<div class="form-group" ng-class="{'error': (trainerForm.$submitted || trainerForm.name.$touched) && trainerForm.name.$error.required}">
                                        <span class="title">
											<?= Yii::t('app/fitness', 'Ваше имя') ?>
                                        </span>
											<input class="form-control" type="text" name="name" ng-model="name" placeholder="<?= Yii::t('app/labels', 'Представьтесь, пожалуйста')?>" required=""/>
											<div class="error" ng-show="(trainerForm.$submitted || trainerForm.name.$touched) && trainerForm.name.$error.required">
                                                <?= Yii::t('app/error', 'Введите имя'); ?>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group" ng-class="{'error': (trainerForm.$submitted || trainerForm.phone.$touched) && trainerForm.phone.$error.required}">
                                        <span class="title">
                                            <label for="phone"><?= Yii::t('app/fitness', 'Телефон') ?></label>
                                        </span>
											<input class="form-control" type="text" id="phone" name="phone" ng-model="phone" placeholder="+7(_ _ _) _ _ _ - _ _ - _ _" required=""/>
											<div class="error" ng-show="(trainerForm.$submitted || trainerForm.phone.$touched) && trainerForm.phone.$error.required">
                                                <?= Yii::t('app/error', 'Ведите телефон'); ?>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="form-group" ng-class="{'error': (trainerForm.$submitted || trainerForm.email.$touched) && trainerForm.email.$error.required}">
                                        <span class="title">
                                            <label for="email"><?= Yii::t('app/fitness', 'Электронная почта')?></label>
                                        </span>
											<input class="form-control" type="text" id="email" name="email" ng-model="email" placeholder="use@2domain.ru" required=""/>
											<div class="error" ng-show="(trainerForm.$submitted || trainerForm.email.$touched) && trainerForm.email.$error.required">
                                                <?= Yii::t('app/error', 'Введите email'); ?>
											</div>
										</div>
									</div>
								</div>
								<div class="form-group agree">
									<p><input type="checkbox" class="agree" ng-model="agree"/>&nbsp;<?= Yii::t('app/fitness','Я согласен на обработку персональных данных')?> </p>
									<div class="error">
                                        <?= Yii::t('app/fitness','Подтвердите согласие на обработку персональных данных')?>
									</div>
								</div>
								<div class="text-center">
									<input type="submit" value="<?= Yii::t('app/labels','отправить')?>" ng-disabled="trainerForm.$invalid || !agree" ng-click="save(trainerForm)" />
								</div>
							</div>
						</form>
					</div>
                </div>
            </div>
        </div>
    </div>
</section>