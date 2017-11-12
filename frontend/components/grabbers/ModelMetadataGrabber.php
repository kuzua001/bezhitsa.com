<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/21/17
 * Time: 6:48 AM
 */

namespace frontend\components\grabbers;

use frontend\components\MetadataGrabber;
use frontend\components\MetadataMapping;


class ModelMetadataGrabber extends MetadataGrabber
{
    protected $classNamePattern  = '/((.*)).php/';
    protected $classNamespace    = 'frontend\models\data';

    public static function getDefaultMapping()
    {
        $mapping = new MetadataMapping();
        $mapping->setClassNameField('model_name');
        $mapping->setClassTableName('cms_models');

        return $mapping;
    }
}