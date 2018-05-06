<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/13/17
 * Time: 12:39 PM
 */

use frontend\models\data\Trainer;

/** @var $item Trainer **/

$links = [];

if (!empty($item->vk_link)) {
	$links[] = [
		'link' => $item->vk_link,
		'img' => '/img/social/fitness/vk.jpg'
	];
}

if (!empty($item->fb_link)) {
    $links[] = [
        'link' => $item->fb_link,
        'img' => '/img/social/fitness/fb.jpg'
    ];
}
if (!empty($item->inst_link)) {
    $links[] = [
        'link' => $item->inst_link,
        'img' => '/img/social/fitness/inst.jpg'
    ];
}

$hasLinks = count($links) > 0;

?>
<section class="trainers" style="background-color: #eae4cf">
    <div class="content-wrapper">
        <div class="container container-90">
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <div class="trainer-card-element">
                        <img class="face" src="<?= $item->img_url ?>">
                        <h4 class="trainer-name">
                            <?= $item->name ?>
                        </h4>
                        <div class="trainer-position">
                            <?= $item->position ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 col-md-8">
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
                </div>
                <div class="col-md-12">
                    <form class="trainer-form-element" action="create-order">
                        <div class="wrapper">
                            <h3>
                                <?= Yii::t('app/fitness', 'Персональный тренинг'); ?>
                            </h3>
                            <p class="details">
                                Закажите консультацию — мы позвоним вам<br>
                                с выгодным предложением по тренировкам.
                            </p>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group required error">
                                        <span class="title">
											<?= Yii::t('app/fitness', 'Ваше имя') ?>;
                                        </span>
                                        <input class="form-control" type="text" placeholder="Представьтесь, пожалуйста" />
                                        <div class="error">
                                            Заполните обязательные поля
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group required">
                                        <span class="title">
                                            <label for="phone"><?= Yii::t('app/fitness', 'Телефон') ?></label>
                                        </span>
                                        <input class="form-control" type="text" id="phone" placeholder="+7(_ _ _) _ _ _ - _ _ - _ _" />
                                        <div class="error">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <span class="title">
                                            <label for="email"><?= Yii::t('app/fitness', 'Электронная почта')?></label>
                                        </span>
                                        <input class="form-control" type="text" id="email" placeholder="use@2domain.ru" />
                                        <div class="error">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group agree required error">
                                <input type="checkbox" class="agree" />
                                <p>Я согласен на обработку персональных данных </p>
                                <div class="error">
                                    Подтвердите согласие на обработку персональных данных
                                </div>
                            </div>
                            <div class="text-center">
                                <input type="submit" value="отправить" />
                                <input type="hidden" name="trainer_id" value="<?= $item->id ?>"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>