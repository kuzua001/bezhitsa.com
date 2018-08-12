<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/18
 * Time: 11:34 AM
 */

namespace frontend\components\annotations;


use frontend\components\AnnotationProcessorInterface;

abstract class SimpleAnnotationParser implements AnnotationProcessorInterface
{
    private $keyword;

    public function __construct($keyword)
    {
        $this->keyword = $keyword;
    }

    public function checkLine($line)
    {
        return preg_match('/@' . $this->keyword . '/', $line);
    }

    public function getValue($line)
    {
        preg_match('/@' . $this->keyword . '\s+(.+)/', $line, $match);
        return isset($match[1]) ? trim($match[1]) : '';
    }

    public function getKey()
    {
        return $this->keyword;
    }
}