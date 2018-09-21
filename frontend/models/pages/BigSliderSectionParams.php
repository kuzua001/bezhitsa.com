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

class BigSliderSectionParams extends SliderTabsSectionParams
{
    protected $sectionType  = Section::TYPE_BIG_SLIDER;
    protected $sectionClass = 'big-slider'; //wtf???

    /**
     * @var $title
     * @title Заголовок (если нет - пустой)
     * @default
     * @type string
     */
    public $title;
}