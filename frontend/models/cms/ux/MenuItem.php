<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/27/17
 * Time: 10:25 PM
 */

namespace frontend\models\cms\ux;

use yii\db\ActiveRecord;
use yii\helpers\Html;
use frontend\interfaces\models\menu\MenuItemInterface;
use frontend\interfaces\models\menu\MenuInterface;
use frontend\models\Domain;
use frontend\components\AppHelper;
use frontend\models\Page;

/**
 * Class MenuItem
 * @property $id              integer
 * @property $title           string
 * @property $page_id         boolean
 * @property $is_external     boolean
 * @property $href            string
 * @property $is_active       boolean
 * @property $is_target_blank boolean
 * @property $parent_id       integer
 * @property $menu_id         integer
 * @property $domain_id       integer
 * @package frontend\models\cms\ux
 */
class MenuItem extends ActiveRecord implements MenuItemInterface
{
    /**
     * @var Menu
     */
    private $parentMenu = null;
    /**
     * Класс, добавляемый к спискам вложенных меню
     */
    const SUBMENU_CLASS = 'sub-menu';
    const ACTIVE_CLASS  = 'active';
    const PARENT_CLASS  = 'parent';

    /**
     * @var MenuInterface
     */
    private $subMenu = null;

    public static function tableName()
    {
        return 'cms_menu_item';
    }

    /** @inheritdoc */
    public function setSubMenu(MenuInterface $menu)
    {
        $this->subMenu = $menu;
    }

    /** @inheritdoc */
    public function getSubMenu()
    {
        return $this->subMenu;
    }

    /**
     * Установить родителя
     * @param Menu $parentMenu
     */
    public function setParent(Menu $parentMenu)
    {
        $this->parentMenu = $parentMenu;
    }

    /** @inheritdoc */
    public function getHTML()
    {
        $classes = [];

        if (is_null($this->page_id)) {
            $url = $this->href;
        } else {
            $page = Page::id($this->page_id);
            $url = $page->getUrl();

            // Обработка урлов на других доменах
            if ($this->is_external) {
                $domain = Domain::findOne($page->domain_id);

                if ($domain->base_url !== '/') {
                    $url = str_replace($domain->base_url, '', $url);
                }
                $url = ltrim($url, '/');
                $url = 'http://' . $domain->domain . '/' . $url . $this->href;
            }

            // Класс активного элемента меню
            if (AppHelper::getCurrentPageID() == $this->page_id) {
                $classes[] = self::ACTIVE_CLASS;
            }

            // Особоый класс для корневой страницы
            if (!empty($this->parentMenu) && $this->parentMenu->parent_page_id == $this->page_id) {
                $classes[] = self::PARENT_CLASS;
            }
        }

        return HTML::tag('a', Html::encode($this->title), [
            'href'  => $url,
            'class' => implode(' ', $classes)
        ]);
    }

    public static function create($url, $title, $parentMenu, $isExternal = false)
    {
        $menu = new self();
        $menu->title       = $title;
        $menu->href        = $url;
        $menu->is_external = $isExternal;
        $menu->setParent($parentMenu);

        return $menu;
    }
}