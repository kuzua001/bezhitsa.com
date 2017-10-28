<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 9/3/17
 * Time: 5:10 PM
 */

namespace frontend\interfaces\models\menu;

use frontend\components\AppHelper;
use \yii\helpers\Html;

/**
 * Class TopMenuItem
 */
interface MenuItemInterface
{
    /**
     * Константы типов элементов меню
     */
    const TYPE_MENU_ITEM_LINK   = 'type_menu_item_link';
    const TYPE_MENU_ITEM_ANCHOR = 'type_menu_item_anchor';

    /**
     * Установить вложенное меню для данного элемента
     * @param MenuInterface $menu
     */
    public function setSubMenu(MenuInterface $menu);

    /**
     * Получить вложенное меню для данного элемента
     * @return null|MenuInterface
     */
    public function getSubMenu();

    /**
     * Получить HTML код данного элемента меню
     * @return string
     */
    public function getHTML();
}