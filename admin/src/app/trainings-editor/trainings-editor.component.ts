import {Component, OnInit} from '@angular/core';
import {SelectItemService} from "../select-item.service";
import {ModelService} from "../model.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Room} from "../models/room";

@Component({
    selector: 'app-trainings-editor',
    templateUrl: './trainings-editor.component.html',
    styleUrls: ['../common/object-editor.component.css', './trainings-editor.component.css'],
})
export class TrainingsEditorComponent {

    modalRef: BsModalRef;

    private room: Room;

    constructor(private selectItemService: SelectItemService,
                private modelService: ModelService,
                private modalService: BsModalService) {
    }
}
