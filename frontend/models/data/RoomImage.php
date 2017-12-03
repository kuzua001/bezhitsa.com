<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/27/17
 * Time: 12:24 AM
 */

namespace frontend\models\data;

use yii\db\ActiveRecord;
use frontend\interfaces\models\HasSrc;

/**
 * Class RoomImage
 * @property $id integer
 * @property $img string
 * @property $is_main boolean
 * @property $room_id integer
 * @property $descrpition string
 * @package frontend\models
 */
class RoomImage extends ActiveRecord implements HasSrc
{
    const IMAGE_RELATIVE_PATH = '/img/rooms';

    public function fields()
    {
        return [
            'id',
            'img',
            'is_main',
            'room_id',
        ];
    }

    public function scenarios()
    {
        return [
            'default' => ['id', 'img', 'is_main', 'room_id']
        ];
    }

    public function getSrc()
    {
        return self::IMAGE_RELATIVE_PATH . '/' . $this->img;
    }
}