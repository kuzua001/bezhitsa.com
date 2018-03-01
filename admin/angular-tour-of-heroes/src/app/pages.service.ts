import { Injectable } from '@angular/core';
import { Page } from './models/page.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PagesService {

  private pagesUrl = '/admin/api/page';

  constructor(private http: HttpClient,
              private pagesService: PagesService) {}

  getPages(): Observable<Page[]> {
      return this.http.get<Page[]>(this.pagesUrl);
  }
}