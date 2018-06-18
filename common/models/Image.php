<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 6/11/18
 * Time: 3:54 PM
 */

namespace common\models;

use frontend\interfaces\models\HasSrc;
use yii\db\ActiveRecord;

/**
 * Class Image
 * @property $id            integer
 * @property $image_type_id integer
 * @property $width         integer
 * @property $height        integer
 * @property $description   integer
 * @property $ts_created    integer
 * @property $alt           integer
 * @property $title         integer
 * @property $tags_json     integer
 * @property $previews_json integer
 * @property $is_deleted    integer
 * @property $filename      integer
 *
 * @package frontend\models
 */
class Image extends ActiveRecord implements HasSrc
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'cms_images';
    }

    /**
     * @param $imageId
     * @return array|null|ActiveRecord|Image
     */
    public static function id($imageId) {
        return $item = self::find()->where('id = :id', [
            'id' => $imageId
        ])->one();
    }

    /**
     * @param ActiveRecord $model
     * @param $property
     * @return array|Image|null|ActiveRecord
     */
    public static function getInstance(ActiveRecord $model, $property) {
        $result = new self();
        $result->filename = '/no_image.png';

        $imageId = $model->canGetProperty($property) ? $model->$property : null;
        if ($imageId !== null) {
            $item = self::id($imageId);
            if ($item !== null) {
                $result = $item;
            }
        }

        return $result;
    }

    public function getSrc() {
        return $this->filename;
    }

    public function fields()
    {
        return [
            'id',
            'image_type_id',
            'width',
            'height',
            'description',
            'ts_created',
            'alt',
            'title',
            'tags_json',
            'previews_json',
            'is_deleted',
            'filename',
        ];
    }

    public function scenarios()
    {
        return [
            'default' => [
                'id',
                'image_type_id',
                'width',
                'height',
                'description',
                'ts_created',
                'alt',
                'title',
                'tags_json',
                'previews_json',
                'is_deleted',
                'filename',
            ]
        ];
    }
}

