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

class LandingPageParams extends CmsPageParams
{

    /**
     * @var $sectionsParams (SectionParams)[]
     * @title Параметры секций
     * @type (BigSliderSectionParams|HotelMainSectionParams|HotelServiceSectionParams|ContactsSectionParams|SliderTabsSectionParams|AboutSectionParams|FitnessMainSectionParams|FitnessStyleSectionParams|TextPageParams|TrainersListSectionParams)[]
     */
    public $sectionsParams;


    /**
     * @var $hasContacts boolean
     * @title Показывать контактную информацию
     * @type checkbox
     */
    public $hasContacts;

    /**
     * @var $hasContactsDescription boolean
     * @title Показывать текст в контактной информации
     * @type checkbox
     */
    public $hasContactsDescription;

    /**
     * @var $contactsDescriptionTitle boolean
     * @title Доп.заголовок в контактной информации
     * @type string
     */
    public $contactsDescriptionTitle;

    /**
     * @var $contactsDescriptionText boolean
     * @title Доп.текст в контактной информации
     * @type string
     */
    public $contactsDescriptionText;

    public function __construct()
    {
        parent::__construct();
        $this->sectionsParams = [];
    }


    /**
     * возвращает параметры секции
     * @return mixed|SectionParams
     */
    public function getSectionsParams()
    {
        return $this->sectionsParams;
    }

    public function addSection(SectionParams $sectionParams)
    {
        $this->sectionsParams[] = $sectionParams;
    }

    public function emptySections() {
        $this->sectionsParams = [];
    }
}

