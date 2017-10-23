<?php
use frontend\widgets\section\Section;
use frontend\models\pages\ContactsSectionParams;
use yii\helpers\Html;

/** @var Section $widget */

$widget = $this->context;

/**
 * @var ContactsSectionParams $sectionParams
 */
$sectionParams = $widget->sectionParams;
$contactsItens = $sectionParams->contactsItems;
?>
<div class="row">
	<div class="col-lg-12 col-md-12 col-sm-12">
		<h2 class="centered-title-element black-text">
            <?= $sectionParams->title ?>
		</h2>
	</div>
</div>
<div class="contacts-wrapper">
	<div class="row">
        <?php foreach ($contactsItens as $i => $item) { ?>
            <?php
            /** @var $item \frontend\models\pages\ContactsItemParams */
            ?>
			<div class="col-lg-4 col-md-6 <?= $i != 0 ? ' hidden-sm hidden-xs' : ''?><?= $i == count($contactsItens) - 1 ? ' col-md-offset-3 col-lg-offset-0' : ''?>">
				<div class="contacts-card-element">
					<div class="logo">
						<img src="/img/logo-black-colored.png">
					</div>
					<h1 class="bezhitsa-title-element black-text">
						<span class="name">Bezhitsa</span><br>
						<span class="type"><?= Html::encode($item->headerTypePart) ?></span>
					</h1>
					<dl class="contacts-element black-text">
                        <?php if (!empty($item->phone1) ||
                            !empty($item->phone1)) { ?>
							<dt title="Телефон">
								<i class="phone"></i>
							</dt>
							<dd class="phones">
                                <?php if (!empty($item->phone1)) : ?><div><?= $item->phone1 ?></div><?php endif ?>
                                <?php if (!empty($item->phone1)) : ?><div><?= $item->phone1 ?></div><?php endif ?>
							</dd>
                        <?php } ?>
                        <?php if (!empty($item->email)) { ?>
							<dt title="Email">
								<i class="email"></i>
							</dt>
							<dd>
                                <?= $item->email ?>
							</dd>
                        <?php } ?>
                        <?php if (!empty($item->address)) { ?>
							<dt title="Адрес">
								<i class="address"></i>
							</dt>
							<dd>
                                <?= $item->address ?>
							</dd>
                        <?php } ?>
					</dl>
                    <?php if (!empty($item->workingHours)) { ?>
						<dl class="contacts-element black-text working-hours">
							<dt title="Часы работы">
								<i class="hours"></i>
							</dt>
							<dd>
                                <?= $item->workingHours ?>
							</dd>
						</dl>
                    <?php } ?>
				</div>
			</div>
        <?php } ?>
	</div>
</div>