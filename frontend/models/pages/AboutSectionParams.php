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

class AboutSectionParams extends SliderTabsSectionParams
{
    protected $sectionType  = Section::TYPE_ABOUT_PAGE;
    protected $sectionClass = 'booking';

    /**
     * @var $leftHTML
     * @type textarea
     * @title Текст в блоке слева
     */
    public $leftHTML;

    /**
     * @var $cardHTML
     * @type textarea
     * @title HTML-код карточки (чуточку с версткой, если надо)
     */
    public $cardHTML;
}