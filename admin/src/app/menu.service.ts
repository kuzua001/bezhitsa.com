import { Injectable } from '@angular/core';
import { MenuItem } from './models/menu-item';
import { SubMenuPages } from "./models/sub-menu-pages";
import {SubMenuSettingsComponent} from "./sub-menu/settings/settings.component";
import {SubMenuSettings} from "./models/sub-menu-settings";
import {SubMenuImages} from "./models/sub-menu-images";

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
    this.menuItems.push( new MenuItem('images', 'Изображения', new SubMenuImages()));
    this.menuItems.push( new MenuItem('pages', 'Страницы', new SubMenuPages()));
    this.menuItems.push( new MenuItem('trainers', 'Тренеры', null));
    this.menuItems.push( new MenuItem('rooms', 'Номера', null));
    this.menuItems.push( new MenuItem('settings', 'Настройки', new SubMenuSettings()));
  }

  getItems(): MenuItem[] {
    return this.menuItems;
  }
}
