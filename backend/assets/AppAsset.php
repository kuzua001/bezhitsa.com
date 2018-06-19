<?php

namespace backend\assets;

use yii\web\AssetBundle;

/**
 * Main backend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $css = [
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    ];
    public $baseUrl = '@web';

    public $js = [
        'admin/dist/runtime.js',
        'admin/dist/polyfills.js',
        'admin/dist/styles.js',
        'admin/dist/scripts.js',
        'admin/dist/vendor.js',
        'admin/dist/main.js',
    ];

    public $jsOptions = [
        'position' => \yii\web\View::POS_END,
    ];
}
