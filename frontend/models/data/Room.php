<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/27/17
 * Time: 12:24 AM
 */

namespace frontend\models\data;

use common\models\Image;
use frontend\components\HasManySrcTrait;
use frontend\components\LanguageHelper;
use frontend\components\TranslatableTrait;
use yii\db\ActiveRecord;
use frontend\interfaces\models\HasUrl;

/**
 * Class Room
 * @property $persons_type integer
 * @property $bed_type     integer
 * @property $id           integer
 * @property $type_id      integer
 * @property $price_from   integer
 * @property $square       integer
 * @property $image_ids    string
 * @property $title        string
 * @property $text         string
 * @property $alias        string
 * @property $n            integer
 * @property $published    boolean
 * @package frontend\models
 */
class Room extends ActiveRecord implements HasUrl
{
    use TranslatableTrait {
        beforeSave as public traitBeforeSave;
    }

    use HasManySrcTrait;

    public function afterFind()
    {
        parent::afterFind();
        $this->loadTranslations();
    }

    protected function translateFields()
    {
        return [
            'title', 'text'
        ];
    }

    /**
     * Константы типов кроватей
     */
    const BED_TYPE_ONE     = 1;
    const BED_TYPE_TWO     = 2;
    const BED_TYPE_2ONE    = 3;
    const BED_TYPE_TWO_EXT = 4;

    /**
     * Доступные варианты с описанием и иконкой
     * @var array
     */
    private static $_bedTypes = [
        self::BED_TYPE_2ONE => [
            'icon'        => '',
            'icon_class'  => 'two-bed-two',
            'title'       => 'Две односпальных кровати'
        ],
        self::BED_TYPE_ONE => [
            'icon'        => '',
            'icon_class'  => 'one-bed',
            'title'       => 'Одна односпальная кровать'
        ],
        self::BED_TYPE_TWO => [
            'icon'        => '',
            'icon_class'  => 'two-bed',
            'title'       => 'Одна двуспальная кровать'
        ],
        self::BED_TYPE_TWO_EXT => [
            'icon'        => '',
            'icon_class'  => 'two-bed-ext',
            'title'       => 'Одна двуспальная кровать + доп.место'
        ],
    ];

    /**
     * Константы количества персон в номере
     */
    const PERSON_TYPE_ONE   = 1;
    const PERSON_TYPE_TWO   = 2;
    const PERSON_TYPE_THREE = 3;

    /**
     * Доступные варианты с описанием и иконкой
     * @var array
     */
    private static $_personTypes = [
        self::PERSON_TYPE_ONE => [
            'icon'        => '',
            'title'       => '1 гость',
            'icon_class'  => 'one-people',
        ],
        self::PERSON_TYPE_TWO => [
            'icon'        => '',
            'title'       => '2 гостя',
            'icon_class'  => 'two-people',
        ],
        self::PERSON_TYPE_THREE => [
            'icon'        => '',
            'title'       => '3 гостя',
            'icon_class'  => 'three-people',
        ]
    ];

    public function beforeSave($insert)
    {
        $this->image_ids = trim($this->image_ids, ',');
        return $this->traitBeforeSave($insert);
    }


    /**
     * Получить главное изображение номера
     * @return array|null|ActiveRecord|Image
     */
    public function getMainImage()
    {
        $images = $this->getImagesList();

        return !empty($images) ? $images[0] : Image::noImage();
    }

    /**
     * Получить все в виде массива данных удобного для слайдера
     * @return array
     */
    public function getSlides()
    {
        $slides = [];
        $images = $this->getImagesList();
        foreach ($images as $img) {
            $slides[] = [
                'image' => $img->getSrc(),
                'description' => $img->description
            ];
        }

        return $slides;
    }

    public function getUrl()
    {
        return LanguageHelper::getBaseUrl() . 'room/' . $this->alias;
    }

    /**
     * Возвращает класс иконки сколько людей в номере
     * @return mixed
     */
    public function getPersonIconClass()
    {
        return self::$_personTypes[$this->persons_type]['icon_class'];
    }

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
     * Возвращает класс для иконки скольки спальная кровать
     * @return mixed
     */
    public function getBedIconClass()
    {
        return self::$_bedTypes[$this->bed_type]['icon_class'];
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
            'image_ids',
            'title',
            'text',
            'alias',
            'tl_room_type',
            'n',
            'published'
        ];
    }

    public function scenarios()
    {
        return [
            'default' => ['id', 'url', 'action_id', 'title', 'text', 'image_ids', 'is_enabled', 'pages_id', 'domain_id', 'alias', 'tl_room_type', 'n', 'published']
        ];
    }
}