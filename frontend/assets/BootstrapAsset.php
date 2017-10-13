<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class BootstrapAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = ['css/bootstrap.css'];

    public $js = [];

    public $jsOptions = [
        'position' => \yii\web\View::POS_END,
    ];
}
