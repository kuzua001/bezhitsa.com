<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/18
 * Time: 11:22 AM
 */

namespace frontend\components\annotations;

class TypeAnnotationProcessor extends SimpleAnnotationParser
{
    public function __construct()
    {
        parent::__construct('type');
    }
}