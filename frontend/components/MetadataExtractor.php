<?php
/**
 * Created by PhpStorm.
 * User: dan
 * Date: 7/25/17
 * Time: 7:48 PM
 */

namespace frontend\components;


use yii\db\Exception;
use frontend\components\grabbers\ControllerMetadataGrabber;
use frontend\components\grabbers\PagesMetadataGrabber;


class MetadataExtractor
{
    const CONTROLLER_MAPPING  = 'controller';
    const PAGES_MAPPING       = 'pages';

    private static $allowedTypes = [
        self::CONTROLLER_MAPPING,
        self::PAGES_MAPPING
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