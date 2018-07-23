import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModelService} from "../model.service";
import {Room} from "../models/room";
import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['../common/object-list.component.css'],
})
export class RoomsComponent implements OnInit {

  @ViewChild('roomsList') roomsContainer: any;

  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  public rooms: Room[];

  public selectedRoom: Room;

  public newRoom: Room;

  constructor(
      private modelService: ModelService,
      private selectItemService: SelectItemService,
      private modalService: BsModalService
  ) {
    this.newRoom = new Room();

      selectItemService.event$.subscribe((event: SelectItemEvent) => {
          if (event.itemType === SelectItemEvent.Type.RoomRemove) {
              this.rooms = this.rooms.filter(t => t.id !== event.payload.roomId);
          }
      });

      selectItemService.event$.subscribe((event: SelectItemEvent) => {
          if (event.itemType === SelectItemEvent.Type.RoomClose) {
              if (this.selectedRoom.id == event.payload.roomId) {
                this.unselectRoom();
              }
          }
      });
  }

  private loadRooms()
  {
    this.modelService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  private unselectRoom()
  {
    this.selectedRoom = null;
  }

  public loadRoom(room: Room) {
    this.selectedRoom = room;
      this.selectItemService.emit(new SelectItemEvent(
          SelectItemEvent.Type.RoomSelect,
          {
              room : room
          }
      ));
  }

  public createNewRoom(newRoomName) {
    this.newRoom.title = newRoomName;

    this.modelService.createRoom(this.newRoom).subscribe(room => {
      this.rooms.push(room as Room);
      this.loadRoom(room as Room);
      this.modalRef.hide();
      this.newRoom = new Room();
      this.roomsContainer.scrollTop = this.roomsContainer.scrollHeight;
    });
  }

  ngOnInit() {
    this.loadRooms();
  }
}
