<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/18
 * Time: 11:24 AM
 */

namespace frontend\components;

interface AnnotationProcessorInterface
{
    /**
     * @param $line
     * @return boolean
     */
    public function checkLine($line);

    /**
     * @return string|boolean
     */
    public function getValue($line);

    /**
     * @return string
     */
    public function getKey();
}