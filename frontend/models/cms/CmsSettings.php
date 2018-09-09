<?php

namespace frontend\models\cms;

use Exception;
use frontend\components\AppHelper;
use Yii;

/**
 * This is the model class for table "cms_settings".
 *
 * @property int $id
 * @property string $key
 * @property int $site_id
 * @property string $type
 * @property string $header
 * @property string $group_title
 * @property string $subgroup_title
 * @property string $value
 * @property array $options
 * @property array $options_types
 */
class CmsSettings extends \yii\db\ActiveRecord
{
    /** @var array */
    public $options;

    /** @var array */
    public $options_types;

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'cms_settings';
    }

    public function afterFind()
    {
        parent::afterFind();
        $this->options = json_decode($this->options_json, true);
        $this->options_types = json_decode($this->options_types_json, true);
    }

    public function fields() {
        return array_merge(parent::fields(), ['options', 'options_types']);
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['site_id'], 'required'],
            [['site_id'], 'integer'],
            [['key', 'type', 'group_title', 'subgroup_title'], 'string', 'max' => 255],
            [['options', 'options_types'], 'safe'],
        ];
    }

    public function scenarios()
    {
        return [
            'default' => ['value', 'options', 'options_types']
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'key' => 'Key',
            'header' => 'header',
            'site_id' => 'Site ID',
            'type' => 'Type',
            'group_title' => 'Group Title',
            'subgroup_title' => 'Subgroup Title',
            'value' => 'Value',
            'options_json' => 'Options json',
            'options_types_json' => 'Options types json',
        ];
    }

    private static $loadedSettings = null;
    private static $allSettings = null;

    public static function initSettings()
    {
        self::$loadedSettings = [];
        self::$allSettings = $settingsList = self::find()->all();
        foreach ($settingsList as $item) {
            /** @var $item CmsSettings */
            AppHelper::initCompositeKeys(self::$loadedSettings, [$item->site_id, $item->group_title, $item->subgroup_title]);
            AppHelper::appendCompositeKeyValue(self::$loadedSettings, [$item->site_id, $item->group_title, $item->subgroup_title], $item);
        }
    }

    public static function getLoadedSettings($siteId) {
        if (self::$loadedSettings === null) {
            self::initSettings();
        }

        return isset(self::$loadedSettings[$siteId]) ? self::$loadedSettings[$siteId] : [];
    }

    /**
     * @param $siteId
     * @param $key
     * @return string;
     */
    public static function getValue($siteId, $key) {
        if (!self::$allSettings) {
            self::initSettings();
        }

        $found = (array_filter(self::$allSettings, function($item) use ($siteId, $key) {
            /** @var $item CmsSettings */
            return $item->key == $key && $item->site_id == $siteId;
        }));
        if (count($found) === 1) {
            $result = array_reverse($found);

            /** @var CmsSettings $result */
            $result = array_pop($result);
            return $result->value;
        }

        return null;
    }


    public static function getValueArr($siteId, $key) {
        $value = self::getValue($siteId, $key);
        return $value ? json_decode($value, true) : [];
    }
}
