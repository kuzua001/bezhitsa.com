<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/17
 * Time: 4:40 PM
 */

namespace frontend\models;


use frontend\models\pages\SectionParams;
use yii\base\Object;

class PageFields extends Object
{
    protected $params = [];
    protected $values = null;

    const TYPE_PROVIDER_CONF = ParamField::TYPE_PROVIDER_CONF;
    const TYPE_CHECKBOX      = ParamField::TYPE_CHECKBOX;
    const TYPE_SELECT        = ParamField::TYPE_SELECT;
    const TYPE_STRING        = ParamField::TYPE_STRING;
    const TYPE_IMAGE         = ParamField::TYPE_IMAGE;
    const TYPE_TEXTAREA      = ParamField::TYPE_TEXTAREA;
    const TYPE_HTML          = 'html';
    const TYPE_COMPOSITE     = 'composite';
    const TYPE_COMPOSITE_ARR = 'composite_arr';

    public function getParamsArr()
    {
        return $this->params;
    }

    public function addField($key, $type, $title = '', $default = '', $separated = false, $required = false, $tabTitle = '', $options = [])
    {
        $this->params[$key] = [
            'key'       => $key,
            'type'      => $type,
            'title'     => $title,
            'default'   => $default,
            'separated' => $separated,
            'tabTitle'  => $tabTitle,
            'required'  => $required,
        ];

        if (count($options)) {
            $this->params[$key]['options'] = $options;
        }
    }

    public function setupValues($values)
    {
        $this->values = $values;
    }

    /**
     * @param       $key
     * @param       $isArr
     * @param       $title string
     * @param       $itemTitleKey string
     * @param       $tabTitle
     * @param       $availableInstances (PageFields)[]
     */
    public function addCompositeField($key, $isArr, $title, $itemTitleKey, array $availableInstances, $tabTitle = '') {
        $labels = [];

        foreach ($availableInstances as $type => $instance) {
            $labels[$type] = SectionParams::typeName($type);
        }

        $this->params[$key] = [
            'key'  => $key,
            'title' => $title,
            'itemTitleKey' => $itemTitleKey,
            'type' => $isArr ? self::TYPE_COMPOSITE : self::TYPE_COMPOSITE_ARR,
            'availableInstances' => $availableInstances,
            'instancesLabels' => $labels,
            'tabTitle' => $tabTitle
        ];
    }

    public function __toString()
    {
        return json_encode((object) [
            'params' => $this->params,
            'values' => PageParams::getValuesWithTypes($this->values)
        ]);
    }
}