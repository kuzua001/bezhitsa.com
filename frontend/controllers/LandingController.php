<?php
namespace frontend\controllers;

use Faker\Provider\Base;
use frontend\components\AppHelper;
use frontend\models\pages\LandingPage;
use frontend\models\pages\SectionParams;
use frontend\models\SectionItem;
use yii\web\Controller;
use frontend\widgets\common\Section;
use yii;


class LandingController extends CmsController
{

    /**
     * @return string
     */
    public function getDefaultBgColor()
    {
        /** @var $page LandingPage */
        $page = $this->page;

        $lastSection = end($page->pageParams->sectionsParams);
        /** @var $lastSection SectionParams */
        return $lastSection->bgColor;
    }


    /**
     * Вовзращает цвет для мобильного меню
     * @return string
     */
    public function getSubmenuColor() {
        /** @var $page LandingPage */
        $page = $this->page;

        $firstSection = reset($page->pageParams->sectionsParams);
        /** @var $firstSection SectionParams */
        return $firstSection->bgColor;
    }

    public function actionIndex()
    {
        return $this->render('index.php', ['page' => $this->page]);
    }
}