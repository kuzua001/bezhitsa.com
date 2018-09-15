import {BaseApiModel} from "./base-api-model";
import {TrainingActivity} from "./training-activity";

export class TrainingActivityType extends BaseApiModel {
    protected static apiMethodName = 'trainingActivityType';

    protected static passLang = true;

    public id: number;
    public title: string;
    public color: string;
    public description: string;
    public short_title: string;
    public n: number;

    public static fromRaw(raw: any): TrainingActivityType {
        return Object.assign(new TrainingActivityType(), raw);
    }
}