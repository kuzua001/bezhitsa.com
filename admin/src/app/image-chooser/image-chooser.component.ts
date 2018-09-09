import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren} from '@angular/core';
import {CmsImage} from "../models/cms-image";
import {ModelService} from "../model.service";
import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";
import {ImageFilter} from "../models/image-filter";
import {ScrollToService} from "ng2-scroll-to-el";
import {ImageType} from "../models/image-type";

@Component({
  selector: 'app-image-chooser',
  templateUrl: './image-chooser.component.html',
  styleUrls: ['./image-chooser.component.css', '../images/images.component.css']
})
export class ImageChooserComponent implements OnInit {

    @ViewChildren('imagesList') imageList;

    private images: CmsImage[];


    preSelectedImageId = null;
    preSelectedImageIds = [];

    @ViewChild('bottom') bottom: ElementRef;

    private limit: number = 10;

    @Input() multiple: boolean = false;
    @Input() fixedImageTypeId: number = null;

    @Output() selectedImageId = new EventEmitter<CmsImage>();
    @Output() selectedImageIds = new EventEmitter<Array<CmsImage>>();



    constructor(
        private modelService: ModelService,
        private selectItemService: SelectItemService,
        private scrollService: ScrollToService
    )
    {
        this.selectItemService.event$.subscribe((event: SelectItemEvent) => {
            if (event.itemType === SelectItemEvent.Type.ImageChooserApply) {
                if (this.multiple) {
                    const result = [];
                    for (let imageId in this.preSelectedImageIds) {
                        if (!this.preSelectedImageIds[imageId]) continue;
                        result.push(this.images.find(i => i.id === Number(imageId)));
                    }
                    this.selectedImageIds.emit(result);
                } else {
                    this.selectedImageId.emit(this.images.find(i => i.id === Number(this.preSelectedImageId)));
                }
            }
        });

        this.selectItemService.event$.subscribe((event: SelectItemEvent) => {
            if (event.itemType === SelectItemEvent.Type.ApplyFilter) {
                const filter: ImageFilter = event.payload.filter;
                this.loadImages(filter);
            }
        });
    }

    public dropped($event)
    {

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
            if (this.preSelectedImageIds[imageId] === undefined) {
                this.preSelectedImageIds[imageId] = true;
            } else {
                this.preSelectedImageIds[imageId] = !this.preSelectedImageIds[imageId];
            }
        } else {
            this.preSelectedImageId = imageId;
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

    private loadImages(filter: ImageFilter|null = null) {
        this.modelService.getImages(filter).subscribe(images => {
            images.forEach((rawImage, index) => {images[index] = CmsImage.fromRaw(rawImage);});
            this.images = images;
        });
    }

    ngOnInit() {
        this.loadImages();
    }

}
