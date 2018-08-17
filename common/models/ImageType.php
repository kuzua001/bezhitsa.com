<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 6/11/18
 * Time: 3:54 PM
 */

namespace common\models;

use frontend\interfaces\models\HasSrc;
use Yii;
use yii\db\ActiveRecord;
use \Gumlet\ImageResize;

/**
 * Class ImageType
 * @property $id                     integer
 * @property $name                   string
 * @property $previews_settings_json integer
 *
 * @package frontend\models
 */
class ImageType extends ActiveRecord
{

    /** @var Preview[]  */
    public $previewSettings = [];

    public static function tableName()
    {
        return 'cms_image_types';
    }

    /**
     * @return Preview[]
     */
    public function getPreviewSettings()
    {
        return $this->previewSettings;
    }

    public function afterFind()
    {
        parent::afterFind();
        $rawSettings = json_decode($this->previews_settings_json, true);
        foreach ($rawSettings as $i => $item) {
            $this->previewSettings[] = new Preview($item['x'], $item['y'], isset($item['description']) ? $item['description'] : '', $i);
        }
    }

    public function beforeSave($insert)
    {
        $previewArray = [];
        foreach ($this->previewSettings as $item) {
            $previewArray[] = ['x' => $item->width, 'y' => $item->height];
        }
        $this->previews_settings_json = json_encode($previewArray);

        return parent::beforeSave($insert);
    }


    public function fields()
    {
        return [
            'id',
            'name',
            'previews_settings_json',
            'previewSettings'
        ];
    }

    public function scenarios()
    {
        return [
            'default' => $this->fields()
        ];
    }
}

