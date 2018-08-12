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
    const TYPE_SLIDES = 'slides';


    protected $sectionType  = Section::TYPE_SLIDER_TABS;
    protected $sectionClass = 'events';

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
     * @itemTitleKey tabTitle
     * @type (SliderItemParams)[]
     */
    public $slides;

    /**
     * @var $bgColor string
     * @title Общий цвет секции
     * @type color
     */
    public $bgColor;
}