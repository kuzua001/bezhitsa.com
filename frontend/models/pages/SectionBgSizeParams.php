<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/25/17
 * Time: 1:17 AM
 */

namespace frontend\models\pages;


use frontend\models\PageParams;


class SectionBgSizeParams extends PageParams
{
    /**
     * @var $image string
     * @title Фон секции
     * @type image
     */
    public $image;

    /**
     * @var $viewportSize integer
     * @title Размеры экрана
     * @type select(xs (320-544)px|sm (544-768)px|md (768-992)px|lg (992-1200)px|xl (>1200)px)
     */
    public $viewportSize;

    /**
     * @var $noImage boolean
     * @title Не показывать фон, только цвет
     * @type checkbox
     */
    public $noImage;


    protected $itemType = 'section_bg';

    public function varyingField()
    {
        return 'itemType';
    }

    protected $availableViewportPrefixes = [
        0 => 'xs',
        1 => 'sm',
        2 => 'md',
        3 => 'lg',
        4 => 'xl',
    ];

    /**
     * Возвращает строковое занчение префикса разрешения экрана
     * как в бутстрапе
     * @return mixed
     */
    public function getViewportPrefix()
    {
        return $this->availableViewportPrefixes[$this->viewportSize];
    }
}