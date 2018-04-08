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
                            8 (4832) 40-00-01 - Гранд Отель<br>
                            8 (4832) 40-00-02 - Ресторан<br>
                            8 (4832) 40-00-03 - Фитнес<br>
                        </dd>
                    </dl>
                    <?php if ($page->pageParams->hasContactsDescription)  { ?>
                        <h3><?= $page->pageParams->contactsDescriptionTitle ?></h3>
                        <p>
                            <?= $page->pageParams->contactsDescriptionText ?>
                        </p>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</section>