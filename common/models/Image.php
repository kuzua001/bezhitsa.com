<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 6/11/18
 * Time: 3:54 PM
 */

namespace common\models;

use frontend\components\TranslatableTrait;
use frontend\interfaces\models\HasSrc;
use Yii;
use yii\db\ActiveRecord;
use \Gumlet\ImageResize;

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
    use TranslatableTrait;

    private static $baseImagesPath = 'uploads/images/';

    const DEFAULT_TEMPLATE = '{NAME}_{SIZE}.{EXT}';

    const NAME_PLACEHOLDER = 'NAME';
    const EXT_PLACEHOLDER  = 'EXT';
    const SIZE_PLACEHOLDER = 'SIZE';

    private $imageName;

    private $imageExt;

    private $tags;

    protected function translateFields()
    {
        return [
            'description'
        ];
    }

    public function afterFind()
    {
        $this->parseImageFilename();
        $this->loadTranslations();
        $this->tags = json_decode($this->tags);
        parent::afterFind();
    }

    public function beforeSave($insert)
    {
        $this->tags_json = json_encode($this->tags, JSON_UNESCAPED_UNICODE);
        return parent::beforeSave($insert);
    }

    private function createNameFromTemplate($template, $x = 0, $y = 0)
    {
        $result = str_replace('{' . self::NAME_PLACEHOLDER . '}', $this->imageName, $template);
        $result = str_replace('{' . self::EXT_PLACEHOLDER . '}', $this->imageExt, $result);
        $result = str_replace('{' . self::SIZE_PLACEHOLDER . '}', $x . 'x' . $y, $result);

        return $result;
    }

    public function addTag($tag)
    {
        $this->tags[] = $tag;
        $this->tags = array_unique($this->tags);
    }

    public static function findAllTags()
    {
        $tags = [];
        $connection = Yii::$app->getDb();
        $command = $connection->createCommand('SELECT tags_json from ' . self::tableName() . ' where tags_json is not null and tags_json != \'null\'');
        foreach ($command->queryColumn() as $tagsJson) {
            $tags = array_unique (array_merge($tags, json_decode($tagsJson)));
        }
        return $tags;
    }

    private function parseImageFilename()
    {
        $this->imageName = pathinfo($this->filename, PATHINFO_FILENAME);
        $this->imageExt = pathinfo($this->filename, PATHINFO_EXTENSION);
    }

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'cms_images';
    }

    public static function createName($name, $ext) {
        return self::$baseImagesPath . $name . '.' . $ext;
    }

    public function getAbsoluteFileName() {
        return Yii::getAlias('@frontend/web/' . self::$baseImagesPath) . '/' . $this->filename;
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
     * @param $x
     * @param $y
     * @param string $previewNameTemplate
     * @throws \Gumlet\ImageResizeException
     */
    public function createPreview($x, $y, $previewNameTemplate = self::DEFAULT_TEMPLATE) {
        $image = new ImageResize($this->getAbsoluteFileName());
        $image->resizeToBestFit($x, $y);
        $image->save($this->createNameFromTemplate($previewNameTemplate, $x, $y));
    }


    /**
     * @return array|Image
     */
    public static function noImage() {
        $result = new self();
        $result->filename = '/no_image.png';

        return $result;
    }

    public function getSrc($full = true) {
        if ($full) {
            return '/' . ltrim($this->filename, '/');
        }
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

