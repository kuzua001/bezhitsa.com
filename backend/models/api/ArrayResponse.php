<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/24/17
 * Time: 7:35 PM
 */

namespace backend\models\api;

use yii\base\Object;


class ArrayResponse extends Object
{
    private $data;

    function __construct($data) {
        parent::__construct();
        $this->data = $data;
    }

    function __toString()
    {
        return json_encode($this->data, true);
    }
}