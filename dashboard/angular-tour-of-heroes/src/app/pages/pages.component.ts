import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { Page } from '../models/page.interface';
import { ProcessedPage } from '../models/processed-page';
import { Domain } from '../models/domain.interface';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
	groupedPages: object[][];
	pages:   Page[];
	domains: Domain[];
	domainsLoaded =  false;
	pagesLoaded =  false;
	selectedDomain: number = 1;

	private selectedPage = null;

	loadPage(pageId: number) {
		this.pageService.getPageFields(pageId)
			.subscribe(page => {
				this.selectedPage = ProcessedPage.build(page);
			});
	}

	getSelectedPage() {
		return this.selectedPage;
	}

	isPageLoaded() {
		return this.selectedPage !== null;
	}

	constructor(
		private pageService: PagesService,
		private selectItemService: SelectItemService
	) {
		selectItemService.event$.subscribe((event: SelectItemEvent) => {
			if (event.itemType === SelectItemEvent.Type.Page) {
				this.loadPage(event.payload.pageId);
			}
		});
	}

	groupPages(): void {
		if (this.domainsLoaded && this.pagesLoaded) {
			for (let page of this.pages) {
				if (this.groupedPages[page.domain_id] === undefined) {
					this.groupedPages[page.domain_id] = [];
				}

				this.groupedPages[page.domain_id].push(page);
			}

			console.log(this.groupedPages);
		}
	};

	getPages(): void {

		this.pageService.getPages()
			.subscribe(pages => {
				this.pages = pages;
				this.pagesLoaded = true;
				this.groupPages();
			});
	}

	getDomains(): void {

		this.pageService.getDomains()
			.subscribe(domains => {
				this.domains = domains;
				this.domainsLoaded = true;
				this.groupPages();
			});
	}

	ngOnInit() {
		this.getPages();
		this.getDomains();
		this.groupedPages = [];
	}
}
