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

class HotelMainSectionParams extends SectionParams
{

    protected $sectionType  = Section::TYPE_HOTEL_MAIN;
    protected $sectionClass = 'main-hotel';
    /**
     * @var $mainHeaderTypePart string
     * @title Часть заголовка под логотипом (гранд отель, фитнес и т.д.)
     * @default гранд отель
     * @type string
     */
    public $mainHeaderTypePart;

    /**
     * @var $greetingHeader string
     * @title Заголовок приветствия
     * @default Добро пожаловать!
     * @type string
     */
    public $greetingHeader;

    /**
     * @var $greetingContent string
     * @title Текст приветствия
     * @default Получите удовольствие, выбрав восхитительную атмосферу премиум комплекса «Бежица».
     * @type textarea
     */
    public $greetingContent;

    /**
     * @var $sloganFirst string
     * @title Первая часть центрального заголовка
     * @default Ваш
     * @type string
     */
    public $sloganFirst;

    /**
     * @var $sloganSecond string
     * @title Вторая часть центрального заголовка
     * @default изысканный и комфортный отдых
     * @type string
     */
    public $sloganSecond;

    /**
     * @var $sloganThird string
     * @title Третья часть центрального заголовка2
     * @default МИРОВОГО КЛАССА
     * @type string
     */
    public $sloganThird;
}