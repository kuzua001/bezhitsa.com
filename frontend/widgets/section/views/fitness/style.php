<?php
use frontend\widgets\section\Section;
use frontend\models\pages\FitnessStyleSectionParams;
use yii\helpers\Html;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var FitnessStyleSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
?>
<section class="fitness-style">
    <div class="content-wrapper">
        <img class="bg large" src="/img/backgrounds/style-fitness-bg.jpg">
        <div class="container container-90">
            <div class="row clear">
                <div class="col l6 s12 push-l6">
                    <div class="right-content-block-element">
                        <h2 class="elegant-title-element">
                            <span class="first">Новый</span>
                            <span class="second">фитнес-клуб</span>
                            <span class="third tight">новый стиль жизни</span>
                        </h2>
                        <p>
                            Новое поколение клубов премиум-класса
                        </p>
                        <p>
                            Ультрасовременный клуб, сочетающий в&nbsp;себе уникальный дизайн, удобную инфраструктуру и&nbsp;безупречный сервис.
                            <br>
                        </p>
                        <p>
                            Бежица - Это красивый спорт
                        </p>
                        <p>
                            Занятия фитнесом — это не просто тренировки для поддержания формы.
                            Это стиль жизни, стремление быть лучше.
                            Поэтому мы концентрируемся не столько на физических параметрах, сколько на получении удовольствия от тренировок.
                            Новые фитнес-технологии позволяют по-новому взглянуть на достижение целей, а инфраструктура спортклуба — полезно организовать время.
                        </p>
                        <div class="card-element">
                            <header>
                                К вашим услугам
                            </header>
                            <section class="content">
                                <p>
                                    Тренажasasерный зал, оснащенный современными спортивными тренажерами;
                                    Кардиоasas-тренажеры Intenza;
                                    Группоasasвые программы (пилатес, йога, танцы);
                                    Бассейasasн с зонами для отдыха и релаксации;
                                    Персонasasальный тренинг;
                                    Фитнесasas бар со спортивным питанием и коктейлями;
                                    Бесплаasasтный паркинг.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
