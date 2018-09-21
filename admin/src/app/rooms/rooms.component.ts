import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModelService} from "../model.service";
import {Room} from "../models/room";
import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {State} from "../models/state";
import {bindToComponentState} from "../storage";
import {Trainer} from "../models/trainer";
import {TrainersComponent} from "../trainers/trainers.component";
import {Page} from "../models/page.interface";
import {PagesService} from "../pages.service";

@Component({
    selector: 'rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['../common/object-list.component.css'],
})
export class RoomsComponent extends State implements OnInit {

    static DETAIL_ROOM_PAGE_ID = 28;

    @ViewChild('roomsList') roomsContainer: any;

    modalRef: BsModalRef;

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    closeModal()
    {
        this.modalRef.hide();
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
                private modalService: BsModalService,
                private pagesService: PagesService) {
        super();
        this.newRoom = new Room();

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

    public reorderApply() {
        this.modelService.reorderApply('room', this.rooms);
    }

    private loadRooms(force: boolean = false) {
        this.modelService.getRooms().subscribe(rooms => {
            rooms.sort((a, b) => {
                return a.n - b.n
            });
            this.rooms = rooms.map(room => Room.fromRaw(room));
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
            this.newRoom = new Room();
            this.roomsContainer.scrollTop = this.roomsContainer.scrollHeight;
        });
    }

    private detailPage: Page | null = null;

    public getRoomPageUrl(room) {
        if (!room.alias || !room.alias.trim()) {
            return null;
        }

        if (this.detailPage !== null) {
            let aliasRegex = /<alias:(.*)>/gi;
            return this.detailPage.url.replace(aliasRegex, room.alias);
        }

        return null;
    }

    private loadDetailPage() {
        this.pagesService.getPage(RoomsComponent.DETAIL_ROOM_PAGE_ID).subscribe((page) => {
            this.detailPage = page;
        });
    }

    ngOnInit() {
        this.loadRooms();
        this.loadDetailPage();
    }
}
