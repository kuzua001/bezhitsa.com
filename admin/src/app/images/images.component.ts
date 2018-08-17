import {Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import {ModelService} from "../model.service";
import {CmsImage} from "../models/cms-image";
import {ReadFileImpl} from "ngx-file-helpers/src/read-file-impl";
import {ReadFile} from "ngx-file-helpers";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ImageType} from "../models/image-type";
import {Preview} from "../models/preview";
import {CropperSettings, ImageCropperComponent} from "ng2-img-cropper";
import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";


declare var $: any;

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

    private images: CmsImage[];

    imageDataForUpdateEditing: ReadFile;

    editingImage: CmsImage | null;

    currentPreview: Preview | null = null;

    tagAddingMode: boolean = false;

    modalRef: BsModalRef;


    private imageTypes: Array<ImageType> = null;

    @ViewChildren('imagesList') imageList;
    @ViewChild('imageEditor') imageEditor: TemplateRef<any>;
    @ViewChild('newTag') newTag: ElementRef;

    constructor(private modelService: ModelService,
                private modalService: BsModalService) {
        this.imageDataForUpdateEditing = null;
    }

    private loadImageTypes()
    {
        this.modelService.getImageTypes().subscribe(types => {
            this.imageTypes = types;
        });
    }

    openEditor(image: CmsImage, orientation: boolean) {
        this.editingImage = CmsImage.fromRaw(image);

        if (this.imageTypes !== null) {
            const previews = this.getEditingImagePreviews();
            if (previews && previews.previewSettings[0]) {
                this.selectPreview(previews.previewSettings[0]);
            }
        }

        this.modalRef = this.modalService.show(this.imageEditor, {'class' : (orientation ? 'vertical' : '')});
    }


    public calcAspectRatio(preview: Preview)
    {
        return preview.width / preview.height;
    }

    public getEditingImagePreviews()
    {
        return this.imageTypes.find(t => t.id == this.editingImage.image_type_id);
    }

    public getAspectRatio()
    {
        return this.currentPreview.width / this.currentPreview.height;
    }

    private selectPreview(preview: Preview)
    {
        this.currentPreview = preview;
    }

    private saveEditingImage()
    {
        this.modelService.saveImage(this.editingImage);
    }

    private setTagEditingMode(mode: boolean) {
        this.tagAddingMode = mode;
        if (mode) {
            $('.tag.input').get(0).focus();
        }
    }

    private removeTag(tag: string) {
        this.editingImage.removeTag(tag);
    }

    private addTag(tag: string) {
        this.editingImage.addTag(tag);
        this.setTagEditingMode(false);
    }

    private loadImages() {
        this.modelService.getImages().subscribe(images => {
            images.forEach((rawImage, index) => {images[index] = CmsImage.fromRaw(rawImage);});
            this.images = images;
        });
    }

    ngOnInit() {
        this.loadImages();
        this.loadImageTypes();
    }

    public initImageOrientation(i: number) {
        let imageObject = this.images[i];
        let image = this.imageList.toArray()[i].nativeElement;

        let orientation = false;

        if (image.naturalWidth > image.naturalHeight) {
            image.classList.add('landscape');
        } else if (image.naturalWidth < image.naturalHeight) {
            image.classList.add('portrait');
            orientation = true;
        }

        imageObject.setupOrientationInfo(orientation);
    }

    public dropped($event: ReadFile) {
        let content = $event.content;
        this.modelService.createImage($event, (response) => {
            if (response.status === 'success') {
                this.images.unshift(response.image);
            }
        });
    }

    public droppedForUpdate($event: ReadFile) {
        this.imageDataForUpdateEditing = $event;
    }
}
