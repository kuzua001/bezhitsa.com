<?php

namespace frontend\models\cms;

use frontend\components\AppHelper;
use Yii;

/**
 * This is the model class for table "cms_settings".
 *
 * @property int $id
 * @property string $key
 * @property int $site_id
 * @property string $type
 * @property string $group_title
 * @property string $subgroup_title
 * @property string $value
 */
class CmsSettings extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'cms_settings';
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
        ];
    }

    public function scenarios()
    {
        return [
            'default' => ['value']
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
            'site_id' => 'Site ID',
            'type' => 'Type',
            'group_title' => 'Group Title',
            'subgroup_title' => 'Subgroup Title',
            'value' => 'Value',
        ];
    }

    private static $loadedSettings = null;

    public static function initSettings()
    {
        self::$loadedSettings = [];
        $settingsList = self::find()->all();
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
}
