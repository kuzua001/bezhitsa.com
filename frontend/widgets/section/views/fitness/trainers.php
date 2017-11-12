<?php
use frontend\widgets\section\Section;
use frontend\models\pages\FitnessStyleSectionParams;
use yii\helpers\Html;
use \frontend\models\pages\TrainersListSectionParams;
use frontend\models\data\Trainer;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var TrainersListSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;



$trainers = Trainer::find()->all();
$trainer = $trainers[0];
?>
<div class="row">
	<?php foreach($trainers as $trainer) { ?>
		<div class="col-lg-3">
			<div class="trainer-card-element preview">
				<img class="face" src="/img/fitness/trener1-small.jpg">
				<h4 class="trainer-name">
                    <?php
                    /** @var $trainer Trainer **/
                    ?>
                    <?= $trainer->name ?>
				</h4>
				<div class="trainer-position">
                    <?= $trainer->position ?>
				</div>
				<button class="detail-button-element black-text">заказать тренинг</button>
			</div>
		</div>
	<?php } ?>
</div>
<div class="row">
	<div class="col-lg-4">
		<div class="trainer-card-element">
			<img class="face" src="/img/fitness/trener1.jpg">
			<h4 class="trainer-name">
                <?php
                /** @var $trainer Trainer **/
                ?>
                <?= $trainer->name ?>
			</h4>
			<div class="trainer-position">
                <?= $trainer->position ?>
			</div>
		</div>
	</div>
	<div class="col-lg-8">
		<div class="trainer-description-element">
			<h4>
				Образование и сертификаты
			</h4>
			<p>
				Российский Государственный Социальный Университет (РГСУ), факультет социального страхования, экономики и социологии труда
			</p>
			<ul>
				<li><span>3-кратный чемпион России по кикбоксингу и ушу-саньда</span></li>
				<li><span>Мастер спорта по кикбоксингу</span></li>
				<li><span>Кандидат в мастера спорта по боксу</span></li>
			</ul>
			<br><br>
			<h4>
				Фитнес-специализация
			</h4>
			<ul>
				<li><span>Боевые искууства</span></li>
				<li><span>Подготовка к соревнованиям</span></li>
			</ul>
			<p>
				Специалист по диетологии, занимаюсь с людьми различного возраста, составляю программы по снижению веса и набора мышечной массы, а так же поддержания тонуса и работоспособности мышц. Реабилитация после травм спины
			</p>
			<div class="container-full">
				<div class="row social-links">
					<div class="col-lg-4"><a href="<?= $trainer->vk_link ?>"><img src="/img/social/fitness/vk.jpg"><span><?= str_replace("http://", "", $trainer->vk_link) ?></span></a></div>
					<div class="col-lg-4"><a href="<?= $trainer->fb_link ?>"><img src="/img/social/fitness/fb.jpg"><span><?= str_replace("http://", "", $trainer->fb_link) ?></span></a></div>
					<div class="col-lg-4"><a href="<?= $trainer->inst_link ?>"><img src="/img/social/fitness/inst.jpg"><span><?= str_replace("http://", "", $trainer->inst_link) ?></span></a></div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-lg-12">
		<form class="trainer-form-element">
			<div class="wrapper">
				<h3>
					Персональный тренинг
				</h3>
				<p class="details">
					Закажите консультацию — мы позвоним вам<br>
					с выгодным предложением по тренировкам.
				</p>
				<div class="row">
					<div class="col-lg-12">
						<div class="form-group required error">
						<span class="title">
							Ваше имя
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
							<label for="phone">Телефон</label>
						</span>
							<input class="form-control" type="text" id="phone" placeholder="+7(_ _ _) _ _ _ - _ _ - _ _" />
							<div class="error">
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="form-group">
						<span class="title">
							<label for="email">Электронная почта</label>
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
				</div>
			</div>
		</form>
	</div>
</div>
