<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/27/17
 * Time: 12:24 AM
 */

namespace frontend\models;

use yii\db\ActiveRecord;

/**
 * Class Room
 * @property $persons_type integer
 * @property $bed_type     integer
 * @property $id           integer
 * @property $type_id      integer
 * @property $price_from   integer
 * @property $square       integer
 * @property $images_id    integer
 * @property $title        string
 * @property $text         string
 * @package frontend\models
 */
class Room extends ActiveRecord
{
    /**
     * Константы типов кроватей
     */
    const BED_TYPE_ONE = 1;
    const BED_TYPE_TWO = 2;
    const BED_TYPE_2ONE = 3;

    /**
     * Доступные варианты с описанием и иконкой
     * @var array
     */
    private static $_bedTypes = [
        self::BED_TYPE_2ONE => [
            'icon'  => '',
            'title' => 'Две односпальных кровати'
        ],
        self::BED_TYPE_ONE => [
            'icon'  => '',
            'title' => 'Одна односпальная кровать'
        ],
        self::BED_TYPE_TWO => [
            'icon'  => '',
            'title' => 'Одна двуспальная кровать'
        ],
    ];

    /**
     * Константы количества персон в номере
     */
    const PERSON_TYPE_ONE = 1;
    const PERSON_TYPE_TWO = 1;

    /**
     * Доступные варианты с описанием и иконкой
     * @var array
     */
    private static $_personTypes = [
        self::PERSON_TYPE_ONE => [
            'icon'  => '',
            'title' => '1 гость'
        ],
        self::PERSON_TYPE_TWO => [
            'icon'  => '',
            'title' => '2 гостя'
        ]
    ];

    /**
     * Возвращает url иконки сколько людей в номере
     * @return mixed
     */
    public function getPersonIconURL()
    {
        return self::$_personTypes[$this->persons_type]['icon'];
    }

    /**
     * Возвращает url иконки скольки спальная кровать
     * @return mixed
     */
    public function getBedIconURL()
    {
        return self::$_bedTypes[$this->bed_type]['icon'];
    }

    /**
     * Возвращает надпись сколько людей в номере
     * @return mixed
     */
    public function getPersonTitle()
    {
        return self::$_personTypes[$this->persons_type]['title'];
    }

    /**
     * Возвращает заголовок скольки спальная кровать
     * @return mixed
     */
    public function getBedTitle()
    {
        return self::$_bedTypes[$this->bed_type]['title'];
    }

    public function fields()
    {
        return [
            'id',
            'type_id',
            'price_from',
            'square',
            'bed_type',
            'persons_type',
            'images_id',
            'title',
            'text'
        ];
    }

    public function scenarios()
    {
        return [
            'default' => ['id', 'url', 'action_id', 'name', 'is_enabled', 'pages_id', 'domain_id']
        ];
    }
}