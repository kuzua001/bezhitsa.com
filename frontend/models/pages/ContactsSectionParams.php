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

class ContactsSectionParams extends SectionParams
{
    protected $sectionType  = Section::TYPE_CONTACTS_PAGE;
    protected $sectionClass = 'contacts';

    /**
     * @var $contactsItems;
     * @title Списки контактной информации
     * @itemTitleKey headerTypePart
     * @type (ContactsItemParams)[]
     */
    public $contactsItems;
}