<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 4/4/18
 * Time: 2:34 AM
 */

namespace frontend\models\data;

use frontend\components\AppHelper;
use frontend\components\LanguageHelper;
use yii\db\ActiveRecord;

/**
 * Class RestaurantMenu
 * @property integer $menu_type
 * @property integer $price
 * @property boolean $deleted
 * @property string $category_title
 * @property string $category_title_ru
 * @property string $category_title_en
 * @property string $title
 * @property string $title_ru
 * @property string $title_en
 * @property string $size
 * @property integer $n
 * @property integer $id
 * @package frontend\models\data
 */
class RestaurantMenu extends ActiveRecord
{
    public static function tableName()
    {
        return 'restaurant_menu';
    }

    public function fields()
    {
        return [
            'id',
            'menu_type',
            'price',
            'deleted',
            'category_title',
            'title',
            'size',
            'n'
        ];
    }

    public function scenarios()
    {
        return [
            'default' => $this->fields()
        ];
    }

    public function afterFind()
    {
        $lang = LanguageHelper::getCurrentLanguage();
        switch ($lang) {
            case LanguageHelper::LANG_EN:
                $this->category_title = $this->category_title_en;
                $this->title = $this->title_en;
                break;
            default:
                $this->category_title = $this->category_title_ru;
                $this->title = $this->title_ru;
                break;
        }
    }

    public function beforeSave($insert)
    {
        $lang = LanguageHelper::getCurrentLanguage();
        if (!$insert) {
            switch ($lang) {
                case LanguageHelper::LANG_EN:
                    $this->category_title_en = $this->category_title;
                    $this->title_en = $this->title;
                    break;
                default:
                    $this->category_title_ru = $this->category_title;
                    $this->title_ru = $this->title;
                    break;
            }
        } else {
            $this->category_title_en = $this->category_title;
            $this->category_title_ru = $this->category_title;
            $this->title_en = $this->title;
            $this->title_ru = $this->title;
        }

        return parent::beforeSave($insert);
    }
}