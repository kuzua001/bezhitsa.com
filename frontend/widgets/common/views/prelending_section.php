<?php
use frontend\widgets\common\PrelandingSection;
use yii\helpers\Html;

/** @var PrelandingSection $widget */

$widget = $this->context;
?>
<section class="events"  id="section3">
    <div class="content-wrapper">
        <div class="container container-90">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h2 class="centered-title-element black-text">
                        <?= $widget->title; ?>
                    </h2>
                </div>
            </div>
            <div class="row row-flex row-flex-desktop">
                <div class="col-lg-8 col-sm-12">
                    <div class="slider slider-element">
                        <ul class="slides">
                            <?php foreach ($widget->slideShowImages as $slide) { ?>
                                <li>
                                    <img src="/img/canteen.jpg">
                                    <div class="caption left-align">
                                        <h3 class="elegant-title-element small black-text">
                                            <span class="first">Европейская</span>
                                            <span class="second">Высокая кухня</span>
                                            <span class="third">незабываемая атмосфера</span>
                                        </h3>
                                        <div class="property-item-element">
                                            <i class="property-icon" style="background-image: url('/img/icons/clock.png'); width: 22px; height: 27px;"></i>
                                            <span class="property-description">12-24 ч. ежедневно</span>
                                        </div>
                                        <div class="property-item-element">
                                            <i class="property-icon" style="background-image: url('/img/icons/phone.png'); width: 22px; height: 27px;"></i>
                                            <span class="property-description">+7 (499) 678-01-41</span>
                                        </div>
                                    </div>
                                </li>
                            <?php  } ?>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <?= $widget->cardContent ?>
                </div>
            </div>
            <div class="row more-row">
                <div class="col col-sm-12 center">
                    <button class="detail-button-element black-text">узнать больше</button>
                </div>
            </div>
        </div>
    </div>
</section>