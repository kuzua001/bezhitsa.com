<?php

use \frontend\models\Page;

$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'params' => $params,
    'id' => 'app-frontend',
    'basePath' => dirname(__DIR__),
    'language' => 'en-US',
    'bootstrap' => ['log', 'DynamicRouting', 'assetsAutoCompress'],
    'controllerNamespace' => 'frontend\controllers',
    'modules' => [
        'DynamicRouting' => 'frontend\components\DynamicRouting',
    ],
    'components' => [
        'assetsAutoCompress' => require_once (__DIR__ . '/autocompress.php'),
        'request' => [
            'csrfParam' => '_csrf-frontend',
            'baseUrl' => '',
        ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-frontend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the frontend
            'name' => 'advanced-cms',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],

        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                'test' => 'site/test',
            ],
        ],
        'i18n' => [
            'translations' => [
                'app/*' => [
                    'class' => 'yii\i18n\PhpMessageSource',
                ],
            ],
        ],
    ],
];
