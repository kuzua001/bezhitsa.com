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
    public $css = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'];

    public $js = [];

    public $jsOptions = [
        'position' => \yii\web\View::POS_END,
    ];
}
