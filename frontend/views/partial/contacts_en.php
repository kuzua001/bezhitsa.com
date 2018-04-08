<section class="map">
    <div class="content-wrapper">
        <h2 class="centered-title-element black-text">How to get to the hotel &laquo;Bezhitsa&raquo;</h2>
    </div>
    <div class="map-element">
        <div class="map"></div>
        <div class="contact-info content-wrapper">
            <div class="container container-90">
                <div class="wrapper">
                    <h3>Contact information</h3>
                    <dl class="contacts-element">
                        <dt title="Адрес">
                            <i class="address"></i>
                        </dt>
                        <dd>
                            Klintsovskaya, 41,<br>
                            Bryansk<br>
                            Russian Federation<br>
                        </dd>
                        <dt title="Телефон">
                            <i class="phone"></i>
                        </dt>
                        <dd>
                            8 (4832) 40-00-01 - Grand Hotel<br>
                            8 (4832) 40-00-02 - Restaurant<br>
                            8 (4832) 40-00-03 - Fitness<br>
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