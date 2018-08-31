import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CmsImage} from "../models/cms-image";
import {BsModalService} from "ngx-bootstrap";
import {SelectItemService} from "../select-item.service";

@Component({
    selector: 'app-image-chooser-popup',
    templateUrl: './image-chooser-popup.component.html',
    styleUrls: ['./image-chooser-popup.component.css'],
})
export class ImageChooserPopupComponent implements OnInit {


    @Input() multiple: boolean = false;
    @Input() fixedImageTypeId: number = null;

    @Output() selectedImageId = new EventEmitter<CmsImage>();
    @Output() selectedImageIds = new EventEmitter<Array<CmsImage>>();

    private modalRef;

    public constructor(
        private modalService: BsModalService,
        private selectItemService: SelectItemService
    ) {}

    public showPopup()
    {
        this.modalRef = this.modalService.show(this.imageChooser, {
            class: 'image-chooser-popup'
        });
    }

    public closePopup()
    {
        this.modalRef.hide();
    }

    public outputImageId(imageId)
    {
        this.selectedImageId.emit(imageId);
    }

    public outputImageIds(imageIds)
    {
        this.selectedImageId.emit(imageIds);
    }

    @ViewChild('imageChooser') imageChooser;

    ngOnInit() {
    }
}
