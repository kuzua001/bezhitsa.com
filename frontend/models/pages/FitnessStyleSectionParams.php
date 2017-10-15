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

class FitnessStyleSectionParams extends SectionParams
{

    protected $sectionType  = Section::TYPE_FITNESS_STYLE;
    protected $sectionClass = 'fitness-style';

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
     * @var $content string
     * @title Контент
     * @default Новое поколоение клубов премиум-класса
     * @type textarea
     */
    public $content;

    /**
     * @var $cardTitle string
     * @title Заголовок карточки
     * @default К вашим услугам
     * @type string
     */
    public $cardTitle;

    /**
     * @var $cardContent string
     * @title Контент карточки
     * @default Тренажерный зал
     * @type textarea
     */
    public $cardContent;
}