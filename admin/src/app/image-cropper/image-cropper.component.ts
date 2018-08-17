import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit,
    ViewChild
} from '@angular/core';
import {CmsImage} from "../models/cms-image";
import {Bounds, CropperSettings, ImageCropperComponent} from "ngx-img-cropper";
import {SimpleChanges} from "../../../../frontend/web/js/node_modules/@angular/core";
import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";

@Component({
    selector: 'app-image-cropper',
    templateUrl: './image-cropper.component.html',
    styleUrls: ['./image-cropper.component.css']
})
export class CustomImageCropperComponent implements OnInit {

    @Input() image: CmsImage;

    @Input() aspectRatio: number;

    @ViewChild('cropper') cropper: ImageCropperComponent;

    constructor(
        private selectItemService: SelectItemService,
    ) {
        this.cropperSettings = new CropperSettings();

        this.cropperSettings.preserveSize = true;
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.cropOnResize = false;
        this.cropperSettings.minWidth = 500;
        this.cropperSettings.minHeight = 500;
        this.cropperSettings.keepAspect = true;

    }

    private imageWidth: number = null;
    private imageHeight: number = null;

    public cropperSettings: CropperSettings;

    private editingImageObject = new Image();

    private toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob);
        }));

    private loadPreviewData(image: CmsImage) {
        this.toDataURL('/' + image.filename).then(data => {
            this.editingImageObject.src = data.toString();
            let that = this;
            this.editingImageObject.addEventListener("load", function(){
                console.log( this.naturalWidth +' x '+ this.naturalHeight );

                that.imageWidth = this.naturalWidth;
                that.imageHeight = this.naturalHeight;

                that.updateCropperSettings();
            });
        });
    }

    private updateCropperSettings()
    {
        const imageAspectRatio = this.imageWidth / this.imageHeight;

        this.cropper.cropper.resizeCanvas(650, 650 / imageAspectRatio);
        this.cropperSettings.minWidth = this.imageWidth / 5;
        this.cropperSettings.minHeight = this.imageHeight / 5;
        this.cropper.cropper.setImage(this.editingImageObject);
    }


    ngOnInit() {
        this.cropperSettings.width = 100;
        this.cropperSettings.height = 100 / this.aspectRatio;
        this.loadPreviewData(this.image);
    }

}
