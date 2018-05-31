<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/27/17
 * Time: 6:38 PM
 */

namespace frontend\models;


class CmsPageParams extends PageParams
{
    /**
     * @var $metaTitle string
     * @title Title (SEO)
     * @type string
     */
    public $metaTitle;

    /**
     * @var $metaDescription string
     * @title Description (SEO)
     * @type textarea
     */
    public $metaDescription;

    /**
     * @var $script
     * @title Скрипт, рендеремый на странице
     * @type textarea
     */
    public $script;

    /**
     * @var $html
     * @title HTML добавляемый к странице
     * @type textarea
     */
    public $html;

    /**
     * @var $color string
     * @title Кастомный цвет страницы
     * @type color
     */
    public $color;

}