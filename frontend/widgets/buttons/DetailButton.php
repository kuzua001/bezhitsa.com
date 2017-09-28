<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 9/3/17
 * Time: 8:04 PM
 */

namespace frontend\widgets\buttons;

use yii\base\Widget;
use yii\helpers\Html;

class DetailButton extends Widget
{

    public $hasDetailButton;
    public $detailButtonLink;
    public $detailButtonText;
    public $blackText;
    public $isColored;
    public $bgColor;


    public function run()
    {

        return $this->hasDetailButton ? Html::tag('a', Html::tag('button', !empty($this->detailButtonText) ? $this->detailButtonText : 'подробнее', [
                    'class' => 'detail-button-element' . ($this->blackText ? ' black-text' : ''),
                    'style' => $this->isColored ? 'background-color: ' . $this->bgColor : ''
                ]
            ),
            [
                'href' => $this->detailButtonLink,
            ]
        ) : '';
    }

}