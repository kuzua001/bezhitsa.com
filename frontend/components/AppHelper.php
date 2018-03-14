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

class AppHelper
{
    private static $_domain = null;

    /**
     * @return array|null|Domain
     *
     */
    public static function getDomain()
    {
        if (is_null(self::$_domain)) {
            $domain = preg_replace('#^www\.(.+\.)#i', '$1', $_SERVER['HTTP_HOST']);

            self::$_domain = Domain::find()->where('domain = :domain', [':domain' => $domain])->one();

            if (is_null(self::$_domain)) {
                self::$_domain = Domain::find()->where('is_main = 1')->one();
            }
        }

        return self::$_domain;
    }

    private static $_currentPageId = null;

    /**
     * Получить день недели отформатированный как ПН, 21.07 в кирилице
     * @param \DateTime $date
     * @param $format string
     * @return string
     */
    public static function getFormattedDayOfWeek(\DateTime $date, $format = 'D, d.m')
    {
        $result = $date->format($format);
        $replace = [
            'Mon' => 'Пн',
            'Tue' => 'Вт',
            'Wed' => 'Ср',
            'Thu' => 'Чт',
            'Fri' => 'Пт',
            'Sat' => 'Сб',
            'Sun' => 'Вс'
        ];

        return str_replace(array_keys($replace), array_values($replace), $result);
    }

    /**
     * Возвращает ID текущей старницы или null
     * @return mixed
     */
    public static function getCurrentPageID()
    {
        if (is_null(self::$_currentPageId)) {
            try {
                self::$_currentPageId = Yii::$app->controller->getPageID();
            } catch (yii\base\UnknownMethodException $ex) {

            }
        }

        return self::$_currentPageId;
    }


    public static function getAbsoluteUrl($url, $domainId)
    {
        $domain = Domain::getDomain($domainId);
        if ($domain->base_url !== '/') {
            $url = str_replace($domain->base_url, '', $url);
        }
        $url = ltrim($url, '/');
        $url = 'http://' . $domain->domain . '/' . $url;

        return $url;
    }


    /**
     * Доступные языки
     */
    const LANG_RU = 'ru-RU';
    const LANG_EN = 'en-US';

    private static $textsDefaultPath = '@common/texts';
    private static $_textsDefault = null;

    private static $_availableLanguages = [self::LANG_RU, self::LANG_EN];


    /**
     * проверяет, что переданное значение - валидный в теории ID
     * @param $id
     * @return bool
     */
    public static function isValidID($id)
    {
        return is_integer($id) && $id > 0;
    }

    /**
     * Получить текст
     * @param string $key
     * @param string $lang
     * @param boolean $editable можно ли редактировать данный текст и оборачивать его в спец.теги
     *
     * @return string
     */
    public static function getText($key, $editable = true)
    {
        $lang = \Yii::$app->language;

        if (self::$_textsDefault === null) {
            $keys = [];
            foreach (self::$_availableLanguages as $lang) {
                Yii::$app->params['texts'][$lang] = require(Yii::getAlias(self::$textsDefaultPath . '/' . $lang . '/default.php'));
                $keys = array_unique(array_merge($keys, array_keys(Yii::$app->params['texts'][$lang])));
            }

            foreach ($keys as $key) {
                $value = '';
                self::$_textsDefault[$key] = [];

                foreach (self::$_availableLanguages as $lang) {
                    $value = isset(Yii::$app->params['texts'][$lang][$key]) ? Yii::$app->params['texts'][$lang][$key] : $value;
                    self::$_textsDefault[$key][$lang] = $value;
                }

            }
        }
        /**
         * @var \frontend\models\Texts $text
         */
        $text = Texts::find()->where('`key` = :key and lang = :lang', [':key' => $key, ':lang' => $lang])->one();

        if (!is_object($text)) {
            $text = new Texts();
            $text->value = isset(self::$_textsDefault[$key][$lang]) ? self::$_textsDefault[$key][$lang] : '';;
            $text->lang = $lang;
            $text->key = $key;
            $text->save();
        }

        $textVal = $text->value;

        return $editable ? Html::tag('span', $textVal, [
            'data-key' => $key,
            'data-lang' => $lang,
            'hover' => '',
            'editable-text' => '',
            'class' => 'editable-text-element',
        ]) : $textVal;
    }
    /**

     * Изменить текст
     * @param string $key
     * @param string $lang
     * @param string $value
     * @return string
     */
    public static function setText($key, $lang, $value)
    {
        /**
         * @var $text \frontend\models\Texts
         */
        $text = Texts::find()->where('`key` = :key and lang = :lang', [':key' => $key, ':lang' => $lang])->one();

        if (!is_object($text)) {
            $text = new Texts();
            $text->key = $key;
            $text->lang = $lang;
        }

        $text->value = $value;
        $text->save();
    }
}