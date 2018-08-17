import {Preview} from "./preview";
import {BaseApiModel} from "./base-api-model";

export class ImageType extends BaseApiModel
{
    protected static apiMethodName = 'imageTypes';

    public id: number;
    public name: string;
    public previewSettings: Preview[];
}