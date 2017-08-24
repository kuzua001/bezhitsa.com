<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 6/7/17
 * Time: 7:46 PM
 */

namespace frontend\widgets\section;

use frontend\models\pages\SectionParams;
use frontend\models\SectionItem;
use yii\base\Widget;

class Section extends Widget
{
    const TYPE_HOTEL_MAIN    = 'hotel_main';
    const TYPE_HOTEL_SERVICE = 'hotel_service';
    const TYPE_SLIDER_TABS   = 'slider_tabs';

    /**
     * @var SectionParams Параметры секции (объект любого унаследованного класса)
     */
    public $sectionParams;

    public function run()
    {
        switch ($this->sectionParams->getSectionType()) {
            case self::TYPE_HOTEL_MAIN:
                return $this->render('hotel/main');
            case self::TYPE_SLIDER_TABS:
                return $this->render('common/slider_tabs');

        }
    }
}