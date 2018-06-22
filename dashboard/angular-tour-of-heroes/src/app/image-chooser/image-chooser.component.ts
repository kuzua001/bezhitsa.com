import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Image} from "../models/image";
import {ModelService} from "../model.service";

@Component({
  selector: 'app-image-chooser',
  templateUrl: './image-chooser.component.html',
  styleUrls: ['./image-chooser.component.css']
})
export class ImageChooserComponent implements OnInit {

    private images: Image[];

    @Output() selectedImageId = new EventEmitter<number>();

    constructor(private modelService: ModelService) { }

    onSelectImage(imageId: number) {
        this.selectedImageId.emit(imageId);
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
