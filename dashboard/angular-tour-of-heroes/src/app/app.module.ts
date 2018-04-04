import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PagesService } from './pages.service';
import { MenuService } from './menu.service';
import { AppRoutingModule } from './app-routing.module';
import { ImagesComponent } from './images/images.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { PageEditorTreeComponent } from './page-editor-tree/page-editor-tree.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { SubMenuPagesComponent } from './sub-menu/pages/pages.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import {SelectItemService} from "./select-item.service";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ImagesComponent,
    DashboardComponent,
    PageComponent,
    PageEditorTreeComponent,
    SubMenuComponent,
    SubMenuPagesComponent,
    PagesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers: [
    PagesService, MenuService, SelectItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
