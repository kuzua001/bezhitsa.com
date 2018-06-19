import {Component, Input, OnInit} from '@angular/core';
import {AppHelper} from "../components/app-helper";
import {ModelService} from "../model.service";
import {Image} from "../models/image";

@Component({
    selector: 'app-page-editor-field',
    templateUrl: './page-editor-field.component.html',
    styleUrls: ['./page-editor-field.component.css']
})
export class PageEditorFieldComponent implements OnInit {
    private uniqId;

    constructor(private modelService: ModelService) {
        this.uniqId = AppHelper.uuid();
    }

    @Input() valueSet: any;
    @Input() valueKey: any;
    @Input() title: any;
    @Input() params: any;


    private imageSrc;

    public selectImage(image: Image)
    {
        this.valueSet[this.valueKey] = image.id;
        this.imageSrc = image.filename;
    }

    public froalaSettings: Object = {
        toolbarInline: true,
    };

    public setVal(value: any) {
        this.valueSet[this.valueKey] = value;
    }

    private reloadImageSrc()
    {
        this.modelService.getImage(this.valueSet[this.valueKey]).subscribe((image) => {
            console.log('image obtained!');
            this.imageSrc = image.filename;
        });
    }

    ngOnInit() {
        if (this.params.type === 'image') {
            console.log('azazaza');
            this.reloadImageSrc();
        }
    }

}
