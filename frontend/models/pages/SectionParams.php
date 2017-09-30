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
     * @type string
     */
    public $title;

    /**
     * @var $hasDetailButton
     * @title Показывать кнопку 'подробнее'
     * @default
     * @type checkbox
     */
    public $hasDetailButton;

    /**
     * @var $detailButtonIsColored
     * @title Кастомный цвет кнопки
     * @default
     * @type checkbox
     */
    public $detailButtonIsColored;

    /**
     * @var $hasDetailButton
     * @title Цвет фона кнопки в формате #fff
     * @default
     * @type color
     */
    public $detailButtonBgColor;


    /**
     * @var $detailButtonLink string
     * @title Ссылка по кнопке 'подробнее'
     * @default
     * @type string
     */
    public $detailButtonLink;

    /**
     * @var $detailButtonText string
     * @title Текст кнопки 'подробнее'
     * @default
     * @type string
     */
    public $detailButtonText;

    /**
     * @var $detailButtonIsBlack boolean
     * @title Кнопка должна быть черной
     * @default
     * @type checkbox
     */
    public $detailButtonIsBlack;


    /**
     * @var $sectionType
     * @title Тип секции
     * @type select
     */
    protected $sectionType;

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
}