<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/18
 * Time: 11:22 AM
 */

namespace frontend\components\annotations;

class TabAnnotationProcessor extends SimpleAnnotationParser
{
    public function __construct()
    {
        parent::__construct('tab');
    }
}