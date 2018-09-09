import {Injectable} from '@angular/core';
import {Page} from './models/page.interface';
import {PageFields} from './models/page-fields.interface';
import {Domain} from './models/domain.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject, pipe} from 'rxjs';
import {Action} from "./models/action";
import {PageType} from "./models/page-type";

@Injectable()
export class PagesService {

    private pagesUrl = '/api/page';
    private pageFieldsUrl = '/api/pageFields';
    private domainsUrl = '/api/domain';
    private actionsUrl = '/api/actions';
    private pageTypesUrl = '/api/pageTypes';

    constructor(private http: HttpClient) {
    }

    createPage(pageData: any): Observable<Page> {
        return this.http.post<Page>(this.pagesUrl, pageData);
    }

    getPages(): Observable<Page[]> {
        return this.http.get<Page[]>(this.pagesUrl);
    }

    getPage(pageId: number): Observable<Page> {
        return this.http.get<Page>(this.pagesUrl  + '/' + pageId);
    }

    getPageFields(pageId: number, language: number): Observable<PageFields> {
        return this.http.get<PageFields>(this.pageFieldsUrl + '/' + pageId + '?lang=' + language);
    }

    savePageFields(pageId: number, pageFields: Object, language: number) {
        return this.http.put(this.pageFieldsUrl + '/' + pageId + '?lang=' + language, pageFields);
    }

    deletePage(pageId: number) {
        return this.http.delete(this.pagesUrl + '/' + pageId);
    }

    getDomains(): Observable<Domain[]> {
        return this.http.get<Domain[]>(this.domainsUrl);
    }

    getActions(): Observable<Action[]> {
        return this.http.get<Action[]>(this.actionsUrl);
    }

    getPageTypes(): Observable<PageType[]> {
        return this.http.get<PageType[]>(this.pageTypesUrl);
    }
}