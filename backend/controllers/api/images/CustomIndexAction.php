<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/17
 * Time: 3:37 PM
 */
namespace backend\controllers\api\images;

use Yii;
use yii\rest\IndexAction;

class CustomIndexAction extends IndexAction
{

    protected function prepareDataProvider()
    {
        $selectedType = Yii::$app->request->get('selectedType');
        $selectedTags = explode(',', Yii::$app->request->get('tags'));

        $provider = parent::prepareDataProvider();
        $provider->pagination = false;

        if ($selectedType !== 'null' && $selectedType) {
            $provider->query->where('image_type_id = :type', [
                'type' => $selectedType
            ]);
        }

        if (count($selectedTags)) {
            foreach ($selectedTags as $i => $tag) {
                $provider->query->andFilterWhere(['like', 'tags_json', $tag]);
            }
        }

        return $provider;
    }

    public function run()
    {
        return parent::run();
    }
}