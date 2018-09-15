import {BaseApiModel} from "./base-api-model";

export class RestaurantMenu extends BaseApiModel {
    public static ID_MENU_MAIN = 1;
    public static ID_MENU_BANKET = 2;
    public static ID_MENU_BAR = 3;

    public static getCategories()
    {
        return [
            this.ID_MENU_MAIN,
            this.ID_MENU_BANKET,
            this.ID_MENU_BAR
        ];
    }

    public static getMenuCategoryNameById(catId)
    {
        switch (catId) {
            case this.ID_MENU_MAIN:
                return 'Основное меню';
            case this.ID_MENU_BANKET:
                return 'Банкетное меню';
            case this.ID_MENU_BAR:
                return 'Барная карта';
        }
    }

    protected static apiMethodName = 'menu';

    protected static passLang = true;

    public id: number;
    public menu_type: number;
    public category_title: string;
    public title: string;
    public price: number;
    public size: number;
    public n: number;


    public static fromRaw(raw: any): RestaurantMenu {
        return Object.assign(new RestaurantMenu(), raw);
    }
}