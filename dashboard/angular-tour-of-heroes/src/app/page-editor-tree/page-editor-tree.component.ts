import { Component, OnInit, Input } from '@angular/core';
import { ProcessedPage } from '../models/processed-page';
import { PageNode } from '../models/page-node';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'page-editor',
  templateUrl: './page-editor-tree.component.html',
  styleUrls: ['./page-editor-tree.component.css'],
  providers: [ FormBuilder ],
})
export class PageEditorTreeComponent implements OnInit {
  @Input() pageFieldsTree: ProcessedPage;

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  private getForm(fieldsTree: ProcessedPage) {
    let items = {};

    for (let param of fieldsTree.getParams()) {
      if (!param.isValid()) {
        continue;
      }

      if (param.isField()) {
        items[param.getKey()] = ['', false];
      } else if (param.isCompositeField()) {
        let subItems = {};
        let subTree = param.getInstances(fieldsTree);
        for (let index in subTree) {
          subItems[index] = this.getForm(subTree[index]);
        }

        items[param.getKey()] = this.formBuilder.group(subItems);
      }
    }

    return this.formBuilder.group(items);
  }

  ngOnInit() {
    this.form = this.getForm(this.pageFieldsTree);
  }

}
