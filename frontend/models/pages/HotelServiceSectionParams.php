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

class HotelServiceSectionParams extends SectionParams
{

    protected $sectionType = Section::TYPE_HOTEL_SERVICE;
    protected $sectionClass = 'service';

    /**
     * @var $block1Title string
     * @title Заголовок первого блока
     * @default
     * @type string
     */
    public $block1Title;

    /**
     * @var $block1Content string
     * @title Контент первого блока
     * @default
     * @type textarea
     */
    public $block1Content;

    /**
     * @var $block2Title string
     * @title Заголовок второго блока
     * @default
     * @type string
     */
    public $block2Title;

    /**
     * @var $block2Content string
     * @title Контент второго блока
     * @default
     * @type textarea
     */
    public $block2Content;

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
     * @type text
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
     * @title Третья часть центрального заголовка
     * @default МИРОВОГО КЛАССА
     * @type string
     */
    public $sloganThird;

    /**
     * @var $whyContent string
     * @title Почему стоит бронировать у нас?
     * @default 1
     * @type textarea
     */
    public $whyContent;

    /**
     * @var $infoContent string
     * @title Сведения об отеле
     * @default 1
     * @type textarea
     */
    public $infoContent;

    /**
     * @var $descriptionContent string
     * @title Описание отеля
     * @default 1
     * @type textarea
     */
    public $descriptionContent;
}
