<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 4/10/18
 * Time: 10:44 PM
 */

namespace frontend\components;


use common\models\Image;

trait HasManySrcTrait
{
    protected $imagesField = 'image_ids';

    public function getImagesList() {
        $ids = explode(',', $this->{$this->imagesField});
        $images = Image::find()->where(['in', 'id', $ids])->all();

        return $images;
    }
}