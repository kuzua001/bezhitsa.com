import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SubMenu } from '../models/sub-menu';
import { SubMenuPagesComponent } from './pages/pages.component';

@Component({
  selector: 'sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class SubMenuComponent implements OnInit {

  @Input() subMenu: SubMenu;
  constructor() { }

  ngOnInit() {
  }

}
