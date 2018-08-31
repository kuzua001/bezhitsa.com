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

    private images = [];

    public constructor(private modelService: ModelService) {
        super();
    }




    public forSave(): any {
        let result = Object.assign({}, this);
        return result;
    }
}