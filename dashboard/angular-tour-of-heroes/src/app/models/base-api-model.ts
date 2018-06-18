export class BaseApiModel {
    protected static apiMethodName;

    public static getApiMethodName(): string
    {
        return this.apiMethodName;
    }
}