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
        '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
        'css/built/app.css',
        'https://fonts.googleapis.com/css?family=Open+Sans:800,600,400,300|Prata|Lora:400,700|Josefin+Sans|Cormorant+Garamond:400i'
    ];

    public $js = [];

    public function __construct(array $config = [])
    {
        parent::__construct($config);
        $this->js[] = 'js/built/index.js';
    }

    public $jsOptions = [
        'position' => \yii\web\View::POS_END,
    ];
}
