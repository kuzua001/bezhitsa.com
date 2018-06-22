import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PageFields} from "../models/page-fields.interface";

@Component({
  selector: 'page-editor',
  templateUrl: './page-editor-tree.component.html',
  styleUrls: ['./page-editor-tree.component.css'],
  providers: [ FormBuilder ],
})
export class PageEditorTreeComponent implements OnInit, OnChanges {
  @Input() params: any;
  @Input() values: any;

  paramsHasGroups: boolean;
  groupedParamsSet: any;
  notGroupdParams: any;

  ngOnInit() {
    this.initGroupedParamsInfo();
  }
  ngOnChanges() {
    this.initGroupedParamsInfo();
  }

  initGroupedParamsInfo() {
    this.groupedParamsSet = {};
    this.notGroupdParams = {};
    let paramsHasGroups = false;
    for (let key in this.params) {
      let param = this.params[key];
      if (!param.tabTitle) {
        this.notGroupdParams[key] = param;
      } else {
          paramsHasGroups = true;
          let title = param.tabTitle;
          if (this.groupedParamsSet[title] === undefined) {
              this.groupedParamsSet[title] = {
                  title: title,
                  values : {}
              };
          }

          this.groupedParamsSet[title].values[key] = param;
      }
    }

    console.log(this.notGroupdParams);

    this.paramsHasGroups = paramsHasGroups;
  }
}
