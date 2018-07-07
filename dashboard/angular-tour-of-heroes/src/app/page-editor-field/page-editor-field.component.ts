import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-editor-field',
  templateUrl: './page-editor-field.component.html',
  styleUrls: ['./page-editor-field.component.css']
})
export class PageEditorFieldComponent implements OnInit {

  constructor() { }

  @Input() valueSet: any;
  @Input() valueKey: any;
  @Input() type: any;
  @Input() title: any;

  public froalaSettings: Object = {
      toolbarInline: true,
  };

  ngOnInit() {
  }

}
