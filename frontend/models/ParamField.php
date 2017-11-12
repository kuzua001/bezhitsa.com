<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/29/17
 * Time: 2:44 PM
 */

namespace frontend\models;


class ParamField
{
    const TYPE_PROVIDER_CONF = 'provider_conf';
    const TYPE_STRING        = 'string';
    const TYPE_SELECT        = 'select';
    const TYPE_TEXTAREA      = 'textarea';
    const TYPE_HTML          = 'html';
    const TYPE_CHECKBOX      = 'checkbox';
    const TYPE_IMAGE         = 'image';
    const TYPE_COLOR         = 'color';
    const TYPE_DEFAULT       = self::TYPE_STRING;

    private $value = null;
    private $name;
    private $type = self::TYPE_DEFAULT;


    private static $allowedTypes = [
        self::TYPE_CHECKBOX,
        self::TYPE_PROVIDER_CONF,
        self::TYPE_SELECT,
        self::TYPE_STRING,
        self::TYPE_TEXTAREA,
        self::TYPE_HTML,
        self::TYPE_IMAGE,
        self::TYPE_COLOR,
    ];

    public static function checkType($type) {
        return in_array($type, static::$allowedTypes);
    }

    function __construct($name, $type)
    {
        if (in_array($type, self::$allowedTypes)) {
            $this->type = $type;
        }

        $this->name = $name;
    }

    /**
     * Установить значение поля
     * @param $value
     */
    public function setValue($value)
    {
        $this->value = $value;
    }

    /**
     * Вернуть значение поля
     * @return string|null
     */
    public function getValue()
    {
        return $this->value;
    }

}