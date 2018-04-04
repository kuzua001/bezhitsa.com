import { Injectable } from '@angular/core';
import { Page } from './models/page.interface';
import { PageFields } from './models/page-fields.interface';
import { Domain } from './models/domain.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PagesService {

  private pagesUrl      = 'http://bezhitsa.test/admin/api/page';
  private pageFieldsUrl = 'http://bezhitsa.test/admin/api/pageFields';
  private domainsUrl    = 'http://bezhitsa.test/admin/api/domain';

  constructor(private http: HttpClient) {}

  getPages(): Observable<Page[]> {
      return this.http.get<Page[]>(this.pagesUrl);
  }

  getPageFields(pageId: number): Observable<PageFields> {
    return this.http.get<PageFields>(this.pageFieldsUrl + '/' + pageId);
  }


  getDomains(): Observable<Domain[]> {
      return this.http.get<Domain[]>(this.domainsUrl);
  }
}