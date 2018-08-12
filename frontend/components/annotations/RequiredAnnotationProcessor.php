<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/18
 * Time: 11:22 AM
 */

namespace frontend\components\annotations;

use frontend\components\AnnotationProcessorInterface;

class RequiredAnnotationProcessor implements AnnotationProcessorInterface
{
    public function checkLine($line)
    {
        return preg_match('/@required/', $line);
    }

    public function getValue($line)
    {
        return $this->checkLine($line);
    }

    public function getKey()
    {
        return 'required';
    }
}