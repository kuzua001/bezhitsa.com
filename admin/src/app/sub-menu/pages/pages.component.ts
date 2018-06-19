import { Component, OnInit } from '@angular/core';
import { SubMenuComponent } from '../sub-menu.component';
import { PagesListComponent } from '../../pages-list/pages-list.component'

@Component({
  selector: 'sub-menu-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class SubMenuPagesComponent extends SubMenuComponent {

  ngOnInit() {
  }

}