<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/bootstrap.css',
        'css/built/app.css',
        'https://fonts.googleapis.com/css?family=Open+Sans:600,300,400|Prata|Lora:400,700|Josefin+Sans|Cormorant+Garamond:400i'
    ];

    public $js = [
        /*'js/node_modules/core-js/client/shim.min.js',*/
        /* 'js/node_modules/zone.js/dist/zone.js', */
        /*'js/node_modules/reflect-metadata/Reflect.js',*/
        /*'js/node_modules/systemjs/dist/system.src.js',*/
        /*'js/systemjs.config.js',*/
//        'js/built/app.js',
        'js/built/index.js',
//         'js/app.js',
//        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAfNPNg4M7uT3PqOFIyGpHZx9f8jTqbKUg&callback=initMap'
    ];

    public $jsOptions = [
        'position' => \yii\web\View::POS_END,
    ];
}
