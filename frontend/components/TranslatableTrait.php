<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 4/10/18
 * Time: 10:44 PM
 */

namespace frontend\components;


use frontend\models\cms\i18n\ModelTranslation;
use frontend\models\cms\i18n\ModelTranslationQuery;

trait TranslatableTrait
{
    protected static $cache = null;

    private static function initCache($lang) {
        self::$cache = [];
        $query = new ModelTranslationQuery(ModelTranslation::className());
        $fieldKeyLike = self::generateTranslationFieldKey('');
        $translations = $query
            ->where('lang_code = :lang_code', [
                ':lang_code' => $lang
            ])
            ->andFilterWhere(['like', 'full_field_key', $fieldKeyLike])
            ->all();

        foreach ($translations as $item) {
            self::$cache[self::generateCacheFromModel($item)] = $item;
        }
    }

    protected function translateFields() {
        return [];
    }

    private function translatableModelId() {
        return 'id';
    }

    private static function generateCacheFromModel(ModelTranslation $item) {
        return self::generateCacheKey($item->full_field_key, $item->model_id, $item->lang_code);
    }

    private function generateCacheKey($fieldKey, $id, $lang) {
        return 'translation_cache' . $fieldKey . $id . $lang;
    }

    private function generateTranslationFieldKey($field) {
        $class = get_called_class();

        return $class . '.' . $field;
    }

    /**
     * @param      $field
     * @param int  $lang
     * @param bool $createIfNotExist
     *
     * @return array|ModelTranslation|null
     */
    private function getTranslation($field, $lang = LanguageHelper::LANG_EN, $createIfNotExist = true) {
        $id = $this->{$this->translatableModelId()};
        $fieldKey = $this->generateTranslationFieldKey($field);

        if (null === self::$cache) {
            self::initCache($lang);
        }

        $key = self::generateCacheKey($fieldKey, $id, $lang);
        if (!isset(self::$cache[$key]) || null === ($translation = self::$cache[$key])) {
            $query = new ModelTranslationQuery(ModelTranslation::className());
            $translation = $query->where('model_id = :model_id and lang_code = :lang_code and full_field_key = :full_field_key', [
                ':model_id' => $id,
                ':lang_code' => $lang,
                ':full_field_key' => $fieldKey
            ])->one();
        }
        if (null === $translation && $createIfNotExist) {
            $translation = new ModelTranslation();
            $translation->model_id = $id;
            $translation->lang_code = $lang;
            $translation->full_field_key = $fieldKey;
            $translation->value = $this->$field;
            $translation->save();
        }

        return $translation;
    }

    private function loadTranslations() {
        $lang = LanguageHelper::getCurrentLanguage();
        if ($lang !== LanguageHelper::getDefaultLanguage()) {
            foreach ($this->translateFields() as $field) {
                $translation = $this->getTranslation($field, $lang, true);
                $this->$field = $translation->value;
            }
        }
    }

}