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

    /**
     * @var $title1 string
     * @title Первый заголовок
     * @default МИРОВОГО КЛАССА
     * @type string
     */
    public $title1;

    /**
     * @var $title2 string
     * @title Второй заголовок
     * @default МИРОВОГО КЛАССА
     * @type string
     */
    public $title2;

    /**
     * @var $title3 string
     * @title Третий заголовок
     * @default МИРОВОГО КЛАССА
     * @type string
     */
    public $title3;

    /**
     * @var $title4 string
     * @title Четвертый заголовок
     * @default МИРОВОГО КЛАССА
     * @type string
     */
    public $title4;

    /**
     * @var $title5 string
     * @title Пятый заголовок
     * @default МИРОВОГО КЛАССА
     * @type string
     */
    public $title5;

    /**
     * @var $text1 string
     * @title Первый текст
     * @default МИРОВОГО КЛАССА
     * @type textarea
     */
    public $text1;

    /**
     * @var $text2 string
     * @title Второй текст
     * @default МИРОВОГО КЛАССА
     * @type textarea
     */
    public $text2;

    /**
     * @var $text3 string
     * @title Третий текст
     * @default МИРОВОГО КЛАССА
     * @type textarea
     */
    public $text3;

    /**
     * @var $text4 string
     * @title Четвертый текст
     * @default МИРОВОГО КЛАССА
     * @type textarea
     */
    public $text4;

    /**
     * @var $text5 string
     * @title Пятый текст
     * @default МИРОВОГО КЛАССА
     * @type textarea
     */
    public $text5;

    /**
     * @var $address
     * @title Адрес отеля
     * @default
     * @type textarea
     */
    public $address;

    /**
     * @var $phone
     * @title Телефон отеля
     * @default
     * @type string
     */
    public $phone;
}