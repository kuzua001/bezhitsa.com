import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AppHelper} from "../components/app-helper";
import {ModelService} from "../model.service";
import {CmsImage} from "../models/cms-image";
import {BsModalService} from "ngx-bootstrap";
import {SelectItemService} from "../select-item.service";
import {ImageChooserPopupComponent} from "../image-chooser-popup/image-chooser-popup.component";
//import {CustomCheckBoxModel} from "angular-custom-checkbox";

@Component({
    selector: 'app-page-editor-field',
    templateUrl: './page-editor-field.component.html',
    styleUrls: ['./page-editor-field.component.css']
})
export class PageEditorFieldComponent implements OnInit {
    private uniqId;

    private modalRef;

    @ViewChild('imageChooser') imageChooser: ImageChooserPopupComponent;

    constructor(
        private modelService: ModelService,
        private modalService: BsModalService,
        private selectItemService: SelectItemService
    ) {
        this.uniqId = AppHelper.uuid();
    }

    openChooser()
    {
        this.imageChooser.showPopup();
    }


    @Input() valueSet: any;
    @Input() valueKey: any;
    @Input() title: any;
    @Input() params: any;


    private imageSrc = null;

    private jsonData = null;

    public getRows()
    {
        if (this.jsonData === null) {
            this.jsonData = JSON.parse(this.valueSet[this.valueKey]);
        }

        return this.jsonData && this.jsonData.length ? this.jsonData : [];
    }

    public updateJsonField()
    {
        this.valueSet[this.valueKey] = JSON.stringify(this.jsonData);
    }

    public addJsonRow()
    {
        if (!this.jsonData) {
            this.jsonData = [];
        }

        try {
            let newRow = Object.assign({}, this.params.options);
            Object.keys(newRow).forEach(key => {newRow[key] = '';});
            console.log(newRow);
            this.jsonData.push(newRow);
        } finally {
        }
    }


    public deleteJsonRow(index: number)
    {
        try {
            let data = this.jsonData;
            this.jsonData = data.filter(item => data.indexOf(item) !== index);
        } finally {
        }
    }

    public selectImage(image: CmsImage)
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
            //console.log('image obtained!');
            this.imageSrc = image.filename;
        });
    }

    ngOnInit() {
        if (this.params.type === 'image') {
            //console.log('azazaza');
            this.reloadImageSrc();
        }
    }

}
