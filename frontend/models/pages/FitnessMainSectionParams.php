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

class FitnessMainSectionParams extends HotelMainSectionParams
{
    protected $sectionType  = Section::TYPE_FITNESS_MAIN;
    protected $sectionClass = 'fitness-main';
}