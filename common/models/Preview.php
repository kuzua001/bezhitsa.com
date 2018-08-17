<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/16/18
 * Time: 9:05 AM
 */

namespace common\models;


class Preview
{
    const PREVIEW_CROP_TOP    = 'crop_top';
    const PREVIEW_CROP_CENTER = 'crop_center';
    const PREVIEW_RESIZE      = 'resize';

    public $width;

    public $height;

    public $id;

    public $mode;

    public $description;

    function __construct($width, $height, $description, $id, $mode = self::PREVIEW_CROP_CENTER)
    {
        $this->description = $description;
        $this->width = $width;
        $this->height = $height;
        $this->id = $id;
    }
}