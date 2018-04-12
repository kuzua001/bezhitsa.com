<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 4/13/18
 * Time: 12:13 AM
 */

namespace console\controllers;

use Exception;
use Yii;
use yii\console\Controller;

class BuildController extends Controller
{
    const WEBPACK_RUNTIME_LOG_PATH = '@frontend/runtime/webpack/build.log';
    const WEBPACK_CONFIG_TEMPLATE_PATH = '@frontend/config/webpack-template.txt';
    const WEBPACK_CONFIG_SCRIPT_PATH = '@frontend/config/webpack.php';
    const UGLIFY_DIST_REGEXP = '/cached\_uglify\/index\.([a-z\d]*)\.js/';
    const DIST_VAR_NAME = '{BUILD_VERSION}';

    public function actionPostBuild() {
        $this->processWebpack();
    }

    private function safeGetContents($fname) {
        $contents = null;

        try {
            $fp       = fopen($fname, 'r');
            $contents = stream_get_contents($fp);
            fclose($fp);
        } catch (Exception $ex) {

        }

        return $contents;
    }

    private function safePutContents($fname, $contents) {
        try {
            $fp       = fopen($fname, 'w');
            fwrite($fp, $contents);
            fclose($fp);
        } catch (Exception $ex) {
            return false;
        }

        return true;
    }

    private function getWebpackLogContents() {
        return $this->safeGetContents(Yii::getAlias(self::WEBPACK_RUNTIME_LOG_PATH));
    }

    private function processWebpack() {
        $contents = $this->getWebpackLogContents();

        if (null === $contents) {
            return;
        }

        preg_match(self::UGLIFY_DIST_REGEXP, $contents, $match);
        $distHash = isset($match[1]) ? $match[1] : null;

        if (null !== $distHash) {
            $this->updateWebpackConfig($distHash);
        }
    }

    private function updateWebpackConfig($distHash) {
        $template = $this->safeGetContents(Yii::getAlias(self::WEBPACK_CONFIG_TEMPLATE_PATH));
        $contents = str_replace(self::DIST_VAR_NAME, $distHash, $template);
        $this->safePutContents(Yii::getAlias(self::WEBPACK_CONFIG_SCRIPT_PATH), $contents);
    }
}