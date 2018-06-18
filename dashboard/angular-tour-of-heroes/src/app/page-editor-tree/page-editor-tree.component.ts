import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PageFields} from "../models/page-fields.interface";

@Component({
  selector: 'page-editor',
  templateUrl: './page-editor-tree.component.html',
  styleUrls: ['./page-editor-tree.component.css'],
  providers: [ FormBuilder ],
})
export class PageEditorTreeComponent {
  @Input() params: any;
  @Input() values: any;
}
