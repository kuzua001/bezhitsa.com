<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/25/17
 * Time: 1:17 AM
 */

namespace frontend\models\pages;


use frontend\models\cms\logic\DataProviderConfiguration;
use frontend\models\PageParams;
use frontend\widgets\section\Section;
use frontend\models\data\Trainer;

/**
 * Class TrainersListSectionParams
 * @property $trainers frontend\models\data\Trainer[]
 * @package frontend\models\pages
 */
class TrainersListSectionParams extends SectionParams
{
    protected $sectionType  = Section::TYPE_TRAINERS_LIST;
    protected $sectionClass = 'trainers';

    protected static function getDataProviders()
    {
        return [
            'trainers' => new DataProviderConfiguration(2, 'trainers', DataProviderConfiguration::FILTER_BASIC_ALL_ITEMS)
        ];
    }
}