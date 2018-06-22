import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { Page } from '../models/page.interface';
import { Domain } from '../models/domain.interface';

import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";
import {PageFields} from "../models/page-fields.interface";

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
	selectedPageId: number;

	private selectedPageFields: PageFields = null;

	loadPage(pageId: number) {
	    this.selectedPageId = pageId;
		this.pageService.getPageFields(pageId)
			.subscribe(page => {
				this.selectedPageFields = page;
			});
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

    getPageFieldsValues(params, values): any {
        let result = {};

		for (let key in params) {
            if (params[key].type === 'composite') {
                let sectionDataList = [];
                for (let section of values[key]) {
                	let sectionData = this.getPageFieldsValues(params[key]['availableInstances'][section.type], section);
                	sectionData.type = section.type;
                    sectionDataList.push(sectionData);
                }

                result[key] = sectionDataList;
            } else {
                result[key] = values[key];
            }
		}

		return result;
	}

	save(): void {
	    this.pageService.savePageFields(this.selectedPageId, this.getPageFieldsValues(this.selectedPageFields.params, this.selectedPageFields.values))
            .subscribe();
    }

	groupPages(): void {
		if (this.domainsLoaded && this.pagesLoaded) {
			for (let page of this.pages) {
				if (this.groupedPages[page.domain_id] === undefined) {
					this.groupedPages[page.domain_id] = [];
				}

				this.groupedPages[page.domain_id].push(page);
			}
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
