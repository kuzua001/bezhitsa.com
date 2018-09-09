import {
    Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild,
    ViewChildren
} from '@angular/core';
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

    @Input() selectionMode: boolean = false;

    @Input() multiple: boolean = false;


    @Output() selectedImageId = new EventEmitter<CmsImage>();
    @Output() selectedImageIds = new EventEmitter<Array<CmsImage>>();

    private images: CmsImage[] = null;

    imageDataForUpdateEditing: any = null;

    editingImage: CmsImage | null;

    currentPreview: Preview | null = null;

    tagAddingMode: boolean = false;

    modalRef: BsModalRef;

    modalRefConfirm: BsModalRef;

    public focusEventEmitter = new EventEmitter<boolean>();

    private imageTypes: Array<ImageType> = null;

    private showDescriptions: boolean = false;

    preSelectedImageMap = null;
    preSelectedImagesMap = [];

    @Input()
    preSelectedImageIds: Array<number> = [];

    @ViewChildren('imagesList') imageList;
    @ViewChild('imageEditor') imageEditor: TemplateRef<any>;
    @ViewChild('confirmDelete') confirmDelete: ElementRef;
    @ViewChild('newTag') newTag: ElementRef;
    @ViewChild('bottom') bottom: ElementRef;
    @ViewChild('wrapper') wrapper: ElementRef;

    private actualSize: number = null;

    onResize($event)
    {
        this.actualSize = this.wrapper.nativeElement.offsetWidth;
        console.log(this.actualSize);
    }

    public loadMore()
    {
        if (this.images && this.limit < this.images.length) {
            this.limit += 14;
        }

        this.scrollService.scrollTo(this.bottom.nativeElement);
    }

    public markImage(i: number)
    {
        let imageId = this.images[i].id;

        if (this.multiple) {
            if (this.preSelectedImagesMap[imageId] === undefined) {
                this.preSelectedImagesMap[imageId] = true;
            } else {
                this.preSelectedImagesMap[imageId] = !this.preSelectedImagesMap[imageId];
            }
        } else {
            this.preSelectedImageMap = imageId;
        }
    }

    public detectOrientation(i: number)
    {
        let image = this.imageList.toArray()[i].nativeElement;

        if (image.naturalWidth > image.naturalHeight) {
            image.classList.add('landscape');
        } else if (image.naturalWidth < image.naturalHeight) {
            image.classList.add('portrait');
        }
    }

    @Input()
    initiallyFilterByTypeId: number | null = null;

    private loadImages(filter: ImageFilter = null, force: boolean = false) {

        if (this.initiallyFilterByTypeId && filter === null) {
            filter = new ImageFilter();
            filter.selectedTags = [];
            filter.selectedType = this.imageTypes.find(t => t.id === this.initiallyFilterByTypeId);
        }

        this.modelService.getImages(filter).subscribe(images => {
            images.forEach((rawImage, index) => {images[index] = CmsImage.fromRaw(rawImage);});
            this.images = images.reverse();
        });
    }

    public getWrapperClass(): string
    {
        let result = 'wrapper';

        if (this.actualSize < 400)
        {
            result += ' one';
        }

        if (this.actualSize >= 400 && this.actualSize < 900)
        {
            result +=  ' two';
        }

        if (this.actualSize >= 900 && this.actualSize < 1200)
        {
            result +=  ' four';
        }

        if (this.actualSize >= 1200)
        {
            result +=  ' eight';
        }

        return result;
    }

    private filter;

    constructor(private modelService: ModelService,
                private modalService: BsModalService,
                private selectItemService: SelectItemService,
                private scrollService: ScrollToService) {
        this.imageDataForUpdateEditing = null;
        this.filter = new ImageFilter();

        this.selectItemService.event$.subscribe((event: SelectItemEvent) => {
           if (event.itemType === SelectItemEvent.Type.ApplyFilter) {
               this.filter = event.payload.filter;
               this.showDescriptions = this.filter.showDescriptions;
               console.log(this.filter);
               this.loadImages(this.filter);
           } else if (event.itemType === SelectItemEvent.Type.LanguageChange) {
                this.loadImages(this.filter, true);
            } else if (event.itemType === SelectItemEvent.Type.ImageChooserApply) {
                if (this.multiple) {
                    const result = [];
                    for (let imageId in this.preSelectedImagesMap) {
                        if (!this.preSelectedImagesMap[imageId]) continue;
                        let image = this.images.find(i => i.id === Number(imageId));
                        if (image !== undefined) {
                            result.push(image);
                        }
                    }
                    if (result.length) {
                        this.selectedImageIds.emit(result);
                    }
                } else {
                    let image = this.images.find(i => i.id === Number(this.preSelectedImageMap));
                    if (image !== undefined) {
                        this.selectedImageId.emit(image);
                    }
                }
            }
        });
    }

    private load()
    {
        this.modelService.getImageTypes().subscribe(types => {
            this.imageTypes = types;
            this.loadImages();
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
        this.modelService.saveImage(this.editingImage, this.imageDataForUpdateEditing, (newImage: CmsImage) => {
            let index = this.images.findIndex(i => i.id === newImage.id);
            this.images[index] = CmsImage.fromRaw(newImage);
        });
    }

    public onConfirmDelete(): void {
        this.deleteEditingImage();
        this.modalRefConfirm.hide();
    }

    public onCancelDelete(): void {
        this.modalRefConfirm.hide();
    }


    deleteEditingImageWithConfirm()
    {
        this.modalRefConfirm = this.modalService.show(this.confirmDelete);
    }

    private deleteEditingImage()
    {
        this.modelService.deleteImage(this.editingImage).subscribe(() => {
            this.modalRef.hide();
            this.images = this.images.filter(i => i.id !== this.editingImage.id);
            this.editingImage = null;
        });
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

    ngOnInit() {
        this.load();
        this.actualSize = this.wrapper.nativeElement.offsetWidth;

        console.log(this.preSelectedImageIds);

        for (let id of this.preSelectedImageIds) {
            this.preSelectedImagesMap[id] = true;
        }
    }

    private limit = 50;

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
        this.modelService.createImage($event, this.filter, (response) => {
            if (response.status === 'success') {
                let image = CmsImage.fromRaw(response.image);
                this.images.unshift(image);
            }
        });
    }

    public droppedForUpdate($event: ReadFile) {
        console.log($event);
        this.imageDataForUpdateEditing = {
            content: $event.content,
            name: $event.name
        };
    }
}
