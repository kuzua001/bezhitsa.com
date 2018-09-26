<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 9/3/17
 * Time: 10:30 PM
 */

namespace frontend\models;

use frontend\components\LanguageHelper;
use yii\db\ActiveRecord;

/**
 * Class Domain
 * @property $id integer
 * @property $domain string
 * @property $is_active integer
 * @property $title string
 * @property $is_main integer
 * @property $base_url string
 *
 * @package frontend\models
 */
class Domain extends ActiveRecord
{
    const DOMAIN_FITNESS_ID = 2;
    const DOMAIN_RESTAURANT_ID = 3;
    const DOMAIN_HOTEL_ID = 1;

    public static function getDomain($domainId) {
        return self::findOne([
            'id' => $domainId
        ]);
    }

    public static function tableName()
    {
        return 'cms_domains';
    }

    /**
     * Привести url к каноничному виду, когда домену соответствует некое
     * начало урла, отличное от /
     * например http://bezhitsa.com/fitness и http://bzfit.ru эквивалентны,
     * домену http://bzfit.ru соответствует начало урла /fitness
     * @param $url
     *
     * @return mixed|string
     */
    public function getCanonicalUrl($url, $href = '', $lang = LanguageHelper::LANG_RU, $enforce = false)
    {
        $url = '/' . ltrim($url, '/');

        if ($this->base_url !== '/') {
            $url = str_replace($this->base_url, '', $url);
        }

        if ($enforce) {
            $domain = str_replace("//", "/", $this->domain . $this->base_url);
        } else {
            $domain = $this->domain;
        }


        $url = 'https://' . str_replace("//", "/",
                $domain . '/' .
                (($lang != LanguageHelper::getDefaultLanguage()) ?
                    LanguageHelper::getLanguageCode($lang) . '/' : '')
                . ltrim($url, '/') . $href);
        return $url;
    }
}