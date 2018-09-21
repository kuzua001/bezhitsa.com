import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent }     from './pages/pages.component';
import { ImagesComponent }    from './images/images.component';
import {TrainersComponent} from "./trainers/trainers.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {SettingsListComponent} from "./settings-list/settings-list.component";
import {SettingsComponent} from "./settings/settings.component";
import {TrainingsEditorComponent} from "./trainings-editor/trainings-editor.component";
import {TrainingsComponent} from "./trainings/trainings.component";
import {RestaurantMenu} from "./models/restaurant-menu";
import {RestaurantMenuComponent} from "./menu/menu.component";
import {LoginComponent} from "./login/login.component";
import {NeedAuthGuard} from "./need-auth-guard";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
    },
    {
        path: 'images',
        component: ImagesComponent,
        data : {
            name: 'Изображения'
        },
        canActivate: [NeedAuthGuard]
    },
    {
        path: 'pages',
        component: PagesComponent,
        data : {
            name: 'Страницы'
        },
        canActivate: [NeedAuthGuard]
    },
    {
        path: 'trainers',
        component: TrainersComponent,
        data : {
            name: 'Тренеры'
        },
        canActivate: [NeedAuthGuard]
    },
    {
        path: 'rooms',
        component: RoomsComponent,
        data : {
            name: 'Номера'
        },
        canActivate: [NeedAuthGuard]
    },
    {
        path: 'trainings',
        component: TrainingsComponent,
        data : {
            name: 'Тренировки'
        },
        canActivate: [NeedAuthGuard]
    },
    {
        path: 'restaurant',
        component: RestaurantMenuComponent,
        data : {
            name: 'Меню ресторана'
        },
        canActivate: [NeedAuthGuard]
    },
    {
        path: 'settings',
        component: SettingsComponent,
        data : {
            name: 'Настройки'
        },
        canActivate: [NeedAuthGuard]
    },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}