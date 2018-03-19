import { Injectable } from '@angular/core';
import { Page } from './models/page.interface';
import { Domain } from './models/domain.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PagesService {

  private pagesUrl   = '/admin/api/page';
  private domainsUrl = '/admin/api/domain';

  constructor(private http: HttpClient) {}

  getPages(): Observable<Page[]> {
      return this.http.get<Page[]>(this.pagesUrl);
  }

  getDomains(): Observable<Domain[]> {
      return this.http.get<Domain[]>(this.domainsUrl);
  }
}