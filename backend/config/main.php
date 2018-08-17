<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'app-backend',
    'basePath' => dirname(__DIR__),
    'controllerNamespace' => 'backend\controllers',
    'bootstrap' => ['log'],
    'modules' => [],
    'components' => [
        'request' => [
            'csrfParam' => '_csrf-backend',
            'baseUrl' => '/',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ]
        ],
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-backend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the backend
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
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => [
                        'users'      => 'api/user',
                        'texts'      => 'api/text',
                        'page'       => 'api/page',
                        'domain'     => 'api/domain',
                        'trainer'    => 'api/trainer',
                        'room'       => 'api/room',
                        'images'     => 'api/images',
                        'imageTypes' => 'api/image-types',
                        'pageFields' => 'api/page-fields',
                        'settings'   => 'api/settings',
                        'actions'    => 'api/actions',
                        'pageTypes'  => 'api/page-types',
                    ],
                    'prefix' => 'api'
                ],
                'api/files' => 'api/files',
                'reorder'   => 'api/reorder',
                [
                    'pattern' => 'page/edit/<pageId:\d+>',
                    'route' => 'dynamic/page-edit',
                ],
            ],
        ],
    ],
    'params' => $params,
];
