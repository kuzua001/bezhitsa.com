import {BaseApiModel} from "./base-api-model";
import {ModelService} from "../model.service";
import {CmsImage} from "./cms-image";
import {HttpClient} from "../../../../frontend/web/js/node_modules/ngx-checkbox/node_modules/@angular/common/http/src/client";
import {LanguageService} from "../services/language.service";
import {SelectItemService} from "../select-item.service";
import {Observable} from "rxjs/Rx";

export class Room extends BaseApiModel {
    protected static apiMethodName = 'room';

    protected static passLang = true;

    public id: number;
    public type_id: number;
    public price_from: number;
    public square: number;
    public bed_type: number;
    public persons_type: number;
    public image_ids: string;
    public title: string;
    public text: string;
    public alias: string;
    public tl_room_type: number;
    public n: number;
    public published: number;

    private images = [];

    public static fromRaw(rawRoom: any): Room {
        return Object.assign(new Room(), rawRoom);
    }

    public setImages(images: Array<CmsImage>) {
        this.images = images;
    }

    public forSave(): any {
        this.image_ids = this.images.map(i => i.id).join(',');
        let result = Object.assign({}, this);
        return result;
    }
}