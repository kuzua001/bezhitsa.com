<nav class="social">
    <?php use frontend\components\AppHelper;

    foreach($icons as $icon) {?>
        <?php
            $linkType = $icon['type'];
        ?>
        <?php if (($footerLink = AppHelper::getFooterLink($linkType)) !== null) { ?>
            <a target="_blank" href="<?= $icon['link'] ?>">
                <img src="<?= AppHelper::getFooterIconSrc($linkType)?>">
            </a>
        <?php } ?>
    <?php } ?>
</nav>