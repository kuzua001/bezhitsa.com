<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 4/3/18
 * Time: 11:21 PM
 */

namespace frontend\models\restaurant;


class RestaurantMenuGroup
{
    private $title;
    private $categories;

    public function __construct($title)
    {
        $this->categories = [];
        $this->title = $title;
    }

    public function addCategory(RestaurantMenuCategory $cat)
    {
        $this->categories[$cat->getTitle()] = $cat;
    }

    public function addItemRecord(\frontend\models\data\RestaurantMenu $item)
    {
        if (!isset($this->categories[$item->category_title])) {
            $this->categories[$item->category_title] = new RestaurantMenuCategory([], $item->category_title);
        }

        /** @var RestaurantMenuCategory $currentCat */
        $currentCat = $this->categories[$item->category_title];
        $currentCat->addItem(new RestaurantMenuItem($item));
    }


    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @return RestaurantMenuCategory[]
     */
    public function getCategories()
    {
        return $this->categories;
    }
}