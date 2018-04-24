<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/29/17
 * Time: 2:39 PM
 */

namespace frontend\models\pages;

use frontend\models\Page;

class FitnessPage extends LandingPage
{
    /**
     * @var FitnessPageParams $pageParams
     */
    public $pageParams;

    protected function initPageParams()
    {
        $this->pageParams = new FitnessPageParams();
    }
}