<nav class="social">
    <?php use frontend\components\AppHelper;

    foreach(AppHelper::getAvailableLinkTypes() as $linkType) { ?>
        <?php if (($footerLink = AppHelper::getFooterLink($linkType)) !== null) { ?>
            <a target="_blank" href="<?= $footerLink ?>">
                <img src="<?= AppHelper::getFooterIconSrc($linkType)?>">
            </a>
        <?php } ?>
    <?php } ?>
</nav>