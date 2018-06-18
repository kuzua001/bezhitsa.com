import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import {SelectItemEvent} from "./models/select-item-event";

@Injectable()
export class SelectItemService {
  private _event = new Subject();
  event$ = this._event.asObservable();

  emit(selectItem: SelectItemEvent) {
    this._event.next(selectItem);
  }
}