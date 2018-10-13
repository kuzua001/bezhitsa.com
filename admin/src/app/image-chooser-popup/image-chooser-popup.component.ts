import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CmsImage} from "../models/cms-image";
import {BsModalService} from "ngx-bootstrap";
import {SelectItemService} from "../select-item.service";
import {ModelService} from "../model.service";

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

    @Input() preSelectedImageIds: Array<number> = [];

    private modalRef;

    private editingImage: CmsImage|null = null;

    public constructor(
        private modalService: BsModalService,
        private modelService: ModelService,
        private selectItemService: SelectItemService
    ) {}

    public showPopup()
    {
        this.modalRef = this.modalService.show(this.imageChooser, {
            class: 'image-chooser-popup'
        });
    }

    public getCanonicalUrl(url: string)
    {
        return '/' + url.replace(/^\/|\/$/g, '');
    }

    public saveEditingImage()
    {
        let self = this;
        this.modelService.saveImage(this.editingImage, null, function() {
            self.closePopup();
        });
    }

    public showFastEditor(image: CmsImage)
    {
        console.log(this.editingImage);
        this.editingImage = image;
        this.modalRef = this.modalService.show(this.fastImageEditor, {
            class: 'fast-image-editor-popup'
        });
    }

    public imageChoose()
    {
        this.selectItemService.emitImageChooserEvent();
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
        this.selectedImageIds.emit(imageIds);
    }

    @ViewChild('imageChooser') imageChooser;
    @ViewChild('fastImageEditor') fastImageEditor;

    ngOnInit() {
    }
}
