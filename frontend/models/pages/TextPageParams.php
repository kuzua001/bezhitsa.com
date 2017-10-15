<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/29/17
 * Time: 2:39 PM
 */

namespace frontend\models\pages;

use frontend\models\pages\SectionParams;
use frontend\widgets\section\Section;

class TextPageParams extends SectionParams
{

    protected $sectionType  = Section::TYPE_TEXT_PAGE;
    protected $sectionClass = 'text';

    /**
     * @var $bgColor string
     * @title Цвет в формате #ffffff
     * @type color
     */
    public $bgColor;


    /**
     * @var $content
     * @title Контент страницы
     * @type textarea
     */
    public $content;
}