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

    /*get checkboxSettings() {
        let result = new CustomCheckBoxModel();
        result.color = 'p-success';
        result.colorHex = '#F500FF';
        result.rounded = true;
        result.icon = 'mdi mdi-check';

        return result;
    }*/

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
