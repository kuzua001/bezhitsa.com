import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {ModalModule, SortableModule, TabsModule} from 'ngx-bootstrap';
import {AppComponent} from './app.component';
import {PagesComponent} from './pages/pages.component';
import {PagesService} from './pages.service';
import {ModelService} from './model.service';
import {MenuService} from './menu.service';
import {AppRoutingModule} from './app-routing.module';
import {ImagesComponent} from './images/images.component';
import {TrainersComponent} from './trainers/trainers.component';
import {HttpClientModule} from '@angular/common/http';
import {PageComponent} from './page/page.component';
import {PageEditorTreeComponent} from './page-editor-tree/page-editor-tree.component';
import {SubMenuComponent} from './sub-menu/sub-menu.component';
import {SubMenuPagesComponent} from './sub-menu/pages/pages.component';
import {SubMenuSettingsComponent} from './sub-menu/settings/settings.component';
import {PagesListComponent} from './pages-list/pages-list.component';
import {SelectItemService} from "./select-item.service";
import {NgxTrumbowygModule} from 'ngx-trumbowyg';
import {TrainerEditorComponent} from './trainer-editor/trainer-editor.component';
import {FileHelpersModule} from 'ngx-file-helpers';
import {BsDropdownModule} from 'ngx-bootstrap';
import {WordCountLimit} from './filters/word-count-limit';
import {Values} from './filters/values';
import {Keys} from './filters/keys';
import {ImageChooserComponent} from './image-chooser/image-chooser.component';
import {NgForIn} from './ng-for-in.directive';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {PageEditorFieldComponent} from './page-editor-field/page-editor-field.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {RoomEditorComponent} from "./room-editor/room-editor.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {LanguageService} from "./services/language.service";
import {SettingsListComponent} from "./settings-list/settings-list.component";
import {SettingsService} from "./settings.service";
import {SettingsComponent} from "./settings/settings.component";
import {ClickStopPropagation} from "./click-stop-propogation.directive";
import { PageEditorTreeItemComponent } from './page-editor-tree-item/page-editor-tree-item.component';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { CustomImageCropperComponent } from './image-cropper/image-cropper.component';
import {SubMenuImagesComponent} from "./sub-menu/images/images.component";
import { FocusDirective } from './focus.directive';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { ImageChooserPopupComponent } from './image-chooser-popup/image-chooser-popup.component';
import {MatCheckboxModule} from "@angular/material";
import {PageEditorFieldExtendedComponent} from "./page-editor-field-extended/page-editor-field-extended.component";
import {TrainingsEditorComponent} from "./trainings-editor/trainings-editor.component";
import {TrainingsComponent} from "./trainings/trainings.component";
import {RestaurantMenuComponent} from "./menu/menu.component";

@NgModule({
    declarations: [
        AppComponent,
        PagesComponent,
        ImagesComponent,
        TrainersComponent,
        RoomsComponent,
        PageComponent,
        SettingsComponent,
        PageEditorTreeComponent,
        SubMenuComponent,
        SubMenuPagesComponent,
        SubMenuSettingsComponent,
        SubMenuImagesComponent,
        PagesListComponent,
        SettingsListComponent,
        TrainerEditorComponent,
        RoomEditorComponent,
        WordCountLimit,
        Values,
        Keys,
        ImageChooserComponent,
        NgForIn,
        PageEditorFieldComponent,
        PageEditorFieldExtendedComponent,
        ClickStopPropagation,
        PageEditorTreeItemComponent,
        ImageCropperComponent,
        CustomImageCropperComponent,
        FocusDirective,
        ImageChooserPopupComponent,
        TrainingsEditorComponent,
        TrainingsComponent,
        RestaurantMenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgxTrumbowygModule.withConfig(AppModule.editorOptions),
        ModalModule.forRoot(),
        FileHelpersModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
        SortableModule.forRoot(),
        ColorPickerModule,
        ScrollToModule.forRoot(),
        MatCheckboxModule,
    ],
    providers: [
        PagesService, MenuService, SelectItemService, ModelService, LanguageService, SettingsService
    ],
    bootstrap: [AppComponent],
    exports: [ModalModule]
})
export class AppModule {
    public static editorOptions = {
        lang: 'ru',
        svgPath: 'assets/icons/icons.svg',
        removeformatPasted: true,
        autogrow: true,
        btns: [
            ['formatting'],
            ['strong', 'em', 'del'],
            ['superscript', 'subscript'],
            ['link'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat']
        ]
    };
}
