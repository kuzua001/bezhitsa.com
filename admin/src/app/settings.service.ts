import { Injectable } from '@angular/core';
import { Page } from './models/page.interface';
import { PageFields } from './models/page-fields.interface';
import { Domain } from './models/domain.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';
import {Settings} from "./models/settings";
import {Room} from "./models/room";

@Injectable()
export class SettingsService {

  private settingsUrl      = '/api/settings';

  constructor(private http: HttpClient) {}

  getSettings(siteId?: number): Observable<any> {
      return this.http.get<any>(this.settingsUrl + (siteId ? '?site_id=' + siteId : ''));
  }

  save(item: Settings) {
      return this.http.put(this.settingsUrl + '/' + item.id, item).subscribe();
  }
}