<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 7/18/17
 * Time: 9:48 PM
 */

namespace console\controllers;

use common\models\Image;
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

    public function actionImagesFixRooms()
    {
        $rooms = Room::find()->all();
        foreach ($rooms as $room) {
            /** @var Room $room */
            $slides = $room->getSlides();
            $ids = [];
            foreach ($slides as $slide) {
                $imagePath = Yii::getAlias('@frontend/web'. $slide['image']);
                $description = $slide['description'];
                $img = $this->convertFileToImage($imagePath, $description);
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


    public function actionMenu()
    {
        var_dump(Page::id(20)->getMenu());
    }


    public function actionTestTrainers()
    {
        $page = Page::id(26);
        print_r($page->pageParams);
    }

    public function actionTest()
    {
        CmsSettings::initSettings();
    }


    public function actionIndex()
    {

        $page = Page::id(18);


        $json = '{
  "sectionsParams": {
    "0": {
      "mainHeaderTypePart": "гранд отель",
      "greetingHeader": "Добро пожаловать!",
      "greetingContent": "Получите удовольствие, выбрав восхитительную атмосферу премиум комплекса «Бежица».",
      "sloganFirst": "Ваш",
      "sloganSecond": "изысканный и комфортный отдых",
      "sloganThird": "МИРОВОГО КЛАССА",
      "title": "",
      "type": "hotel_main"
    },
    "1": {
      "slides": {
        "0": {
          "tabTitle": "Ресторан \"Бежица\"",
          "tabContent": "<p style=\"\n    text-align: justify;\n\">\n\t\t\t\t\t\t\t\t\t\tГастрономическая кухня базируется на использовании сезонных продуктов от приватных фермеров и современных кулинарных техниках.<br>\n\t\t\t\t\t\t\t\t\t\tРесторан предлагает блюда, в которых переосмыслена старинная рецептура, а знакомые вкусы открываются в оригинальных текстурах, формах и сочетаниях.\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<em>\n\t\t\t\t\t\t\t\t\t\t\tИдеально для изысканного банкета или свадебного торжества!\n\t\t\t\t\t\t\t\t\t\t</em>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p class=\"increased-margin\">\n\t\t\t\t\t\t\t\t\t\tШеф-повар –&nbsp;Фёдор Гадалов.\n\t\t\t\t\t\t\t\t\t</p>",
          "type": "simple_slide"
        },
        "1": {
          "tabTitle": "Лобби бар",
          "tabContent": "<p style=\"\n    text-align: justify;\n\">\n\t\t\t\t\t\t\t\t\t\tГастрономическая кухня базируется на использовании сезонных продуктов от приватных фермеров и современных кулинарных техниках.<br>\n\t\t\t\t\t\t\t\t\t\tРесторан предлагает блюда, в которых переосмыслена старинная рецептура, а знакомые вкусы открываются в оригинальных текстурах, формах и сочетаниях.\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<em>\n\t\t\t\t\t\t\t\t\t\t\tИдеально для изысканного банкета или свадебного торжества!\n\t\t\t\t\t\t\t\t\t\t</em>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p class=\"increased-margin\">\n\t\t\t\t\t\t\t\t\t\tШеф-повар –&nbsp;Фёдор Гадалов.\n\t\t\t\t\t\t\t\t\t</p>",
          "type": "simple_slide"
        }
      },
      "detailButtonText": "Узнать больше",
      "title": "Мероприятия и свадьбы",
      "type": "slider_tabs"
    }
  },
  "isEnabled": false
}';

//        /**
//         * @var LandingPage $page
//         */
//        $mainSectionParams = new HotelMainSectionParams();
//        $mainSectionParams->mainHeaderTypePart = 'гранд отель';
//        $mainSectionParams->greetingHeader     = 'Добро пожаловать!';
//        $mainSectionParams->greetingContent    = 'Получите удовольствие, выбрав восхитительную атмосферу премиум комплекса «Бежица».';
//        $mainSectionParams->sloganFirst        = 'Ваш';
//        $mainSectionParams->sloganSecond       = 'изысканный и комфортный отдых';
//        $mainSectionParams->sloganThird        = 'МИРОВОГО КЛАССА';
//
//
//
//
//
//  //      var_dump($mainSectionParams->toPageFields());
//
//        $page->pageParams->emptySections();
//        $page->pageParams->addSection($mainSectionParams);
//       // $page->pageParams->addSection($sliderTabsSectionParams);
//
//        $page->save();


        $page->pageParams->initFromArray(json_decode($json, true));
        $page->save();

        print_r($page);
    }
}