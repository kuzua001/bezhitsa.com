<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/13/17
 * Time: 12:39 PM
 */
use frontend\models\data\Trainer;

/** @var $trainer Trainer **/
?>
<section class="trainers" style="background-color: #eae4cf">
    <div class="content-wrapper">
        <div class="container container-90">
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
                            <a href="<?= $trainer->getUrl() ?>">
								<button class="detail-button-element black-text">заказать тренинг</button>
							</a>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</section>