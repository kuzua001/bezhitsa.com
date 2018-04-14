<?php
namespace frontend\controllers;

use Faker\Provider\Base;
use frontend\components\AppHelper;
use frontend\models\PageParams;
use frontend\models\pages\LandingPage;
use frontend\models\pages\SectionParams;
use frontend\models\SectionItem;
use frontend\widgets\common\MainFitnessSection;
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


    public function actionIndex()
    {
        return $this->render('index.php', ['page' => $this->page]);
    }
}