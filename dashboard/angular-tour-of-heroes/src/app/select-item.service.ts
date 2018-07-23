import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import {SelectItemEvent} from "./models/select-item-event";

@Injectable()
export class SelectItemService {
  private _event = new Subject();
  event$ = this._event.asObservable();

  emitEventOfType(type: SelectItemEvent.Type) {
    this.emit(new SelectItemEvent(type, {}));
  }

  emitImageChooserEvent() {
    this.emitEventOfType(SelectItemEvent.Type.ImageChooserApply);
  }

  emit(selectItem: SelectItemEvent) {
    this._event.next(selectItem);
  }
}