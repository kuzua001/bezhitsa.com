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
use frontend\widgets\section\Section;

class SliderTabsSectionParams extends SectionParams
{

    protected $sectionType = Section::TYPE_SLIDER_TABS;

    /**
     * @var $detailButtonText string
     * @title Текст кнопки подробнее
     * @default узнать больше
     * @type string
     */
    public $detailButtonText;


    /**
     * @var $isRight
     * @title Картинка справа
     * @default
     * @type checkbox
     */
    public $isRight;


    /**
     * @var $slides (SliderItemParams)[]
     * @title Слайды
     * @type (SliderItemParams)[]
     */
    public $slides;

    /**
     * @var $bgColor string
     * @title Цвет в формате #ffffff
     * @type color
     */
    public $bgColor;
}