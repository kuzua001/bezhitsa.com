import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent }     from './pages/pages.component';
import { ImagesComponent }    from './images/images.component';
import {TrainersComponent} from "./trainers/trainers.component";
import {RoomsComponent} from "./rooms/rooms.component";

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
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}