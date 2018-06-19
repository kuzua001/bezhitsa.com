<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/29/17
 * Time: 9:44 PM
 */

namespace frontend\models;

use frontend\components\MetadataExtractor;
use yii\db\ActiveRecord;

/**
 * Class PageType
 * @property $id integer
 * @property $class_name string
 * @package frontend\models
 */
class PageType extends ActiveRecord
{
    public static function tableName()
    {
        return 'cms_pages';
    }
}