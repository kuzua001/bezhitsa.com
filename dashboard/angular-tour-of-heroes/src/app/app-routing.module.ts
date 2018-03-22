import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent }     from './pages/pages.component';
import { PageComponent }      from './page/page.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { ImagesComponent }    from './images/images.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
        children: [
            { path: 'pagesList', component: PagesListComponent, outlet: 'list' },
            { path: ':id', component: PageComponent, outlet: 'page' }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data : {
            name: 'Расписание'
        }
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}