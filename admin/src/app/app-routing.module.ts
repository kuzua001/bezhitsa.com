import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent }     from './pages/pages.component';
import { ImagesComponent }    from './images/images.component';
import {TrainersComponent} from "./trainers/trainers.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {SettingsListComponent} from "./settings-list/settings-list.component";
import {SettingsComponent} from "./settings/settings.component";

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
        }
    },
    {
        path: 'pages',
        component: PagesComponent,
        data : {
            name: 'Страницы'
        },
    },
    {
        path: 'trainers',
        component: TrainersComponent,
        data : {
            name: 'Тренеры'
        }
    },
    {
        path: 'rooms',
        component: RoomsComponent,
        data : {
            name: 'Номера'
        }
    },
    {
        path: 'settings',
        component: SettingsComponent,
        data : {
            name: 'Настройки'
        }
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}