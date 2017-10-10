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

class BookingPageParams extends CmsPageParams
{
     /**
     * @var $smth boolean
     * @title Что то тестовое
     * @type checkbox
     */
    public $smth;
}