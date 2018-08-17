import {Component, Input, OnInit} from '@angular/core';
import {PageEditorTreeComponent} from "../page-editor-tree/page-editor-tree.component";

@Component({
    selector: 'app-page-editor-tree-item',
    templateUrl: './page-editor-tree-item.component.html',
    styleUrls: ['./page-editor-tree-item.component.css']
})
export class PageEditorTreeItemComponent implements OnInit {
    @Input() params: any;
    @Input() key:    any;
    @Input() values: any;
    @Input() uniqKey: string;
    @Input() parent: PageEditorTreeComponent;


    constructor() {
    }

    ngOnInit() {
    }

    public getSectionGeneralName(section: any)
    {
        return this.params[this.key]['instancesLabels'][section.type];
    }

    public getSectionTitle(section: any)
    {
        if (this.params[this.key].itemTitleKey) {
            return section[this.params[this.key].itemTitleKey];
        }

        return null;
    }

    public prepareInstance(instanceParams, sectionType: string, fieldName: string) {
        let newSection = {
            sectionType: sectionType,
            type: sectionType,
            sectionTypeName: this.params[fieldName]['instancesLabels'][sectionType]
        };

        for (let key in instanceParams) {
            if (instanceParams[key].type !== 'composite') {
                newSection[key] = instanceParams[key].default;
            } else {
                newSection[key] = [];
            }
        }

        return newSection;
    }

    public reorder()
    {
        this.parent.reorder(this.key);
    }

    public deleteInstanceWithConfirm(key: string, instanceIndex: number) {
        this.deleteInstance(key, instanceIndex);
    }

    public deleteInstance(key: string, instanceIndex: number) {
        this.values[key].splice(instanceIndex, 1);
        //console.log(this.values[key].length);
        //console.log(this.values[key]);
    }

    public appendInstance(key: string, instanceType: string) {
        //console.log(key);
        //console.log(instanceType);

        let newInstance = this.prepareInstance(this.params[key]['availableInstances'][instanceType], instanceType, key);

        this.values[key].push(newInstance);

    }

}
