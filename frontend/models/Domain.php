<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 9/3/17
 * Time: 10:30 PM
 */

namespace frontend\models;

use yii\db\ActiveRecord;

/**
 * Class Domain
 * @property $id integer
 * @property $domain string
 * @property $is_active integer
 * @property $title string
 * @property $is_main integer
 * @property $base_url string
 *
 * @package frontend\models
 */
class Domain extends ActiveRecord
{
    public static function tableName()
    {
        return 'cms_domains';
    }
}