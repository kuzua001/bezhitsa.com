<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/27/17
 * Time: 12:24 AM
 */

namespace frontend\models\data;

use frontend\components\AppHelper;
use frontend\interfaces\models\HasUrl;
use yii\db\ActiveRecord;
use frontend\models\Domain;

/**
 * Class Trainer
 * @property $id           integer
 * @property $name         string
 * @property $position     string
 * @property $description  string
 * @property $vk_link      string
 * @property $fb_link      string
 * @property $inst_link    string
 * @property $alias        string
 * @package frontend\models
 */
class Trainer extends ActiveRecord implements HasUrl
{
    const BASE_TRAINER_URL = '/fitness/trainers';

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
            'aliask',
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

    public function getUrl()
    {
        return AppHelper::getAbsoluteUrl(self::BASE_TRAINER_URL . '/' . $this->alias, Domain::DOMAIN_FITNESS_ID);
    }
}