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
    const FOOTER_LINK_VK = '1';
    const FOOTER_LINK_OK = '2';
    const FOOTER_LINK_FB = '3';
    const FOOTER_LINK_IN = '4';
    const FOOTER_LINK_TA = '5';

    private static $_domainLinks = null;

    private static $_footerIcons = [
        self::FOOTER_LINK_VK => '/img/svg/vk.svg',
        self::FOOTER_LINK_OK => '/img/svg/ok.svg',
        self::FOOTER_LINK_FB => '/img/svg/fb.svg',
        self::FOOTER_LINK_IN => '/img/svg/insta.svg',
        self::FOOTER_LINK_TA => '/img/svg/tripadvisor.svg',
    ];

    public static function getAvailableLinkTypes()
    {
        return array_keys(self::$_footerIcons);
    }

    public static function getExistingLinkTypes()
    {
        try {
            $footerLinks = self::getFooterLinks();
            return array_keys($footerLinks[self::getDomain()->id]);
        } catch (\Exception $ex) {
            return [];
        }
    }


    public static function getFooterLink($linkType) {
        try {
            $domainLinks = self::getFooterLinks();
            return $domainLinks[self::getDomain()->id][$linkType];
        } catch (\Exception $ex) {
            return null;
        }
    }

    public static function getFooterIconSrc($linkType) {
        try {
            return self::$_footerIcons[$linkType];
        } catch (\Exception $ex) {
            return null;
        }
    }

    private static $_domain = null;

    public static function getMultilingualLink($relativeUrl)
    {
        return LanguageHelper::getBaseUrl() . ltrim($relativeUrl,'/');
    }

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

    /**
     * @return integer
     */
    public static function getDomainId()
    {
        $domain = self::getDomain();
        return $domain->id;
    }


    private static function getFooterLinks()
    {
        if (self::$_domainLinks === null) {
            self::$_domainLinks = \Yii::$app->params['footer_links'];
        }

        return self::$_domainLinks;
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

    private static $_cmsSettings = null;

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
     * Получить значение параметра настроек
     * @param string $key
     *
     * @return string
     */
    public static function getValue($key)
    {
//        $siteId = self::getDomainId();
//
//        if (self::$_cmsSettings === null) {
//
//        }
//        /**
//         * @var \frontend\models\Texts $text
//         */
//        $text = Texts::find()->where('`key` = :key and lang = :lang', [':key' => $key, ':lang' => $lang])->one();
//
//        if (!is_object($text)) {
//            $text = new Texts();
//            $text->value = isset(self::$_textsDefault[$key][$lang]) ? self::$_textsDefault[$key][$lang] : '';;
//            $text->lang = $lang;
//            $text->key = $key;
//            $text->save();
//        }
//
//        $textVal = $text->value;
//
//        return $editable ? Html::tag('span', $textVal, [
//            'data-key' => $key,
//            'data-lang' => $lang,
//            'hover' => '',
//            'editable-text' => '',
//            'class' => 'editable-text-element',
//        ]) : $textVal;
    }

    /**
     * @param array $target
     * @param array $keys
     */
    public static function initCompositeKeys(array &$target, array $keys)
    {
        foreach ($keys as $keyValue) {
            if (!isset($target[$keyValue])) {
                $target[$keyValue] = [];
            }

            $target = &$target[$keyValue];
        }
    }

    /**
     * @param array $target
     * @param array $keys
     * @param $value
     */
    public static function setCompositeKeyValue(array &$target, array $keys, $value)
    {
        foreach ($keys as $keyValue) {
            $target = &$target[$keyValue];
        }

        $target = $value;
    }

    /**
     * @param array $target
     * @param array $keys
     * @param $value
     */
    public static function appendCompositeKeyValue(array &$target, array $keys, $value)
    {
        foreach ($keys as $keyValue) {
            $target = &$target[$keyValue];
        }

        if (!is_array($target)) {
            $target = [];
        }

        $target[] = $value;
    }

    /**
     * @param array $target
     * @param array $keys
     * @return mixed
     */
    public static function getCompositeKeyValue(array &$target, array $keys)
    {
        foreach ($keys as $keyValue) {
            $target = &$target[$keyValue];
        }

        return $target;
    }
}