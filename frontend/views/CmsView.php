<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 9/1/17
 * Time: 12:21 AM
 */

namespace frontend\views;

use frontend\models\menu\MenuInterface;
use yii\web\View;

class CmsView extends View {

    const FITNESS_MODAL = 'fitness';

    private $modals = [];

    public function registerModal($modal) {
        $this->modals[] = $modal;
    }

    public function getModals() {
        return $this->modals;
    }

    /**
     * SEO description
     * @var string
     */
    public $description;

    /**
     * SEO title
     * @var string
     */
    public $title;

    /**
     * Верхняя менюха
     * @var MenuInterface
     */
    public $topMenu;

    /**
     * Дефолтный цвет фона
     * @var string
     */
    public $bgColor;

    /**
     * Дефолтный цвет мобильной менюхи
     * @var string
     */
    public $submenuColor;

    /**
     * HTML который вставляется на страницу перед скриптом наалитики
     * @var string
     */
    public $injectedHTML;

}