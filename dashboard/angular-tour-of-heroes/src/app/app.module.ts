import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {ModalModule, TabsModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PagesService } from './pages.service';
import { ModelService } from './model.service';
import { MenuService } from './menu.service';
import { AppRoutingModule } from './app-routing.module';
import { ImagesComponent } from './images/images.component';
import { TrainersComponent } from './trainers/trainers.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { PageEditorTreeComponent } from './page-editor-tree/page-editor-tree.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { SubMenuPagesComponent } from './sub-menu/pages/pages.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { SelectItemService } from "./select-item.service";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TrainerEditorComponent } from './trainer-editor/trainer-editor.component';
import { FileHelpersModule } from 'ngx-file-helpers';
import {BsDropdownModule} from 'ngx-bootstrap';
import {WordCountLimit} from './filters/word-count-limit';
import { ImageChooserComponent } from './image-chooser/image-chooser.component';
import { NgForIn } from './ng-for-in.directive';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ImagesComponent,
    TrainersComponent,
    PageComponent,
    PageEditorTreeComponent,
    SubMenuComponent,
    SubMenuPagesComponent,
    PagesListComponent,
    TrainerEditorComponent,
    WordCountLimit,
    ImageChooserComponent,
    NgForIn
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ModalModule.forRoot(),
    FileHelpersModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot()
  ],
  providers: [
    PagesService, MenuService, SelectItemService, ModelService
  ],
  bootstrap: [AppComponent],
  exports: [ModalModule]
})
export class AppModule { }
