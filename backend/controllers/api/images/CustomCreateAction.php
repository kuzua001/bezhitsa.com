<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/17
 * Time: 3:37 PM
 */
namespace backend\controllers\api\images;

use Yii;
use yii\db\Exception;
use yii\helpers\Url;
use yii\web\Response;
use yii\web\ServerErrorHttpException;
use common\models\Image;
use yii\rest\CreateAction;

class CustomCreateAction extends CreateAction
{

    public static function createFileFromContent($content, $fileName)
    {
        $nameWoExt = pathinfo($fileName, PATHINFO_FILENAME);

        if (preg_match('/^data:image\/(\w+);base64,/', $content, $type)) {
            $data = substr($content, strpos($content, ',') + 1);
            $type = strtolower($type[1]); // jpg, png, gif

            if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
                return ['status' => 'error', 'message' => 'This image type not supported'];
            }

            $data = base64_decode($data);

            if ($data === false) {
                return ['status' => 'error', 'message' => 'Base64 decode failed'];
            }
        } else {
            return ['status' => 'error', 'message' => 'Base64 decode failed'];
        }



        try {
            file_put_contents(Yii::getAlias('@frontend/web/uploads/images'). "/{$nameWoExt}.{$type}", $data);
        } catch (Exception $ex) {

        }

        return Image::createName($nameWoExt, $type);
    }

    public function run()
    {
        if ($this->checkAccess) {
            call_user_func($this->checkAccess, $this->id);
        }

        $content  = Yii::$app->request->post('content');
        $filename = Yii::$app->request->post('filename');
        $filter   = Yii::$app->request->post('filter');



        $img = new Image();
        $img->filename = self::createFileFromContent($content, $filename);
        $img->description = 'test';

        if ($filter !== null) {
            if (isset($filter['selectedType']) && $filter['selectedType'] > 0) {
                $img->image_type_id = $filter['selectedType'];
            }

            if (isset($filter['selectedTags'])) {
                $img->tags_json = json_encode($filter['selectedTags'], JSON_UNESCAPED_UNICODE);
            }
        }

        $img->save();

        return [
            'status' => 'success',
            'image' => $img
        ];
    }
}