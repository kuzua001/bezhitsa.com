import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModelService} from "../model.service";
import {Room} from "../models/room";
import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {State} from "../models/state";
import {bindToComponentState} from "../storage";

@Component({
    selector: 'rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['../common/object-list.component.css'],
})
export class RoomsComponent extends State implements OnInit {

    @ViewChild('roomsList') roomsContainer: any;

    modalRef: BsModalRef;

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    public rooms: Room[];

    processLoadedState() {
        let state = this.getState();
        for (let key in state) {
            this[key] = state[key];
        }

        if (this.selectedRoom !== null && this.rooms) {
            this.loadRoom(this.rooms.find(r => r.id == this.selectedRoom.id), true);
        }
    }

    @bindToComponentState
    public selectedRoom: Room;

    public newRoom: Room;

    constructor(private modelService: ModelService,
                private selectItemService: SelectItemService,
                private modalService: BsModalService) {
        super();
        this.newRoom = new Room(this.modelService);

        selectItemService.event$.subscribe((event: SelectItemEvent) => {
            if (event.itemType === SelectItemEvent.Type.LanguageChange) {
                this.loadRooms(true);
            } else if (event.itemType === SelectItemEvent.Type.RoomRemove) {
                this.rooms = this.rooms.filter(t => t.id !== event.payload.roomId);
            } else if (event.itemType === SelectItemEvent.Type.RoomClose) {
                if (this.selectedRoom.id == event.payload.roomId) {
                    this.unselectRoom();
                }
            } else if (event.itemType === SelectItemEvent.Type.CloseAllSelectedItems && event.payload.model !== 'room') {
                this.unselectRoom();
            }
        });
    }

    private loadRooms(force: boolean = false) {
        this.modelService.getRooms().subscribe(rooms => {
            this.rooms = rooms;
            this.processLoadedState();
            if (force) {
                if (this.selectedRoom !== null) {
                    const selectedRoomId = this.selectedRoom.id;
                    this.selectedRoom = this.rooms.find(r => r.id == selectedRoomId);
                    this.loadRoom(this.selectedRoom);
                }
            }
        });
    }

    private unselectRoom() {
        this.selectedRoom = null;
    }

    public loadRoom(room: Room, initial: boolean = false) {
        this.selectedRoom = room;

        this.selectItemService.emit(new SelectItemEvent(
            SelectItemEvent.Type.RoomSelect,
            {
                room: room,
                initial: initial
            }
        ));
    }

    public createNewRoom(newRoomName) {
        this.newRoom.title = newRoomName;

        this.modelService.createRoom(this.newRoom).subscribe(room => {
            this.rooms.push(room as Room);
            this.loadRoom(room as Room);
            this.modalRef.hide();
            this.newRoom = new Room(this.modelService);
            this.roomsContainer.scrollTop = this.roomsContainer.scrollHeight;
        });
    }

    ngOnInit() {
        this.loadRooms();
    }
}
