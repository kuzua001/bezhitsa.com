<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/27/17
 * Time: 10:25 PM
 */

namespace frontend\models\cms\ux;

use frontend\components\LanguageHelper;
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
 * @property $title_en        string
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
        $lang = LanguageHelper::getCurrentLanguage();

        $classes = [];

        if (is_null($this->page_id)) {
            $url = $this->href;
        } else {
            $page = Page::id($this->page_id);
            $url = $page->getUrl();
            $url = $this->getMultilingualUrl($url, $page, $lang);

            // Класс активного элемента меню
            if (AppHelper::getCurrentPageID() == $this->page_id) {
                $classes[] = self::ACTIVE_CLASS;
            }

            // Особоый класс для корневой страницы
            if (!empty($this->parentMenu) && $this->parentMenu->parent_page_id == $this->page_id) {
                $classes[] = self::PARENT_CLASS;
            }
        }

        return HTML::tag('a', $lang == LanguageHelper::LANG_EN ? Html::encode($this->title_en) : Html::encode($this->title), [
            'href'  => $url,
            'class' => implode(' ', $classes)
        ]);
    }

    /**
     * Возвращает урл с учетом мультиязычного префикса
     * @param $url string
     * @param $page Page
     * @param $lang integer
     *
     * @return string
     */
    private function getMultilingualUrl($url, $page, $lang) {

        // Обработка урлов на других доменах
        if ($this->is_external) {
            $domain = Domain::findOne($page->domain_id);

            $url = $domain->getCanonicalUrl($url, $this->href, $lang, true);
        }

        return $url;
    }

    /**
     * @param      $url
     * @param      $title
     * @param      $title_en Английский перевод пункта меню
     * @param      $parentMenu
     * @param bool $isExternal
     *
     * @return MenuItem
     */
    public static function create($url, $title, $title_en,  $parentMenu, $isExternal = false)
    {
        $menu = new self();
        $menu->title       = $title;
        $menu->title_en    = $title_en;
        $menu->href        = $url;
        $menu->is_external = $isExternal;
        $menu->setParent($parentMenu);

        return $menu;
    }
}