export class Settings {
    public id: number;
    public key: string;
    public site_id: number;
    public type: string;
    public group_title: string;
    public subgroup_title: string;
    public value: string;

    public forSave(): any {
        let result = Object.assign({}, this);
        return result;
    }
}