import {LanguageService} from "../services/language.service";

export class BaseApiModel {
    protected static apiMethodName;

    protected static passLang = false;

    protected static languageService: LanguageService|null = null;

    public static setupLanguageService(languageService: LanguageService) {
        this.languageService = languageService;
    }

    public static getApiMethodName(id?: number): string
    {
        let result = this.apiMethodName + (id ? ('/' + id) : '');

        if (this.passLang && this.languageService) {
            result += '?lang='  + this.languageService.getLanguage();
        }

        return result;
    }
}