<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 8/12/18
 * Time: 11:16 AM
 */

namespace frontend\components;


use frontend\components\annotations\DefaultAnnotationProcessor;
use frontend\components\annotations\ItemTitleKeyAnnotationProcessor;
use frontend\components\annotations\RequiredAnnotationProcessor;
use frontend\components\annotations\SeparatedAnnotationParser;
use frontend\components\annotations\TabAnnotationProcessor;
use frontend\components\annotations\TitleAnnotationProcessor;
use frontend\components\annotations\TypeAnnotationProcessor;

/**
 * Class DocCommentParser
 * @property $type         string|null
 * @property $itemTitleKey string|null
 * @property $title        string|null
 * @property $default      string|null
 * @property $tab          string|null
 * @property $separated    boolean
 * @property $required     boolean
 * @package frontend\components
 */
class DocCommentParser
{
    private $comment;

    /**
     * @var array
     */
    private $values = [];

    /**
     * @var AnnotationProcessorInterface[]
     */
    private $processors = [];

    public function __construct($comment)
    {
        $this->comment = $comment;
        $this->initAnnotationsProcessors();
        $this->processComment();
    }

    private function initAnnotationsProcessors()
    {
        $this->processors = [
            new TypeAnnotationProcessor(),
            new TitleAnnotationProcessor(),
            new DefaultAnnotationProcessor(),
            new TabAnnotationProcessor(),
            new SeparatedAnnotationParser(),
            new RequiredAnnotationProcessor(),
            new ItemTitleKeyAnnotationProcessor(),
        ];
    }

    private function processComment()
    {
        $lines = explode("\n", $this->comment);
        foreach ($lines as $line) {
            foreach ($this->processors as $processor) {
                if ($processor->checkLine($line)) {
                    $this->values[$processor->getKey()] = $processor->getValue($line);
                }
            }
        }
    }

    /**
     * @param $key
     * @return mixed|string
     */
    public function __get($key) {
        return isset($this->values[$key]) ? $this->values[$key] : '';
    }
}