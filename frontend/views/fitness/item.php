<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/13/17
 * Time: 12:39 PM
 */

use frontend\models\data\Trainer;

/** $item Trainer */
?>
<section class="trainers" style="background-color: #eae4cf">
    <div class="content-wrapper">
        <div class="container container-90">
            <div class="row">
                <div class="col-lg-4">
                    <div class="trainer-card-element">
                        <img class="face" src="/img/fitness/trener1.jpg">
                        <h4 class="trainer-name">
                            <?php
                            /** @var $item Trainer **/
                            ?>
                            <?= $item->name ?>
                        </h4>
                        <div class="trainer-position">
                            <?= $item->position ?>
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
                                <div class="col-lg-4"><a href="<?= $item->vk_link ?>"><img src="/img/social/fitness/vk.jpg"><span><?= str_replace("http://", "", $item->vk_link) ?></span></a></div>
                                <div class="col-lg-4"><a href="<?= $item->fb_link ?>"><img src="/img/social/fitness/fb.jpg"><span><?= str_replace("http://", "", $item->fb_link) ?></span></a></div>
                                <div class="col-lg-4"><a href="<?= $item->inst_link ?>"><img src="/img/social/fitness/inst.jpg"><span><?= str_replace("http://", "", $item->inst_link) ?></span></a></div>
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
        </div>
    </div>
</section>