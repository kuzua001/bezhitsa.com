<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/25/17
 * Time: 1:17 AM
 */

namespace frontend\models\pages;

use frontend\models\PageParams;


class SliderItemParams extends PageParams
{
    /**
     * @var $tabTitle string
     * @title Заголовок таба
     * @default Заголово
     * @type string
     */
    public $tabTitle;


    /**
     * @var $tabContent string
     * @title Контент таба
     * @default Текст
     * @type textarea
     */
    public $tabContent;


    /**
     * @var $image string
     * @title Изображение
     * @default
     * @type image
     */
    public $image;


    /**
     * @var $hasCard boolean
     * @title Показывать карточку
     * @default
     * @separated
     * @type checkbox
     */
    public $hasCard;

    /**
     * @var $cardTitleFirst string
     * @title Первая часть заголовка карточки
     * @default
     * @type string
     */
    public $cardTitleFirst;


    /**
     * @var $cardTitleSecond string
     * @title вторая часть заголовка карточки
     * @default
     * @type string
     */
    public $cardTitleSecond;


    /**
     * @var $cardTitleThird string
     * @title Третья часть заголовка карточки
     * @default
     * @type string
     */
    public $cardTitleThird;

    const TYPE_SLIDE = 'simple_slide';

    protected $sliderItemType = self::TYPE_SLIDE;

    public function varyingField()
    {
        return 'sliderItemType';
    }
}