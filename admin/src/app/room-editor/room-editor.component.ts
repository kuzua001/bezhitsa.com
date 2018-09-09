import {Component, OnInit, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {ModelService} from "../model.service";
import {BsModalRef, BsModalService, SortableComponent} from "ngx-bootstrap";
import {Room} from "../models/room";
import {CmsImage} from "../models/cms-image";
import * as $ from 'jquery';
import {AppModule} from "../app.module";

@Component({
    selector: 'room-editor',
    templateUrl: './room-editor.component.html',
    styleUrls: ['../common/object-editor.component.css', './room-editor.component.css'],
})
export class RoomEditorComponent implements OnInit {

    modalRef: BsModalRef;

    private room: Room;

    constructor(private selectItemService: SelectItemService,
                private modelService: ModelService,
                private modalService: BsModalService) {
        selectItemService.event$.subscribe((event: SelectItemEvent) => {
            if (event.itemType === SelectItemEvent.Type.RoomSelect) {
                this.room = event.payload.room;
                this.reloadImages();
                if (!event.payload.initial) {
                    this.selectItemService.emitCloseAll('room');
                }
            }
        });

        this.editorOptions.btns = [
            ['strong', 'em', 'del'],
            ['link'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
        ];
    }

    public editorOptions = AppModule.editorOptions;

    public roomImages = [];

    @ViewChildren('imagesList') imageList;

    @ViewChild('sortable') sortableComponent: SortableComponent;

    removeImage(image) {
        this.roomImages = this.roomImages.filter(i => i.id != image.id);
        this.sortableComponent.writeValue(this.roomImages);
    }

    appendImages(images) {
        this.roomImages = this.roomImages.concat(images.filter(i => !this.roomImages.find(img => img.id === i.id)));
        this.sortableComponent.writeValue(this.roomImages);
    }

    public detectOrientation(i: number) {
        let image = $('.image-card img').eq(i);

        console.log(image.get(0));

        if (image.width() > image.height()) {
            image.addClass('landscape');
        } else if (image.width() < image.height()) {
            image.addClass('portrait');
        }
    }

    private reloadInProgress = false;

    private reloadImages() {
        this.roomImages = [];
        let observable = this.modelService.getRoomImages(this.room);

        if (observable !== null && !this.reloadInProgress) {

            this.reloadInProgress = true;

            observable.subscribe(
                (images) => {
                    images.forEach(i => {
                        this.roomImages.push(CmsImage.fromRaw(i));
                    });
                    this.sortableComponent.writeValue(this.roomImages);
                    this.reloadInProgress = false;
                }, (error) => {
                    this.reloadInProgress = false;
                }
            );
        }
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    public close() {
        if (this.room !== null) {
            this.selectItemService.emit(
                new SelectItemEvent(SelectItemEvent.Type.RoomClose, {
                    roomId: this.room.id
                })
            );
        }

        this.room = null;
    }

    public save() {
        this.room.setImages(this.roomImages);
        this.modelService.saveRoom(this.room);
    }

    public delete() {
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

    ngOnInit() {
        this.room = null;
    }
}
