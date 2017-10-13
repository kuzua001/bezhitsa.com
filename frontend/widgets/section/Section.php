<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 6/7/17
 * Time: 7:46 PM
 */

namespace frontend\widgets\section;

use frontend\assets\AppAsset;
use frontend\models\pages\SectionParams;
use frontend\models\SectionItem;
use yii\base\Widget;
use frontend\assets\BootstrapAsset;

class Section extends Widget
{
    const TYPE_HOTEL_MAIN    = 'hotel_main';
    const TYPE_FITNESS_MAIN  = 'fitness_main';
    const TYPE_FITNESS_STYLE = 'fitness_style';
    const TYPE_HOTEL_SERVICE = 'hotel_service';
    const TYPE_SLIDER_TABS   = 'slider_tabs';
    const TYPE_TEXT_PAGE     = 'text_page';
    const TYPE_ABOUT_PAGE    = 'about_page';

    /**
     * @var SectionParams Параметры секции (объект любого унаследованного класса)
     */
    public $sectionParams;

    public $customView;

    public function run()
    {
        switch ($this->sectionParams->getSectionType()) {
            case self::TYPE_HOTEL_MAIN:
                return $this->render('hotel/main');
            case self::TYPE_FITNESS_MAIN:
                return $this->render('fitness/main');
            case self::TYPE_FITNESS_STYLE:
                return $this->render('fitness/style');
            case self::TYPE_SLIDER_TABS:
                return $this->render('common/slider_tabs');
            case self::TYPE_TEXT_PAGE:
                return $this->render('common/text_page');
            case self::TYPE_ABOUT_PAGE:
                BootstrapAsset::register($this->customView);
                //AppAsset::re
                return $this->render('common/about_page');
                break;
        }
    }
}