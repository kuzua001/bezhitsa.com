import {BaseApiModel} from "./base-api-model";

export class Room extends BaseApiModel {
    protected static apiMethodName = 'room';

    public id: number;
    public type_id: number;
    public price_from: number;
    public square: number;
    public bed_type: number;
    public persons_type: number;
    public image_id: number;
    public title: string;
    public text: string;
    public alias: string;
    public tl_room_type: number;


    public forSave(): any {
        let result = Object.assign({}, this);
        return result;
    }
}