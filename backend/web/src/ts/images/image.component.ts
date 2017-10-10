import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { InterfaceDirective } from '../interface/interface.directive';
import { Restangular } from 'ng2-restangular';
/**
 * Created by ivan on 7/10/17.
 */


@Component({
	selector: 'ng-images',
	templateUrl: `/admin/templates/images/index.html?v=${new Date().getTime()}`,
})
export class ImageComponent {
	constructor(public restangular: Restangular) {}

	@ViewChild('start') start;

	public isLoaded()
	{
		return this.images != null;
	}

	public images: any;

	ngOnInit() {
		this.images = null;

		this.restangular.all('page').getList().subscribe( pages => {
			this.images = pages;
		});

		// GET /admin/api/users/1
		/*this.restangular.all('image').getList().subscribe( images => {
			this.images = images;
		});*/
	}
}