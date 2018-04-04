<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 4/3/18
 * Time: 11:21 PM
 */

namespace frontend\models\restaurant;


class RestaurantMenuItem
{
    /** @var  string */
    private $title;

    /** @var  int */
    private $price;

    /** @var  array */
    private $variations;

    public function __construct(\frontend\models\data\RestaurantMenu $item) {
        $this->setup($item->title, $item->price);
    }

    public function setup($title, $price)
    {
        $this->title = $title;
        $this->price = $price;
        $this->variations = [];
    }

    public function addVariation($size, $price)
    {
        $this->variations[] = [
            'size'  => $size,
            'price' => $price
        ];
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function getVariations()
    {
        return $this->variations;
    }
}