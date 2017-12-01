<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/13/17
 * Time: 9:44 AM
 */

namespace frontend\interfaces\models;

/**
 * Обладает методомо getSrc, для скриптов и картинок
 * Interface HasUrl
 */
interface HasSrc
{
    /**
     * @return string
     */
    public function getSrc();
}
