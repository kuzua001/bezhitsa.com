<?php
/**
 * Created by PhpStorm.
 * User: dan
 * Date: 7/25/17
 * Time: 2:19 PM
 */

namespace frontend\models;

use common\models\Image;
use frontend\components\DocCommentParser;
use frontend\components\LanguageHelper;
use frontend\models\cms\logic\DataProviderConfiguration;
use frontend\models\pages\SectionParams;
use frontend\models\pages\SliderItemParams;
use ReflectionClass;
use Yii;
use yii\base\UnknownPropertyException;
use yii\data\ActiveDataProvider;
use yii\db\ActiveRecord;
use yii\db\Exception;

/**
 * Умеет инициализироват свои переменные из серивализованной строки, получать список параметров
 * и подтягивать их типы из phpDoc свойств в производных классах и возвращать себя в сериализованном виде
 * Class PageParams
 * @package frontend\models
 */
class PageParams
{
    protected $pageParamsNamespace = 'frontend\models\pages';

    /**
     * Язык в котором отображать все свойства
     * @var null|string
     */
    private $language;

    protected $availableInstances = [];

    /**
     * список значений натсроек data-провайдеров, по сути это будут настройки фильтров
     * для получених конкретных данных
     * todo описать это более четко, когда будет окончательно выработана концепция по привязке данных моеделей
     * todo к классу PageParams
     * @var array
     */
    protected $dataProvidersData = [];

    /**
     * Список дава провайдеров, который строится в конструкторе после их конфигурирования
     * @var ActiveDataProvider[]
     */
    private $providers = [];

    /**
     * Список данных для переводов, содержит в себе свойства проименованные как
     * __en_{propertyName}, где propertyName - название исходного свойства
     * @var array
     */
    protected $translationData = [];

    private static $_reserved = [
        'reserved', 'providers', 'dataProvidersData'
    ];

    // todo разобраться че тут блин вообще происходит
    function __construct()
    {
        $this->initProviders();
        $this->language = LanguageHelper::getCurrentLanguage();
    }

    /**
     * Настраивает список настроек для поставляемых провайдеров данных
     */
    protected static function getDataProviders()
    {
        return [];
    }

    private function initProviders()
    {
        // Настраиваем провайдеры данных, привязанные к этому экземпляру настроек страницы
        $providersCfg = static::getDataProviders();

        if (count($providersCfg)) {
            foreach ($providersCfg as $cfg) {
                /**@var $cfg DataProviderConfiguration  */
                $providerName = $cfg->getProviderName();
                $this->providers[$providerName] = $cfg->getDataProvider(isset($this->dataProvidersData[$providerName]) ? $this->dataProvidersData[$providerName] : []);
            }
        }
    }
    

    /**
     * Переопределенный геттер, умеет возвращать магические поля дата-провайдеров
     * @param $key
     *
     * @return ActiveDataProvider|object
     * @throws UnknownPropertyException
     */
    public function __get($key)
    {
        if (property_exists($this, $key)) {
            return $this->$key;
        } else if (isset($this->providers[$key])) {
            return $this->providers[$key];
        } else {
            return null;
            // todo выяснить бывает ли так
            //var_dump($key);
            //exit();
            //throw new UnknownPropertyException();
        }
    }

    /**
     * Получить availableInstances
     * @return array
     */
    public function getAvailableInstances()
    {
        return $this->availableInstances;
    }

    public function initFromArray($data, $pageFields = null) {
        $pageFields = is_null($pageFields) ? $this->toPageFieldsArr(true, false) : $pageFields;

        if (is_array($data)) {
            foreach ($data as $key => $value) {
                if (property_exists($this, $key)) {

                    if (!isset($pageFields[$key])) {
                        continue;
                    }
                    $item = $pageFields[$key];

                    if ($item['type'] == 'composite') {
                        $this->$key = [];
                        if (is_array($value)) {
                            foreach ($value as $itemArr) {
                                /** @var $itemInstance PageParams */
                                /** @var $instance PageParams */
                                $availableInstances = is_object($item) ? $item->getAvailableInstances() : $item['availableInstances'];
                                $instance = $availableInstances[$itemArr['type']];
                                $itemInstance = clone $instance;
                                $itemInstance->initFromArray($itemArr, $instance->getAvailableInstances());
                                array_push($this->$key, $itemInstance);
                            }
                        }
                    } else {
                        $this->$key = $value;
                    }
                } else if (isset($this->providers[$key])) {
                    // Если переданы настройки для провайдера данных, то сохраняем их особым образом
                    $this->dataProvidersData[$key] = $value;
                }
            }
        }

        $this->initProviders();

        return true;
    }

    /**
     * Инициализировать объект из сериализованного представления
     * @param $serialized string
     *
     * @return bool
     */
    public function initFromSerialized($serialized)
    {
        try {
            $data = unserialize($serialized);
            foreach ($data as $key => $value) {
                if (property_exists($this, $key)) {
                    $this->$key = $value;
                }
            }

            $this->initProviders();

            return true;
        } catch (\Exception $ex) {
            return false;
        }
    }

    /**
     * @return bool|string
     */
    public function varyingField()
    {
        return false;
    }

    /**
     * Привести объект к сериализованному виду
     * @return string
     */
    public function toSerialized()
    {
        return serialize($this);
    }

    public static function getValuesWithTypes($pageParams)
    {
        // Получаем список провайдеров, чтобы потянуть и их значения тоже
        // todo сделать не криво!

        $ret = [];
        foreach ($pageParams as $key => $val) {
            if (is_array($val) && !in_array($key, self::$_reserved)) {
                $ret[$key] = [];
                foreach ($val as $i => $obj) {
                    // todo сделать вообще не такую проверку и защититься от возможного совпадения названия поля и названия провайдера
                    if (is_object($obj)) {
                        $objArr         = self::getValuesWithTypes($obj);
                        //if (method_exists($obj, 'varyingField')) {
                            $objArr['type'] = $obj->{$obj->varyingField()};
                        //} else {
                        //    var_dump($key);
                        //    var_dump($i);
                        //    exit();
                        //}
                        $ret[$key][$i]  = $objArr;
                    } else {
                        $ret[$key][$i]  = $obj;
                    }
                }
            } else {
                $ret[$key] = $val;
            }
        }

        return $ret;
    }

    /**
     * Преобразовать объект параметры страницы в массив полей страницы
     * @return array
     */
    public function toPageFieldsArr($asObj = false, $onlyComposite = false)
    {
        return $this->toPageFields($asObj, $onlyComposite)->getParamsArr();
    }

    /**
     * Преобразовать объект параметры страницы в объект "поля страницы"
     * @return PageFields
     */
    public function toPageFields($asObj = false, $onlyComposite = false)
    {
        $pageFields = new PageFields();
        $rc         = new ReflectionClass(get_called_class());
        $properties = $rc->getProperties();

        foreach ($properties as $item) {
            $comment = $item->getDocComment();

            $commentParser = new DocCommentParser($comment);

            $typeStr      = $commentParser->type;
            $itemTitleKey = $commentParser->itemTitleKey;
            $title        = $commentParser->title;
            $default      = $commentParser->default;
            $separated    = $commentParser->separated;
            $required     = $commentParser->required;
            $tabTitle     = $commentParser->tab;

            preg_match('/\(([a-zA-Z\|]*)\)\[\]/', $typeStr, $multiple);
            preg_match('/select\s?\((.*)\)/u', $typeStr, $select);

            if (count($multiple) === 0 && !count($select)) {
                if (ParamField::checkType($typeStr) && !$onlyComposite) {
                    $pageFields->addField($item->name, $typeStr, $title, $default, $separated, $required, $tabTitle);
                }
            } else if (count($select)) {
                $options = explode('|', $select[1]);
                $pageFields->addField($item->name, ParamField::TYPE_SELECT, $title, $default, $separated, $required, $tabTitle, $options);
            } else {
                $classes = explode('|', $multiple[1]);
                $multiplePageFields = [];

                foreach ($classes as $class) {
                    $fullClassName = $this->pageParamsNamespace . '\\' . $class;
                    /** @var $params PageParams */
                    $params = new $fullClassName;
                    if ($asObj) {
                        $params->availableInstances = $params->toPageFieldsArr($asObj, $onlyComposite);
                    }
                    $multiplePageFields[$params->{$params->varyingField()}] = $asObj ? $params : $params->toPageFieldsArr($asObj);
                }

                $pageFields->addCompositeField($item->name, true, $title, $itemTitleKey, $multiplePageFields, $tabTitle);
            }
        }

        // Отдельно зададим поля для настроек дата-провайдеров и вынесем их в отдельный таб настроек "Провайдеры данных"
        if (count(static::getDataProviders())) {
            foreach (static::getDataProviders() as $cfg) {
                // todo сделать нормальный title
                $pageFields->addField($cfg->getProviderName(), ParamField::TYPE_SELECT, $cfg->getProviderName(), '[]', false, false, 'Провайдеры данных', $cfg->getAllModelIds());
            }
        }

        $pageFields->setupValues($this);

        return $pageFields;
    }
}