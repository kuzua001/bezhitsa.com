<?php

use frontend\components\LanguageHelper;
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
    <?php if (($lang = LanguageHelper::getCurrentLanguage()) === LanguageHelper::LANG_RU) { ?>
        <?= $this->render("//partial/contacts_ru") ?>
    <?php } else if ($lang === LanguageHelper::LANG_EN) { ?>
        <?= $this->render("//partial/contacts_en") ?>
    <?php } else { ?>
        <?= $this->render("//partial/contacts") ?>
    <?php } ?>
<?php } ?>
