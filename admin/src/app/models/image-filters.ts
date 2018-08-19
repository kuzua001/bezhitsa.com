import {BaseApiModel} from "./base-api-model";
import {ImageType} from "./image-type";

export class ImageFilters extends BaseApiModel {
    protected static apiMethodName = 'filters';

    public tags: Array<string>;

    public types: Array<ImageType>;
}