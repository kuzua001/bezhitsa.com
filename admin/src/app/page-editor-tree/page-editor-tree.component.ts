import {Component, OnInit, Input, OnChanges, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PageFields} from "../models/page-fields.interface";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'page-editor',
  templateUrl: './page-editor-tree.component.html',
  styleUrls: ['./page-editor-tree.component.css'],
  providers: [ FormBuilder ],
})
export class PageEditorTreeComponent implements OnInit, OnChanges {
  @Input() params: any;
  @Input() values: any;
  @Input() uniqKey: string;
  @Input() generalName: string;
  @Input() itemTitle: string;
  @Input() level: number = 0;

  paramsHasGroups: boolean;
  groupedParamsSet: any;
  notGroupdParams: any;

  selectedInstanceOrder: Array<any>;
  selectedInstanceKey: string;

  public logToggle($event, key: string)
  {
      //console.log('Accrodion toggle event!');
      //console.log(key);
      //console.log(this.uniqKey);
      //console.log($event);
  }

  public get getHeading()
  {
      return this.level == 0 ? 'Содержимое блока' : this.itemTitle;
  }

  public reorder(key: string) {
      this.prepareSelectedInstanceOrder(key);
      this.openModal(this.reorderDialog);
  }

  private prepareSelectedInstanceOrder(key: string) {
      this.selectedInstanceKey = key;
      this.selectedInstanceOrder = [];
      let orderId = 0;

      for (let instance of this.values[key]) {
          this.selectedInstanceOrder.push({
              id: orderId,
              name: this.params[key]['instancesLabels'][instance.type]
          });
          orderId ++;
      }
  }

  public reorderApply() {
      let orderedSections = [];
      for (let realId in this.selectedInstanceOrder) {
          orderedSections[realId] = this.values[this.selectedInstanceKey][this.selectedInstanceOrder[realId].id];
      }

      this.values[this.selectedInstanceKey] = orderedSections;
      this.modalRef.hide();
  }

  @ViewChild('reorderDialog') reorderDialog: any;

  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }


  public constructor(
      private modalService: BsModalService
  ) {

  }

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

    this.paramsHasGroups = paramsHasGroups;
  }
}
