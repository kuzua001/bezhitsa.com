import {Component, EventEmitter, Input, OnInit, Output, ViewChildren} from '@angular/core';
import {Image} from "../models/image";
import {ModelService} from "../model.service";
import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";

@Component({
  selector: 'app-image-chooser',
  templateUrl: './image-chooser.component.html',
  styleUrls: ['./image-chooser.component.css', '../images/images.component.css']
})
export class ImageChooserComponent implements OnInit {

    @ViewChildren('imagesList') imageList;

    private images: Image[];

    @Input() multiple: boolean = false;

    preSelectedImageId = null;
    preSelectedImageIds = [];

    @Output() selectedImageId = new EventEmitter<Image>();
    @Output() selectedImageIds = new EventEmitter<Array<Image>>();

    constructor(
        private modelService: ModelService,
        private selectItemService: SelectItemService,
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

    private loadImages()
    {
        this.modelService.getImages().subscribe(images => {
            this.images = images;
        });
    }

    ngOnInit() {
        this.loadImages();
    }

}
