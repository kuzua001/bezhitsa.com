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
     * @var $showBookingRules boolean
     * @title Показывать ли правила бронирования
     * @type checkbox
     */
    public $showBookingRules;

    /**
     * @var $bookingRulesText textarea
     * @title Показывать ли правила бронирования
     * @type checkbox
     */
    public $bookingRulesText;


}