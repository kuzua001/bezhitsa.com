<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 4/3/18
 * Time: 11:19 PM
 */

namespace frontend\models\restaurant;

use frontend\models\data\RestaurantMenu as MenuModel;
use frontend\models\restaurant\RestaurantMenuCategory;

class RestaurantMenu
{
    const TYPE_MAIN = 1;
    const TYPE_BANKET = 2;
    const TYPE_BAR = 3;


    private $mainMenu;
    private $banketMenu;
    private $barMapMenu;


    /**
     * @return RestaurantMenuGroup
     */
    public function getMainMenu()
    {
        return $this->mainMenu;
    }

    /**
     * @return RestaurantMenuGroup
     */
    public function getBanketMenu()
    {
        return $this->banketMenu;
    }

    /**
     * @return RestaurantMenuGroup
     */
    public function getBarMapMenu()
    {
        return $this->barMapMenu;
    }

    private static $instance;

    public function init()
    {
        /** @var MenuModel[] $items */
        $items = MenuModel::find()->where('deleted != 1')->all();
        foreach ($items as $item) {
            switch ($item->menu_type) {
                case RestaurantMenu::TYPE_MAIN:
                    $this->mainMenu->addItemRecord($item);
                    break;
                case RestaurantMenu::TYPE_BANKET:
                    $this->banketMenu->addItemRecord($item);
                    break;
                case RestaurantMenu::TYPE_BAR:
                    $this->barMapMenu->addItemRecord($item);
                    break;
            }
        }
    }

    private function __construct()
    {
        $this->mainMenu = new RestaurantMenuGroup('Основное меню');
        $this->banketMenu = new RestaurantMenuGroup('Банкетное меню');
        $this->barMapMenu = new RestaurantMenuGroup('Барная карта');
        $this->init();
    }

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}