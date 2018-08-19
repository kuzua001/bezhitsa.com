import {Component, ElementRef, EventEmitter, OnInit, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
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
import { ScrollToService } from 'ng2-scroll-to-el';
import {ImageFilter} from "../models/image-filter";

declare var $: any;

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

    private images: CmsImage[] = null;

    imageDataForUpdateEditing: ReadFile;

    editingImage: CmsImage | null;

    currentPreview: Preview | null = null;

    tagAddingMode: boolean = false;

    modalRef: BsModalRef;

    public focusEventEmitter = new EventEmitter<boolean>();

    private imageTypes: Array<ImageType> = null;

    private showDescriptions: boolean = false;

    @ViewChildren('imagesList') imageList;
    @ViewChild('imageEditor') imageEditor: TemplateRef<any>;
    @ViewChild('newTag') newTag: ElementRef;
    @ViewChild('bottom') bottom: ElementRef;

    constructor(private modelService: ModelService,
                private modalService: BsModalService,
                private selectItemService: SelectItemService,
                private scrollService: ScrollToService) {
        this.imageDataForUpdateEditing = null;
        this.selectItemService.event$.subscribe((event: SelectItemEvent) => {
           if (event.itemType === SelectItemEvent.Type.ApplyFilter) {
               const filter: ImageFilter = event.payload.filter;
               this.showDescriptions = filter.showDescriptions;
               this.loadImages(filter);
           }
        });
    }

    private loadImageTypes()
    {
        this.modelService.getImageTypes().subscribe(types => {
            this.imageTypes = types;
        });
    }

    openEditor(image: CmsImage, orientation: boolean) {
        this.editingImage = image;

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
        setTimeout(() => {
            this.focusEventEmitter.emit(mode);
        }, 10);
    }

    private removeTag(tag: string) {
        this.editingImage.removeTag(tag);
    }

    private addTag(tag: string, keepInput: boolean = false) {
        this.editingImage.addTag(tag);
        this.selectItemService.emitEventOfType(SelectItemEvent.Type.NewTag, {tag : tag});
        if (!keepInput) {
            this.setTagEditingMode(false);
        }
    }

    private loadImages(filter: ImageFilter = null) {
        this.modelService.getImages(filter).subscribe(images => {
            images.forEach((rawImage, index) => {images[index] = CmsImage.fromRaw(rawImage);});
            this.images = images;
        });
    }

    ngOnInit() {
        this.loadImages();
        this.loadImageTypes();
    }

    private limit = 19;

    public loadMore()
    {
        if (this.images && this.limit < this.images.length) {
            this.limit += 14;
        }

        this.scrollService.scrollTo(this.bottom.nativeElement);
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
