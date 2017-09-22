<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 9/3/17
 * Time: 5:10 PM
 */

namespace frontend\models\menu;

use frontend\components\AppHelper;
use \yii\helpers\Html;

/**
 * Class TopMenuItem
 */
class TopMenuItem
{
    /**
     * Константы типов элементов меню
     */
    const TYPE_LINK   = 'type_item_link';
    const TYPE_ANCHOR = 'type_item_anchor';

    /**
     * @var TopMenu
     */
    private $subMenu = null;

    /**
     * Название элемента меню
     * @var $title string
     */
    private $title;

    /**
     * Адрес куда ссылается элемент меню
     * @var $url string;
     */
    private $url;

    /**
     * Тип элемента меню
     * @var $type string
     */
    private $type;

    /**
     * когда ссылка на внещний домен (не относительно текущего сайта)
     * @var $absoluteUrl boolean
     */
    private $absoluteUrl;

    /**
     * Установить вложенное меню для данного элемента
     * @param TopMenu $menu
     */
    public function setSubMenu(TopMenu $menu)
    {
        $this->subMenu = $menu;
    }

    /**
     * @return null|TopMenu
     */
    public function getSubMenu()
    {
        return $this->subMenu;
    }

    public function getHTML()
    {
        $url = $this->absoluteUrl ? $this->url : ('/' . ltrim($this->url,'/'));
        $domain = AppHelper::getDomain();
        if (!$this->absoluteUrl) {
            $url = '/' . ltrim(str_replace($domain->base_url, '', $url), '/');
        }

        return HTML::tag('a', Html::encode($this->title), [
            'href' => $url
        ]);
    }

    function __construct($url, $title, $absoluteUrl = false) {
        $this->title       = $title;
        $this->url         = $url;
        $this->absoluteUrl = $absoluteUrl;
    }
}