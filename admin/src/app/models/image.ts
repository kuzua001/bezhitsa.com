import {BaseApiModel} from "./base-api-model";

export class Image extends BaseApiModel {
    protected static apiMethodName = 'images';

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
}