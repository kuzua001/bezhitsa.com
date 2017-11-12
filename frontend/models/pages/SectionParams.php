<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/30/17
 * Time: 9:10 AM
 */

namespace frontend\models\pages;

use frontend\models\PageParams;
use frontend\models\ParamField;

class SectionParams extends PageParams
{
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