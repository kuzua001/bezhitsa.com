<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/13/17
 * Time: 12:39 PM
 */

use frontend\components\LanguageHelper;
use frontend\models\data\Trainer;

/** @var $trainer Trainer **/
?>
<section class="trainers" style="background-color: #eae4cf">
    <div class="content-wrapper">
        <div class="container container-90">
            <div class="row">
                <?php foreach($trainers as $trainer) { ?>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-xs1-12">
                        <div class="trainer-card-element preview">
							<a href="<?= $trainer->getUrl() ?>">
								<img class="face" src="<?= $trainer->getSrc() ?>">
								<h4 class="trainer-name">
									<?php
									/** @var $trainer Trainer **/
									?>
									<?= $trainer->name ?>
								</h4>
								<div class="trainer-position<?= (LanguageHelper::getCurrentLanguage() === LanguageHelper::LANG_RU ? $trainer->two_lines_position : $trainer->two_lines_position_en) ? ' two-lines' : ''?>" >
									<?= $trainer->position ?>
								</div>
								<button class="detail-button-element black-text"><?= Yii::t('app/fitness', 'заказать тренинг')?></button>
							</a>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</section>