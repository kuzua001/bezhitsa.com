<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 6/8/17
 * Time: 6:03 PM
 */

namespace frontend\components;

use frontend\models\Domain;
use frontend\models\Texts;
use yii;
use yii\helpers\Html;

class LanguageHelper
{
    private static $currentLanguage = null;

    /**
     * Идентификаторы языков
     */
    const LANG_RU = 1;
    const LANG_EN = 2;

    public static $allowedLanguages = [
        self::LANG_RU => 'ru',
        self::LANG_EN => 'en'
    ];

    /**
     * Возвращает язык по умолчанию
     * @return int
     */
    public static function getDefaultLanguage()
    {
        return self::LANG_RU;
    }

    /**
     * Устанавливает текущий язык всего приложения
     * @param $language
     */
    public static function setCurrentLanguage($language) {
        if (isset(self::$allowedLanguages[$language])) {
            self::$currentLanguage = $language;
        } else {
            throw new Exception('Указан недопустимый язык');
        }
    }

    /**
     * Возвращает идентификатор текущего языка приложения
     * @return null|string
     */
    public static function getCurrentLanguage()
    {
        return self::$currentLanguage;
    }

    /**
     * Возвращает текущий язык приложения
     * @return string
     */
    public static function getCurrentLanguageCode()
    {
        return self::$allowedLanguages[self::$currentLanguage];
    }

}