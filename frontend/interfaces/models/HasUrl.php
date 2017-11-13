<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 11/13/17
 * Time: 9:44 AM
 */

namespace frontend\interfaces\models;

/**
 * Обладает методомо getUrl, для всяких сущностей, имеющих детальную страницу
 * Interface HasUrl
 */
interface HasUrl
{
    /**
     * @return string
     */
    public function getUrl();
}
