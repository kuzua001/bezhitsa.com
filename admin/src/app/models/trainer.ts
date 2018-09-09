import {BaseApiModel} from "./base-api-model";

export class Trainer extends BaseApiModel {
    protected static apiMethodName = 'trainer';

    protected static passLang = true;

    public id: number;
    public name: string;
    public position: string;
    public description: string;
    public vk_link: string;
    public fb_link: string;
    public inst_link: string;
    public alias: string;
    public two_lines_position: number;
    public two_lines_position_en: number;
    public img_id: number;
    public img_src: string;
    public n: number;
    public has_vk: number;
    public has_fb: number;
    public has_inst: number;
    public published: number;

    public forSave(): any {
        let result = Object.assign({}, this);
        delete result.img_src;
        return result;
    }
}