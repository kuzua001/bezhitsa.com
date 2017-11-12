<?php

namespace frontend\models\cms\logic;

use yii\db\Query;
use yii\db\ActiveQuery;
use yii\data\ActiveDataProvider;
use frontend\components\MetadataExtractor;

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 10/31/17
 * Time: 7:43 PM
 */
class DataProviderConfiguration
{
    const TYPE_SINGLE_ITEM    = 1;
    const TYPE_MULTIPLE_ITEMS = 2;

    /**
     * ID модели данных, для которой мы хотим сконфигурировать провайдер
     * @var
     */
    private $modelId;

    /**
     * Название провайдера, будет использовано для автоматического прокидывания в контроллеры и виджеты секций
     * todo когда станет чуточку яснее архитектура этой логики поменять комментарий на более актуальный и разумный
     * @var
     */
    private $providerName;

    const FILTER_BASIC_SINGLE_ITEM = 1;
    const FILTER_BASIC_PREDEFINED_LIST_OF_ITEMS = 2;
    const FILTER_BASIC_ALL_ITEMS = 3;


    private $basicFilterType;

    function __construct($modelId, $providerName, $basicFilterType)
    {
        // todo добавить валидацию существования определенной модели с указанным modelId (некая таблица, метаданные о которой мы собрали в cms_models)
        $this->modelId         = $modelId;
        $this->providerName    = $providerName;
        $this->basicFilterType = $basicFilterType;
    }

    /**
     * Возвращает название перемнной провайдера
     * @return mixed
     */
    function getProviderName()
    {
        return $this->providerName;
    }

    /**
     * @var null|\yii\data\ActiveDataProvider
     */
    private $dataProvider = null;

    /**
     * Возвращает сформированный data provider, основываясь на значениях фильтров переданных в виде массива
     * todo переделать как-то этот класс, чтобы мы могли передавать ему настоящие фильтры, унаследованные от базового класса, основанные на фильтрах yii
     * todo и при этом была возможность создать 3 инстанса для простых фильтров (один объект, все объекты, объекты с указанными id) через 3 статических метода
     * нtodo ашей обертки под yii-ные фильтры
     * @param array $filterData
     *
     * @return null|ActiveDataProvider
     */
    function getDataProvider(array $filterData)
    {
        if (is_null($this->dataProvider)) {
            $finalQuery = null;
            $query = new Query();
            $modelName = MetadataExtractor::getClassName(MetadataExtractor::MODELS_MAPPING, $this->modelId);
            $tableName = $modelName::tableName();
            $query = $query->from($tableName);

            switch ($this->basicFilterType) {
                case self::FILTER_BASIC_ALL_ITEMS:
                    $finalQuery = $query->all();
                    break;
                case self::FILTER_BASIC_PREDEFINED_LIST_OF_ITEMS:
                    $finalQuery = $query->where(['id' => $filterData])->all();
                    break;
                case self::FILTER_BASIC_SINGLE_ITEM:
                    $finalQuery = $query->where(['id', '=', $filterData[0]])->one();
                    break;
            }

            $this->dataProvider = new ActiveDataProvider([
                'query' => $finalQuery
            ]);
        }

        return $this->dataProvider;
    }

    /**
     * Получить список всех ID данной модели
     * //todo перенести этот метод в базовый метод репозитория данных, также будет доступна поддержка кеширования
     * @return array
     */
    function getAllModelIds()
    {
        $query = new Query();

        // todo убрать дулирование этого кода
        $modelName = MetadataExtractor::getClassName(MetadataExtractor::MODELS_MAPPING, $this->modelId);
        $tableName = $modelName::tableName();

        return $query->from($tableName)->select('id')->column();
    }
}