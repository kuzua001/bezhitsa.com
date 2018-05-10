<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/30/17
 * Time: 9:10 AM
 */

namespace frontend\models\pages;

use frontend\models\CmsPageParams;
use frontend\models\ParamField;

class FitnessPageParams extends LandingPageParams
{

    /**
     * @var $showCustomSchedule bool
     * @title Показывать кастомное расписание
     * @type checkbox
     */
    public $showCustomSchedule;

    /**
     * @var $color string
     * @title Кастомный цвет страницы
     * @type color
     */
    public $color;

    /**
     * @var $customSchedule string
     * @title HTML-код кастомного расписания
     * @type textarea
     */
    public $customSchedule;

    /**
     * @var $showCustomActivities bool
     * @title показывать кастомные тренировки
     * @type checkbox
     */
    public $showCustomActivities;

    /**
     * @var $customActivities string
     * @title HTML-код кастомных тренировок
     * @type textarea
     */
    public $customActivities;
}

