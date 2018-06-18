import { Injectable } from '@angular/core';
import { MenuItem } from './models/menu-item';
import { SubMenuPages } from "./models/sub-menu-pages";

@Injectable()
export class MenuService {

  private menuItems: MenuItem[];
  private defaultRoute = {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full'
  };

  constructor() {
    this.menuItems = [];
    this.menuItems.push( new MenuItem('images', 'Изображения', null));
    this.menuItems.push( new MenuItem('pages', 'Страницы', new SubMenuPages()));
    this.menuItems.push( new MenuItem('trainers', 'Тренеры', null));
  }

  getItems(): MenuItem[] {
    return this.menuItems;
  }
}
