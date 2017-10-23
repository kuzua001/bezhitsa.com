<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/25/17
 * Time: 1:17 AM
 */

namespace frontend\models\pages;


use frontend\models\PageParams;


class ContactsItemParams extends PageParams
{
    /**
     * @var $headerTypePart string
     * @title Часть заголовка под логотипом (гранд отель, фитнес и т.д.)
     * @default гранд отель
     * @type string
     */
    public $headerTypePart;

    /**
     * @var $phone1
     * @title Телефон #1
     * @type string
     */
    public $phone1;

    /**
     * @var $phone1
     * @title Телефон #2
     * @type string
     */
    public $phone2;

    /**
     * @var $email
     * @title Email
     * @type string
     */
    public $email;

    /**
     * @var $address
     * @title Адрес
     * @type string
     */
    public $address;

    /**
     * @var $workingHours
     * @title Часы работы
     * @type string
     */
    public $workingHours;


    protected $contactsItemType = 'contacts_item';

    public function varyingField()
    {
        return 'contactsItemType';
    }
}