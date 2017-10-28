<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/27/17
 * Time: 9:50 PM
 */

namespace frontend\models\cms\ux;

use frontend\components\AppHelper;
use frontend\interfaces\models\menu\MenuItemInterface;
use yii\db\ActiveRecord;
use frontend\interfaces\models\menu\MenuInterface;
use frontend\models\cms\ux\MenuItem;
use frontend\models\Page;

/**
 * Class Menu
 * @property $id                     integer
 * @property $title                  string
 * @property $is_active              boolean
 * @property $allowed_positions_json string
 * @property $append_childs          boolean
 * @property $parent_page_id         integer
 * @package frontend\models\cms\ux
 */
class Menu extends ActiveRecord implements MenuInterface
{
    /**
     * Спсиок элементов меню
     * @var $items MenuItem[]
     */
    private $items = [];

    public static function tableName()
    {
        return 'cms_menu';
    }

    public function fields()
    {
        return [
            'id',
            'title',
            'is_active',
            'allowed_positions_json',
            'append_childs',
            'parent_page_id',
        ];
    }

    public function scenarios()
    {
        return [
            'default' => ['id', 'title', 'is_active', 'allowed_positions_json', 'append_childs', 'parent_page_id']
        ];
    }


    /** @inheritdoc */
    public function addMenuItem(MenuItemInterface $item)
    {
        $this->items[] = $item;
    }

    /** @inheritdoc */
    public function getItems()
    {
        return $this->items;
    }

    function afterFind()
    {
        parent::afterFind();

        $menuItems   = MenuItem::find()->where(['menu_id' => $this->id])->all();
        $this->items = $menuItems;

        if ($this->append_childs == true) {
            foreach ($this->items as $item) {
                $item->setParent($this);
                $childPages = Page::find()->where(['parent_id' => $item->page_id])->all();

                $itemSubMenu = new Menu;
                foreach ($childPages as $page) {
                    // $item->href это GET-параметры url'а, которые используются в том случае, когда элемент меню ссылается на страницу
                    // в CMS, а не просто на абстрактный ресурс, при этом к его url добавляются эти GET-параметры, например в качестве
                    // UTM-меток. У дочерних эелемнтов, которые получены автоматически UTM будут такими же как и у родителя.
                    $subItem = MenuItem::create($item->href, $page->name, $this);
                    $subItem->page_id = $page->id;
                    $itemSubMenu->addMenuItem($subItem);
                }

                $item->setSubMenu($itemSubMenu);
            }
        }
    }
}