<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 4/3/18
 * Time: 11:21 PM
 */

namespace frontend\models\restaurant;


class RestaurantMenuCategory
{
    private $title;
    private $items = [];

    public function __construct($items, $title)
    {
        $this->items = $items;
        $this->title = $title;
    }

    public function addItem(RestaurantMenuItem $item)
    {
        $this->items[] = $item;
    }

    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @return RestaurantMenuItem[]
     */
    public function getItems()
    {
        return $this->items;
    }
}