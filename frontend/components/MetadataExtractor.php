<?php
/**
 * Created by PhpStorm.
 * User: dan
 * Date: 7/25/17
 * Time: 7:48 PM
 */

namespace frontend\components;


use frontend\components\grabbers\ModelMetadataGrabber;
use yii\db\Exception;
use frontend\components\grabbers\ControllerMetadataGrabber;
use frontend\components\grabbers\PagesMetadataGrabber;


class MetadataExtractor
{
    const CONTROLLER_MAPPING  = 'controller';
    const PAGES_MAPPING       = 'pages';
    const MODELS_MAPPING      = 'models';

    private static $allowedTypes = [
        self::CONTROLLER_MAPPING,
        self::PAGES_MAPPING,
        self::MODELS_MAPPING
    ];

    /**
     * Возвращает mapping
     * @param $objectType
     *
     * @return MetadataMapping|null
     */
    private static function getMapping($objectType)
    {
        switch ($objectType) {
            case self::CONTROLLER_MAPPING:
                return ControllerMetadataGrabber::getDefaultMapping();

            case self::PAGES_MAPPING:
                return PagesMetadataGrabber::getDefaultMapping();

            case self::MODELS_MAPPING:
                return ModelMetadataGrabber::getDefaultMapping();
        }
    }

    /**
     * @param $objectType
     * @param $classId
     * @return null|string
     */
    public static function getClassName($objectType, $classId)
    {
        if (in_array($objectType, self::$allowedTypes)) {
            $mapping = self::getMapping($objectType);
            $className =  MetadataMapper::getStoredClassById($mapping, $classId);
        }

        return empty($className) ? null : $className;
    }
}