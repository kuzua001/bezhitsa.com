<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/27/17
 * Time: 12:24 AM
 */

namespace frontend\models\data;

use yii\db\ActiveRecord;

/**
 * Class Trainer
 * @property $id           integer
 * @property $name         string
 * @property $position     string
 * @property $description  string
 * @property $vk_link      string
 * @property $fb_link      string
 * @property $inst_link    string
 * @package frontend\models
 */
class Trainer extends ActiveRecord
{
    public function fields()
    {
        return [
            'id',
            'name',
            'position',
            'square',
            'description',
            'vk_link',
            'fb_link',
            'inst_link',
        ];
    }

    public function scenarios()
    {
        return [
            'default' => [
                'id',
                'name',
                'position',
                'square',
                'description',
                'vk_link',
                'fb_link',
                'inst_link',
            ]
        ];
    }
}