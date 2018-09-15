import {LanguageService} from "../services/language.service";

export class BaseApiModel {
    protected static apiMethodName;

    protected static passLang = false;

    protected static languageService: LanguageService|null = null;

    public static setupLanguageService(languageService: LanguageService) {
        this.languageService = languageService;
    }

    public static getApiMethodName(id?: number, params?: Map<string, string>): string
    {
        let result = this.apiMethodName + (id ? ('/' + id) : '');

        if (!params) {
            params = new Map<string, string>();
        }

        if (this.passLang && this.languageService) {
            params.set('lang', this.languageService.getLanguage().toString());
        }

        if (params && params.size) {
            let parts = [];
            params.forEach((value, key) => parts.push(key + '=' + value));
            result += '?' + parts.join('&');
        }

        return result;
    }
}