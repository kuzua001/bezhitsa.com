<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/29/17
 * Time: 2:39 PM
 */

namespace frontend\models\pages;


use Faker\Provider\Text;
use frontend\models\Page;
use frontend\models\PageParams;
use frontend\models\ParamField;

class AboutSection extends Page
{
    /**
     * @var AboutSectionParams $pageParams
     */
    public $pageParams;

    protected function initPageParams()
    {
        $this->pageParams = new AboutSectionParams();
    }
}