<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 4/4/18
 * Time: 2:34 AM
 */

namespace frontend\models\data;

use yii\db\ActiveRecord;

/**
 * Class RestaurantMenu
 * @property integer $menu_type
 * @property integer $price
 * @property boolean $deleted
 * @property string $category_title
 * @property string $title
 * @property string $size
 * @package frontend\models\data
 */
class RestaurantMenu extends ActiveRecord
{

}