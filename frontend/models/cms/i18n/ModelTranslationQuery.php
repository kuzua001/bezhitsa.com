<?php

namespace frontend\models\cms\i18n;

/**
 * This is the ActiveQuery class for [[ModelTranslation]].
 *
 * @see ModelTranslation
 */
class ModelTranslationQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * @inheritdoc
     * @return ModelTranslation[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * @inheritdoc
     * @return ModelTranslation|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
