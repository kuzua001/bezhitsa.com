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
        'mailer' => [
            'class' => \yii\swiftmailer\Mailer::class,
            'useFileTransport' => false,
            'transport' => [
                'class' => 'Swift_SmtpTransport',
                'host' => 'smtp.yandex.ru',
                'username' => 'testfit@bezhitsa.com',
                'password' => 'wr8GpdH3uc',
                'port' => '465',
                'encryption' => 'ssl',
            ],
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
            'errorAction' => 'landing/error-handler',
        ],

        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                'fitness/ajax/create-order' => 'ajax/create-order',
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
