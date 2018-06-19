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


    const TYPE_SECTION_BG = 'section_bg';

    protected $itemType = self::TYPE_SECTION_BG;

    public function varyingField()
    {
        return 'itemType';
    }

    static protected $availableViewportPrefixes = [
        0 => 'xs',
        1 => 'sm',
        2 => 'md',
        3 => 'lg',
        4 => 'xl',
    ];

    static protected $availableViewportWidth = [
        0 => 554,
        1 => 768,
        2 => 992,
        3 => 1200,
        4 => 1440,
    ];

    /**
     * SectionBgSizeParams constructor.
     *
     * @param $image string  Изображение
     * @param $size  integer Номер размера экрана
     */
    public function __construct($image = "", $size = 0)
    {
        parent::__construct();
        $this->image        = $image;
        $this->viewportSize = $size;
    }

    /**
     * Получить бэкгрануды для всех разрешений, если какие-то были пропущены
     * @param (SectionBgSizeParams)[] $bgItems
     * @return (SectionBgSizeParams)[]
     */
    public static function getBgfForAllViewports(array $bgItems) {
        $ret = [];
        $lastImage = '';

        $allBgSizes = self::$availableViewportWidth;
        $allBgSizes = array_reverse($allBgSizes);

        foreach ($allBgSizes as $index => $width) {
            foreach ($bgItems as $searchItem) {
                if ($searchItem->getViewportWidh() == $width) {
                    $lastImage = $searchItem->image;
                    break;
                }
            }

            $ret[] = new SectionBgSizeParams($lastImage, count($allBgSizes) - $index - 1);
        }

        return $ret;
    }

    /**
     * Возвращает строковое занчение префикса разрешения экрана
     * как в бутстрапе
     * @return mixed
     */
    public function getViewportPrefix()
    {
        if (!$this->viewportSize) {
            $this->viewportSize = 4;
        }
        return self::$availableViewportPrefixes[$this->viewportSize];
    }

    /**
     * Возвращает ширину заданного разрешения (по номеру)
     * как в бутстрапе
     * @return mixed
     */
    public function getViewportWidh()
    {
        if (!$this->viewportSize) {
            $this->viewportSize = 4;
        }
        return self::$availableViewportWidth[$this->viewportSize];
    }
}