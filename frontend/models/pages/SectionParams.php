<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/30/17
 * Time: 9:10 AM
 */

namespace frontend\models\pages;

use frontend\interfaces\models\NamedTypeInterface;
use frontend\models\PageParams;
use frontend\models\ParamField;
use frontend\widgets\section\Section;

class SectionParams extends PageParams implements NamedTypeInterface
{
    private static $typeNames = [
        Section::TYPE_HOTEL_MAIN             => 'Главная секция отеля',
        Section::TYPE_CONTACTS_PAGE          => 'Контактная информация',
        Section::TYPE_FITNESS_MAIN           => 'Главная секция фитнеса',
        Section::TYPE_FITNESS_SCHEDULE       => 'Секция фитнеса с раписанием',
        Section::TYPE_FITNESS_STYLE          => 'Секция фитнес - стиль жизни',
        Section::TYPE_HOTEL_SERVICE          => 'Секция отеля сервис',
        Section::TYPE_SLIDER_TABS            => 'Информационный слайдер',
        Section::TYPE_ABOUT_PAGE             => 'Об отеле/фитнесе/ресторане',
        Section::TYPE_TRAINERS_LIST          => 'Список тренеров',
        Section::TYPE_TEXT_PAGE              => 'Текстовая секция',
        Section::TYPE_BIG_SLIDER             => 'Большой слайдер',
        SliderItemParams::TYPE_SLIDE         => 'Слайд',
        SectionBgSizeParams::TYPE_SECTION_BG => 'Фон секции',
    ];

    public static function typeName($type)
    {
        return isset(self::$typeNames[$type]) ? self::$typeNames[$type] : '';
    }

    public function getTypeName($type)
    {
        return self::typeName($type);
    }

    public function __construct()
    {
        $this->sectionTypeName = $this->getTypeName($this->getSectionType());
        parent::__construct();
    }

    public function __wakeup()
    {
        $this->sectionTypeName = $this->getTypeName($this->getSectionType());
    }

    /**
     * @var mixed|string
     */
    protected $sectionTypeName;

    /**
     * @var $title
     * @title Заголовок секции
     * @separated
     * @tab [Параметры секции]
     * @type string
     */
    public $title;


    /**
     * @var $hasDetailButton
     * @title Показывать кнопку 'подробнее'
     * @tab [Параметры секции]
     * @type checkbox
     */
    public $hasDetailButton;

    /**
     * @var $isBgLarge
     * @title Фон крупный, на всю ширину
     * @tab [Параметры секции]
     * @type checkbox
     */
    public $isBgLarge;

    /**
     * @var $detailButtonIsColored
     * @title Кастомный цвет кнопки
     * @tab [Кнопка подробнее]
     * @type checkbox
     */
    public $detailButtonIsColored;

    /**
     * @var $hasDetailButton
     * @title Цвет фона кнопки в формате #fff
     * @tab [Кнопка подробнее]
     * @type color
     */
    public $detailButtonBgColor;


    /**
     * @var $detailButtonLink string
     * @title Ссылка по кнопке 'подробнее'
     * @tab [Кнопка подробнее]
     * @type string
     */
    public $detailButtonLink;

    /**
     * @var $detailButtonText string
     * @title Текст кнопки 'подробнее'
     * @tab [Кнопка подробнее]
     * @type string
     */
    public $detailButtonText;

    /**
     * @var $detailButtonIsBlack boolean
     * @title Кнопка должна быть черной
     * @tab [Кнопка подробнее]
     * @type checkbox
     */
    public $detailButtonIsBlack;


    /**
     * @var $sectionType
     * @title Тип секции
     * @type select
     */
    protected $sectionType;

    /**
     * Класс секции
     * @var $sectionClass
     */
    protected $sectionClass = '';


    /**
     * @var $bgItems SectionBgSizeParams[]
     * @title Параметры фона
     * @tab [Параметры секции]
     * @type (SectionBgSizeParams)[]
     */
    public $bgItems;

    /**
     * @var $bgColor string
     * @title цвет фона
     * @tab [Параметры секции]
     * @type color
     */
    public $bgColor;


    public function varyingField()
    {
        return 'sectionType';
    }


    /**
     * Возвращает тип секции
     * @return mixed
     */
    public function getSectionType()
    {
        return $this->sectionType;
    }

    /**
     * Возвращает класс секции
     * @return string
     */
    public function getSectionClass()
    {
        return $this->sectionClass;
    }
}