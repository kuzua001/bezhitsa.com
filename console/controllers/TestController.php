<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/18/17
 * Time: 9:48 PM
 */

namespace console\controllers;

use common\models\Image;
use common\models\ImageType;
use frontend\components\LanguageHelper;
use frontend\models\cms\CmsSettings;
use frontend\components\grabbers\ControllerMetadataGrabber;
use frontend\components\grabbers\ModelMetadataGrabber;
use frontend\components\grabbers\PagesMetadataGrabber;
use frontend\components\MetadataGrabber;
use frontend\components\MetadataMapper;
use frontend\components\MetadataMapping;
use frontend\components\ObjectBuilder;

use frontend\models\data\Room;
use frontend\models\data\RoomImage;
use frontend\models\data\Trainer;
use frontend\models\Page;
use frontend\models\pages\HotelMainSectionParams;
use frontend\models\pages\LandingPage;
use frontend\models\pages\SliderItemParams;
use frontend\models\pages\SliderTabsSectionParams;
use frontend\models\pages\TextPageParams;
use frontend\models\pages\TextPage;
use yii\console\Controller;
use yii;
use \Gumlet\ImageResize;



class TestController extends Controller
{

    public function actionPreviewConvert()
    {
        $type = ImageType::find()->one();
        /** @var $type ImageType */
        $type->previewSettings[0]->width = 300;
        $type->save();
    }

    /**
     * @param $filePath
     * @return Image
     */
    private function convertFileToImage($filePath, $description = 'test')
    {
        $filePath = trim($filePath);
        $nameWoExt = pathinfo($filePath, PATHINFO_FILENAME);
        $ext = pathinfo($filePath, PATHINFO_EXTENSION);


        try {
            copy($filePath,Yii::getAlias('@frontend/web/uploads/images'). "/{$nameWoExt}.{$ext}");
        } catch (yii\base\ErrorException $ex) {
            ECHO 'pizdos';
        }

        $img = new Image();
        $img->filename = Image::createName($nameWoExt, $ext);
        $img->description = $description;
        $img->save(false);

        return $img;
    }

    public function actionImagesFix()
    {
        /** @var Trainer[] $trainers */
        $trainers = Trainer::find()->all();
        foreach ($trainers as $trainer) {
            $imagePath = Yii::getAlias('@frontend/web'. $trainer->img_url);
            $img = $this->convertFileToImage($imagePath);
            $trainer->img_id = $img->id;
            var_dump($img->filename);
            $trainer->save(false);
            echo $imagePath . "\n";
        }
    }

    public function actionImagesFixContent()
    {
        $pages = Page::find()->all();
        foreach ($pages as $basePage) {
            $pageId = $basePage->id;
            LanguageHelper::setCurrentLanguage(LanguageHelper::LANG_RU);
            $page = Page::id($pageId);
            $page->save(false);
            LanguageHelper::setCurrentLanguage(LanguageHelper::LANG_EN);
            $page = Page::id($pageId);
            $page->save(false);
        }

    }


    public function actionImagesFixTest()
    {
        $page = Page::id(44);
        $page->save(false);
    }

    public function actionImagesFixRooms()
    {
        $rooms = Room::find()->all();

        foreach ($rooms as $room) {

            /** @var $room Room **/
            $oldImages = RoomImage::find()->where(['room_id' => $room->id])->all();
            $ids = [];
            foreach ($oldImages as $image) {
                /** @var $image RoomImage $img */
                $img = new Image();
                $img->filename = 'uploads/rooms/' . $image->img;
                $img->description = $image->description;
                $img->image_type_id = 2;
                $img->save();
                $ids[] = $img->id;
            }
            $room->image_ids = implode(',', $ids);
            $room->save();

        }

    }

    public function actionTestCrop()
    {

        $image = new ImageResize(__DIR__ . '/../../frontend/web/uploads/images/mfresh.jpeg');
        $image->scale(50);
        $image->save(__DIR__ . '/../../frontend/web/uploads/images/mfresh2.jpeg');
    }

    public function actionUpdate()
    {
        $mapper = new MetadataMapper();
        $mapper->addGrabber(new ControllerMetadataGrabber());
        $mapper->addGrabber(new PagesMetadataGrabber());
        $mapper->updateAll();
    }

    public function actionUpdateModels()
    {
        $mapper = new MetadataMapper();
        $mapper->addGrabber(new ModelMetadataGrabber());
        //$mapper->addGrabber(new PagesMetadataGrabber());
        $mapper->updateAll();
    }


    public function actionTest()
    {
        CmsSettings::initSettings();
    }

}