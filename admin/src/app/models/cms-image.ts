import {BaseApiModel} from "./base-api-model";
import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "./select-item-event";

export class CmsImage extends BaseApiModel {
    protected static apiMethodName = 'images';

    protected static passLang = true;

    public id: number;
    public image_type_id: number;
    public width: number;
    public height: number;
    public description: string;
    public ts_created: string;
    public alt: string;
    public title: string;
    public tags_json: string;
    public previews_json: string;
    public is_deleted: boolean;
    public filename: string;

    private orientation: boolean = false;

    private tags = null;

    public get getOrientation(): boolean{
        return this.orientation;
    }

    public setupOrientationInfo(orientation: boolean)
    {
        this.orientation = orientation;
    }

    private init()
    {
        this.tags = JSON.parse(this.tags_json);
    }

    public beforeSave()
    {
        this.tags_json = JSON.stringify(this.tags);
    }

    public static fromRaw(rawImage: any): CmsImage {
        return Object.assign(new CmsImage(), rawImage);
    }

    public addTag(tag: string) {
        if (this.tags === null) {
            this.tags = [];
        }

        if (this.tags.find(t => t === tag) === undefined) {
            this.tags.push(tag);
        }
    }

    public removeTag(tag: string) {
        this.tags = this.tags.filter(t => t !== tag);
    }

    public getTags(): Array<string> {
        if (this.tags === null) {
            this.init();
        }

        return this.tags;
    }
}