import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {ModelService} from "../model.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ReadFile} from 'ngx-file-helpers';
import {Room} from "../models/room";


@Component({
  selector: 'room-editor',
  templateUrl: './room-editor.component.html',
  styleUrls: ['../common/object-editor.component.css'],
})
export class RoomEditorComponent implements OnInit {

  modalRef: BsModalRef;

  private room: Room;

  public newImageFile: ReadFile;

  constructor(
      private selectItemService: SelectItemService,
      private modelService: ModelService,
      private modalService: BsModalService
  ) {
      selectItemService.event$.subscribe((event: SelectItemEvent) => {
          if (event.itemType === SelectItemEvent.Type.RoomSelect) {
              this.room = event.payload.room;
          }
      });

  }

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  public close() {
      this.selectItemService.emit(
          new SelectItemEvent(SelectItemEvent.Type.RoomClose, {
              roomId: this.room.id
          }));

      this.room = null;
  }

  public save()
  {
      let roomItem = Object.setPrototypeOf(this.room, Room.prototype);
      this.modelService.saveRoom(roomItem);
  }

  public delete()
  {
      this.modelService.deleteRoom(this.room)
          .subscribe(() => {
              let roomId = this.room.id;
              this.room = null;
              this.modalRef.hide();
              this.selectItemService.emit(
                  new SelectItemEvent(SelectItemEvent.Type.RoomRemove, {
                      roomId: roomId
                  }));
          });
  }

  public dropped(file: ReadFile) {
      this.newImageFile = file;
      //this.cropper.setImage(this.newImageFile.content);
  }

  public cancelImage() {
      this.newImageFile = null;
  }

  public fileOver(event) {
      console.log(event);
  }

  public fileLeave(event) {
      console.log(event);
  }


  ngOnInit() {
    this.room = null;
    this.newImageFile = null;
  }
}
