<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/4/18
 * Time: 6:23 PM
 */

namespace frontend\interfaces\models;


interface NamedTypeInterface
{
    public function getTypeName($type);
}