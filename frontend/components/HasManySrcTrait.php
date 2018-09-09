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
        $ids = explode(',', trim($this->{$this->imagesField}, ','));
        /** @var Image[] $images */
        $images = Image::find()->where(['in', 'id', $ids])->all();
            usort($images, function($a, $b) use ($ids) {
            $aIndex = array_search($a->id, $ids);
            $bIndex = array_search($b->id, $ids);
            return $aIndex > $bIndex;
        });

        return $images;
    }
}