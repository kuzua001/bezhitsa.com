import {BaseApiModel} from "./base-api-model";
import {Room} from "./room";

export class TrainingActivity extends BaseApiModel {
    protected static apiMethodName = 'trainingActivity';

    protected static passLang = true;

    public id: number;
    public type_id: number;
    public training_class: number;
    public title: string;
    public description: string;

    public static fromRaw(raw: any): TrainingActivity {
        return Object.assign(new TrainingActivity(), raw);
    }
}