import {AfterViewChecked, Component, Input, OnInit, ViewChild} from '@angular/core';
import {AppHelper} from "../components/app-helper";
import tableDragger from 'table-dragger'
import * as $ from 'jquery';

@Component({
    selector: 'app-page-editor-field-extended',
    templateUrl: './page-editor-field-extended.component.html',
    styleUrls: ['./page-editor-field-extended.component.css']
})
export class PageEditorFieldExtendedComponent implements OnInit, AfterViewChecked {
    public uniqId;

    constructor() {
        this.uniqId = AppHelper.uuid();
    }

    @Input() valueSet: any;
    @Input() valueKey: any;
    @Input() title: any;
    @Input() params: any;
    @Input() titleEachField: boolean = false;

    private jsonData = null;

    private dragger: any = null;

    public swapRows(from: number, to: number) {
        let tmp = this.jsonData[from];
        this.jsonData[from] = this.jsonData[to];
        this.jsonData[to] = tmp;
    }

    public getFieldType(key) {
        let fieldType = this.params['options_types'][key];

        if (fieldType === undefined) {
            fieldType = null;
        }

        if (fieldType && typeof fieldType !== 'string') {
            fieldType = fieldType[0] ? fieldType[0] : 'string';
        }

        return fieldType ? fieldType : 'string';
    }

    public getFieldOptions(key) {
        let fieldTypeData = this.params['options_types'][key];

        if (fieldTypeData && typeof fieldTypeData !== 'string') {
            return fieldTypeData[1] ? fieldTypeData[1] : [];
        }

        return [];
    }

    public getFieldExtra(key) {
        let fieldTypeData = this.params['options_types'][key];

        if (fieldTypeData && typeof fieldTypeData !== 'string') {
            return fieldTypeData[2] ? fieldTypeData[2] : {};
        }

        return {};
    }

    get getRows()
    {
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

        this.reinitRequired = true;
    }


    public deleteJsonRow(index: number)
    {
        try {
            let data = this.jsonData;
            this.jsonData = data.filter(item => data.indexOf(item) !== index);
        } finally {
        }

        this.updateJsonField();
    }

    public setVal(value: any) {
        this.valueSet[this.valueKey] = value;
    }

    private reinitDragger() {
        if (this.jsonData.length) {

            if (this.dragger) {
                this.dragger.destroy();
            }

            this.initDragger(true);
        };
    }

    private initDragger(force: boolean = false) {
        if (force || (this.dragger === null && this.jsonData.length)) {

            let el = document.getElementById(this.uniqId);
            this.dragger = tableDragger(el, {
                mode: 'row',
                dragHandler: '.handle',
                onlyBody: true,
                animation: 300
            });

            let that = this;
            this.dragger.on('drop',function(from, to) {
                that.swapRows(from - 1, to - 1);
                that.updateJsonField();
                that.reinitDragger();
            });
        };
    }

    private reinitRequired = false;


    ngAfterViewChecked()
    {
        if (this.params.type == 'simple_json_list') {
            this.initDragger();
            if (this.reinitRequired) {
                this.reinitDragger();
                this.reinitRequired = false;
            }
        }
    }

    ngOnInit() {
        this.jsonData = JSON.parse(this.valueSet[this.valueKey]);

        if (!this.jsonData && this.params.type == 'simple_json') {
            this.jsonData = {};

            for (let key in this.params['options']) {
                this.jsonData[key] = '';
            }

        } else if (!this.jsonData && this.params.type == 'simple_json_list') {
            this.jsonData = [];
        }
    }
}
