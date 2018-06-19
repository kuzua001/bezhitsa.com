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
     * @tab [Содержимое блока]
     */
    public $mainHeaderTypePart;

    /**
     * @var $greetingHeader string
     * @title Заголовок приветствия
     * @default Добро пожаловать!
     * @type string
     * @tab [Содержимое блока]
     */
    public $greetingHeader;

    /**
     * @var $greetingContent string
     * @title Текст приветствия
     * @default Получите удовольствие, выбрав восхитительную атмосферу премиум комплекса «Бежица».
     * @tab [Содержимое блока]
     * @type textarea
     */
    public $greetingContent;

    /**
     * @var $sloganFirst string
     * @title Первая часть центрального заголовка
     * @default Ваш
     * @type string
     * @tab [Содержимое блока]
     */
    public $sloganFirst;

    /**
     * @var $sloganSecond string
     * @title Вторая часть центрального заголовка
     * @default изысканный и комфортный отдых
     * @type string
     * @tab [Содержимое блока]
     */
    public $sloganSecond;

    /**
     * @var $sloganThird string
     * @title Третья часть центрального заголовка2
     * @default МИРОВОГО КЛАССА
     * @type string
     * @tab [Содержимое блока]
     */
    public $sloganThird;

    /**
     * @var $title1 string
     * @title Первый заголовок
     * @default МИРОВОГО КЛАССА
     * @type string
     * @tab [Содержимое блока]
     */
    public $title1;

    /**
     * @var $title2 string
     * @title Второй заголовок
     * @default МИРОВОГО КЛАССА
     * @type string
     * @tab [Содержимое блока]
     */
    public $title2;

    /**
     * @var $title3 string
     * @title Третий заголовок
     * @default МИРОВОГО КЛАССА
     * @type string
     * @tab [Содержимое блока]
     */
    public $title3;

    /**
     * @var $title4 string
     * @title Четвертый заголовок
     * @default МИРОВОГО КЛАССА
     * @type string
     * @tab [Содержимое блока]
     */
    public $title4;

    /**
     * @var $title5 string
     * @title Пятый заголовок
     * @default МИРОВОГО КЛАССА
     * @type string
     * @tab [Содержимое блока]
     */
    public $title5;

    /**
     * @var $text1 string
     * @title Первый текст
     * @default МИРОВОГО КЛАССА
     * @type textarea
     * @tab [Содержимое блока]
     */
    public $text1;

    /**
     * @var $text2 string
     * @title Второй текст
     * @default МИРОВОГО КЛАССА
     * @type textarea
     * @tab [Содержимое блока]
     */
    public $text2;

    /**
     * @var $text3 string
     * @title Третий текст
     * @default МИРОВОГО КЛАССА
     * @type textarea
     * @tab [Содержимое блока]
     */
    public $text3;

    /**
     * @var $text4 string
     * @title Четвертый текст
     * @default МИРОВОГО КЛАССА
     * @type textarea
     * @tab [Содержимое блока]
     */
    public $text4;

    /**
     * @var $text5 string
     * @title Пятый текст
     * @default МИРОВОГО КЛАССА
     * @type textarea
     * @tab [Содержимое блока]
     */
    public $text5;

    /**
     * @var $address
     * @title Адрес отеля
     * @default
     * @type textarea
     * @tab [Содержимое блока]
     */
    public $address;

    /**
     * @var $phone
     * @title Телефон отеля
     * @default
     * @type string
     * @tab [Содержимое блока]
     */
    public $phone;
}