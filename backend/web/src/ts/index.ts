import { NgModule }  from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RestangularModule } from 'ng2-restangular';
import { UsersModule } from './users/users.module';
import { PagesModule } from './pages/page.module';
import { ImagesModule } from './images/image.module';

@Component({
	selector: 'my-ng-pages',
	templateUrl: `/admin/dynamic/index?v=${new Date().getTime()}`
})
export class MyPagesComponent {}


@Component({
	selector: 'my-ng-images',
	templateUrl: `/admin/dynamic/images?v=${new Date().getTime()}`
})
export class MyImagesComponent {}

@NgModule({
	imports: [
		BrowserModule,
		RestangularModule.forRoot((RestangularProvider) => {
			RestangularProvider.setBaseUrl('/admin/api/');
		}),
		UsersModule,
		PagesModule,
		ImagesModule
	],
	declarations: [ MyPagesComponent, MyImagesComponent ],
	bootstrap: [ MyPagesComponent, MyImagesComponent ]
})
export class AppModule { }

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);