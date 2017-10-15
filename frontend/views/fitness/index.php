<?php
use frontend\components\AppHelper;
use frontend\widgets\common\MainFitnessSection;
use frontend\widgets\common\StyleFitnessSection;
?>
<script type="text/javascript">
	var __cs = __cs || [];
	__cs.push(["setCsAccount", "cMppfrgKvBqygQv2OcrBmHXGGyui6gOi"]);
</script>
<script type="text/javascript" async src="//app.comagic.ru/static/cs.min.js"></script>
<?php

echo MainFitnessSection::widget([
    'contactsList' => [
        [
            'class' => 'address',
            'title' => 'Адрес',
            'value' =>
                'Клинцовская, 41,<br>
                Брянск<br>
                Российская Федерация<br>',
        ],
        [
            'class' => 'phone',
            'title' => 'Телефон',
            'value' => '8(4832)40-00-00',
        ],
    ],
    'mainSloganFirst' => 'СКОРО ОТКРЫТИЕ<br><br>',
    'mainSloganSecond' => 'Специальные цены<br>на клубные карты',
    'mainSloganThird' => 'до открытия',
]);

echo StyleFitnessSection::widget([]);
?>
<section class="fitness-gym"  id="section4">
    <div class="content-wrapper">
        <div class="container container-90">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h2 class="centered-title-element black-text">
                        Кардио зона и тренажерный зал
                    </h2>
                </div>
            </div>
            <div class="row row-flex row-flex-desktop">
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="card-element">
                        <header class="pale">
                            Тренажерный зал
                        </header>
                        <section class="content">
                            <p>
								Современный фитнес-клуб в центре города, ориентированный на тех, кому дорого и здоровье и время.
								Мы предлагаем стратегический подход к спорту: каждый наш специалист сделает все, чтобы вы достигли не просто кратковременных результатов, а улучшили образ жизни в целом.
                            </p>
                        </section>
                        <header class="pale">
                            Соверемнное оборудование
                        </header>
                        <section class="content">
                            <p>
								Новые фитнес-технологии позволяют по-новому взглянуть на достижение целей, а инфраструктура спортклуба — полезно организовать время.
                            </p>
                        </section>
                    </div>
                </div>
                <div class="col-lg-8  col-md-12 col-sm-12">
                    <div class="slider-element one-slide">
                        <img src="/img/shutterstock/kardio.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="fitness-spa"  id="section4">
    <div class="content-wrapper">
        <div class="container container-90">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h2 class="centered-title-element black-text">
                        Бассейн с зонами релаксации
                    </h2>
                </div>
            </div>
            <div class="row row-flex row-flex-desktop reverse-order">
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="card-element">
                        <header class="pale">
                            Бассейн
                        </header>
                        <section class="content">
                            <p>
								Бассейн оснащен новейшей системой очистки Silvertronix без использования хлора.
								Безупречное состояние воды обеспечивается за счет метода многоступенчатой фильтрации и насыщения ионами серебра и меди.
                            </p>
                        </section>
                    </div>
                </div>
                <div class="col-lg-8  col-md-12 col-sm-12">
                    <div class="slider-element one-slide">
                        <img src="/img/shutterstock/spa.jpg">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="map">
    <div class="content-wrapper">
        <h2 class="centered-title-element black-text">Как добраться</h2>
    </div>
    <div class="map-element">
        <div class="map"></div>
        <div class="contact-info content-wrapper">
            <div class="container container-90">
                <div class="wrapper">
                    <h3>Контактная информация</h3>
                    <dl class="contacts-element">
                        <dt title="Адрес">
                            <i class="address"></i>
                        </dt>
                        <dd>
                            Клинцовская, 41,<br>
                            Брянск<br>
                            Российская Федерация<br>
                        </dd>
                        <dt title="Телефон">
                            <i class="phone"></i>
                        </dt>
                        <dd>
							8(4832)40-00-00
                        </dd>
                    </dl>
                    <h3>Расположение и транспорт</h3>
                    <p>
						Расстояние от отеля до ближайшего аэропорта - 14км, такси стоит 1000 рублей и довезет вас до отеля всего за пол часа.
					</p>
                </div>
            </div>
        </div>
    </div>
</section>
