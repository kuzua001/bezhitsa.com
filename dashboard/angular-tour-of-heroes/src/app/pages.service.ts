import { Injectable } from '@angular/core';
import { Page } from './models/page.interface';
import { PageFields } from './models/page-fields.interface';
import { Domain } from './models/domain.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';

@Injectable()
export class PagesService {

  private pagesUrl      = 'http://hotel/admin/api/page';
  private pageFieldsUrl = 'http://hotel/admin/api/pageFields';
  private domainsUrl    = 'http://hotel/admin/api/domain';

  constructor(private http: HttpClient) {}

  getPages(): Observable<Page[]> {
      return this.http.get<Page[]>(this.pagesUrl);
  }

  getPageFields(pageId: number): Observable<PageFields> {
    return this.http.get<PageFields>(this.pageFieldsUrl + '/' + pageId);
  }

  savePageFields(pageId: number, pageFields: Object) {
      return this.http.put(this.pageFieldsUrl + '/' + pageId, pageFields);
  }

  deletePage(pageId: number) {
      return this.http.delete(this.pageFieldsUrl + '/' + pageId);
  }

  getDomains(): Observable<Domain[]> {
      return this.http.get<Domain[]>(this.domainsUrl);
  }
}