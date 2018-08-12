<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/18
 * Time: 11:34 AM
 */

namespace frontend\components\annotations;


use frontend\components\AnnotationProcessorInterface;

class SeparatedAnnotationParser implements AnnotationProcessorInterface
{

    public function checkLine($line)
    {
        return preg_match('/@separated/', $line);
    }

    public function getValue($line)
    {
        return $this->checkLine($line);
    }

    public function getKey()
    {
        return 'separated';
    }
}