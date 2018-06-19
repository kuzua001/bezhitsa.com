<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 4/10/18
 * Time: 10:44 PM
 */

namespace frontend\components;


use common\models\Image;

trait HasSrcTrait
{
    protected $imgField = 'img_id';

    public function getSrc($absolute = false) {
        $image = Image::id($this->{$this->imgField});
        $src = $image instanceof Image ? $image->getSrc() : null;

        if ($absolute) {
            $src = '/' . ltrim($src, '/');
        }

        return $src;
    }
}