<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 9/3/17
 * Time: 5:10 PM
 */

namespace frontend\interfaces\models\menu;

/**
 * Class TopMenu
 */
interface MenuInterface
{

    /**
     * Добавить еще элемент меню (так можно хардкодить какие-то элементы, которые не формируются автоматически)
     * @param MenuItemInterface $item
     */
    public function addMenuItem(MenuItemInterface $item);

    /**
     * Возвращает список элементов меню
     * @return MenuItemInterface[]
     */
    public function getItems();
}