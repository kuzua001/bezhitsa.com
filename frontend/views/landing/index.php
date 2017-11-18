<?php

use frontend\widgets\section\Section;
use frontend\models\SectionItem;
use frontend\models\pages\LandingPage;

/** @var LandingPage $page */
?>
<?php if (is_array($page->pageParams->getSectionsParams())) { ?>
    <?php foreach ($page->pageParams->getSectionsParams() as $sectionParams) { ?>
        <?= Section::widget([
            'sectionParams' => $sectionParams,
			'customView'  => $this
        ]) ?>
    <?php } ?>
<?php } ?>
<?php if ($page->pageParams->hasContacts) { ?>
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
<?php } ?>
