import {BaseApiModel} from "./base-api-model";
import {ImageType} from "./image-type";

export class ImageFilter {
    public selectedTags: Array<string> = [];

    public selectedType: ImageType | null = null;

    public showDescriptions: boolean = false;
}