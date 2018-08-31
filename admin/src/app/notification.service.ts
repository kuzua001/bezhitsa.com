import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import {NotificationEvent} from './models/notification-event';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
  private _event = new Subject();
  event$ = this._event.asObservable();

  public error(message: string, payload: any = {}) {
    this.emit(new NotificationEvent(NotificationEvent.Status.Error, message, payload));
  }

  public onError(callback: Function) {
    this.event$.subscribe((event: NotificationEvent) => {
      if (event.status === NotificationEvent.Status.Error) {
        callback(event);
      }
    });
  }

  emit(event: NotificationEvent) {
    this._event.next(event);
  }
}