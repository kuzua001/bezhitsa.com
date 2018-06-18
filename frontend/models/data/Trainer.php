<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/27/17
 * Time: 12:24 AM
 */

namespace frontend\models\data;

use frontend\components\AppHelper;
use frontend\components\HasSrcTrait;
use frontend\components\TranslatableTrait;
use frontend\interfaces\models\HasSrc;
use frontend\interfaces\models\HasUrl;
use yii\db\ActiveRecord;
use frontend\models\Domain;

/**
 * Class Trainer
 * @property $id                 integer
 * @property $name               string
 * @property $position           string
 * @property $description        string
 * @property $vk_link            string
 * @property $fb_link            string
 * @property $inst_link          string
 * @property $alias              string
 * @property $img_id             integer
 * @property $img_src            string
 * @property $two_lines_position boolean
 * @property $n                  integer
 * @property $has_vk             boolean
 * @property $has_fb             boolean
 * @property $has_insta          boolean
 * @package frontend\models
 */
class Trainer extends ActiveRecord implements HasUrl, HasSrc
{

    use TranslatableTrait;
    use HasSrcTrait;

    public $img_src;


    protected function translateFields() {
        return [
            'description', 'name', 'position'
        ];
    }

    public function afterFind()
    {
        parent::afterFind();
        $this->loadTranslations();
        $this->img_src = $this->getSrc();
    }

    const BASE_TRAINER_URL = '/fitness/trainers';

    public function fields()
    {
        return [
            'id',
            'name',
            'position',
            'description',
            'vk_link',
            'fb_link',
            'inst_link',
            'alias',
            'two_lines_position',
            'img_id',
            'img_src',
            'n',
            'has_vk',
            'has_fb',
            'has_inst',
        ];
    }

    /**
     * Получить только имя тренера
     * @return string
     */
    public function getFirstName()
    {
        $names = explode(' ', $this->name);
        return $names[0];
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
                'img_id',
                'n',
                'has_vk',
                'has_fb',
                'has_inst',
            ]
        ];
    }

    public function getUrl()
    {
        return AppHelper::getAbsoluteUrl(self::BASE_TRAINER_URL . '/' . $this->alias, Domain::DOMAIN_FITNESS_ID);
    }
}