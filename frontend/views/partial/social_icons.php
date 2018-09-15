<nav class="social">
    <?php use frontend\components\AppHelper;

    foreach($icons as $icon) {?>
        <?php
            $linkType = $icon['type'];
        ?>
        <a target="_blank" href="<?= $icon['link'] ?>">
            <img src="<?= AppHelper::getFooterIconSrc($linkType)?>">
        </a>
    <?php } ?>
</nav>