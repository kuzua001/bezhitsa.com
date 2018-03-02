import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { InterfaceDirective } from '../interface/interface.directive';
import { Restangular } from 'ng2-restangular';
/**
 * Created by ivan on 7/10/17.
 */

export class Page {
	id: number;
	name: string;
	action_id: number;
	url: string;
	pages_id: number;
	domain_id: number;
}

@Component({
	selector: 'new-page',
	templateUrl: `/admin/templates/pages/new-page.html?v=${new Date().getTime()}`,
})
export class NewPageComponent {
	@Output()
	submitted:EventEmitter<Page> = new EventEmitter();

	public domains: any[];

	constructor(public restangular: Restangular) {}

	ngOnInit() {
		// GET /admin/api/users/1
		this.restangular.all('domain').getList().subscribe( domains => {
			this.domains = domains;
		});
	}

	newPage: Page = {
		id : 0,
		name : '',
		url : '',
		action_id : 0,
		pages_id : 0,
		domain_id: 0
	};
}

@Component({
	selector: 'ng-pages',
	templateUrl: `/admin/templates/pages/list.html?v=${new Date().getTime()}`,
})
export class PageComponent {
	constructor(public restangular: Restangular) {}

	public pages: any;

	public lang: number;

	public currentPage: any;

	@ViewChild('start') start;
	@ViewChild( InterfaceDirective ) directive: InterfaceDirective;

	public setLang(lang: number)
	{
		this.lang = lang;
		if (this.currentPage !== null) {
			this.loadPage(this.currentPage, lang);
		}
	}

	public isSelected(page)
	{
		return this.currentPage != null ? page.id == this.currentPage.id : false;
	}

	public isLoaded()
	{
		return this.currentPage != null;
	}

	public loadPage(page: any, lang: number)
	{
		this.currentPage = page;
		console.log(page);
		this.restangular.one('pageFields', page.id).customGET('', {
			'lang' : lang
		}).subscribe( pageFields => {
			//console.log(pageFields);
			this.directive.updateInterface(pageFields);
		});
	}

	public createPage(page)
	{
		let pages = this.restangular.all('page');
		pages.post(page).subscribe( page => {
			this.pages.push(page);
		});
	}

	public pageEnableToggle()
	{
		this.currentPage.is_enabled = !this.currentPage.is_enabled;
		this.currentPage.is_enabled = this.currentPage.is_enabled ? 1 : 0;
		this.currentPage.put();
	}

	public savePage(lang: number) {
		let values = this.directive.readInterfaceValues();
		this.restangular.one('pageFields', this.currentPage.id).customPUT(Object.assign({}, values, {'lang' : lang}));
	}

	ngOnInit() {
		// GET /admin/api/users/1
		this.restangular.all('page').getList().subscribe( pages => {
			this.pages = pages;
		});
	}
}