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
    const TYPE_HOTEL_MAIN       = 'hotel_main';
    const TYPE_CONTACTS_PAGE    = 'hotel_contacts';
    const TYPE_FITNESS_MAIN     = 'fitness_main';
    const TYPE_FITNESS_SCHEDULE = 'fitness_schedule';
    const TYPE_FITNESS_STYLE    = 'fitness_style';
    const TYPE_HOTEL_SERVICE    = 'hotel_service';
    const TYPE_SLIDER_TABS      = 'slider_tabs';
    const TYPE_TEXT_PAGE        = 'text_page';
    const TYPE_ABOUT_PAGE       = 'about_page';
    const TYPE_BIG_SLIDER       = 'big_slider';
    const TYPE_TRAINERS_LIST    = 'fitness_trainers';

    /**
     * @var SectionParams Параметры секции (объект любого унаследованного класса)
     */
    public $sectionParams;

    public $customView;

    public function run()
    {
        $html = '';

        if ($this->sectionParams->getSectionType() == self::TYPE_HOTEL_MAIN) {
            //$html .= $this->render('section/booking');
        }
                
        $html .= $this->render('section/top');

        switch ($this->sectionParams->getSectionType()) {
            case self::TYPE_HOTEL_MAIN:
                $html .= $this->render('hotel/main');
                break;
            case self::TYPE_CONTACTS_PAGE:
                $html .= $this->render('common/contacts_page');
                break;
            case self::TYPE_HOTEL_SERVICE:
                $html .= $this->render('hotel/service');
                break;
            case self::TYPE_FITNESS_MAIN:
                $html .= $this->render('fitness/main');
                break;
            case self::TYPE_FITNESS_STYLE:
                $html .= $this->render('fitness/style');
                break;
            case self::TYPE_TRAINERS_LIST:
                $html .= $this->render('fitness/trainers');
                break;
            case self::TYPE_SLIDER_TABS:
                $html .= $this->render('common/slider_tabs');
                break;
            case self::TYPE_TEXT_PAGE:
                $html .= $this->render('common/text_page');
                break;
            case self::TYPE_ABOUT_PAGE:
                $html .= $this->render('common/about_page');
                break;
            case self::TYPE_BIG_SLIDER:
                $html .= $this->render('common/big_slider');
                break;
        }

        $html .= $this->render('section/bottom');

        return $html;
    }
}
