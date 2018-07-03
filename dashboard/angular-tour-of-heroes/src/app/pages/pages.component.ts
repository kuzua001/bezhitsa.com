import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { Page } from '../models/page.interface';
import { Domain } from '../models/domain.interface';

import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";
import {PageFields} from "../models/page-fields.interface";
import {Subject} from "rxjs/Subject";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

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

	selectedPageFields: PageFields = null;
	selectedPageFieldsOther: any;
    selectedPageFieldsSections: any;

    selectedSectionNumber: number;
	selectOtherParams: boolean = false;
    public onClose: Subject<boolean>;

	constructor(
		private pageService: PagesService,
		private selectItemService: SelectItemService,
        private modalService: BsModalService
	) {
		selectItemService.event$.subscribe((event: SelectItemEvent) => {
			if (event.itemType === SelectItemEvent.Type.Page) {
				this.loadPage(event.payload.pageId);
			}
		});
	}

	selectSection(sectionNumber: number) {
        this.selectOtherParams = false;
		this.selectedSectionNumber = sectionNumber;

		console.log(this.selectedSectionNumber);
	}

	closeSection() {
		this.selectedSectionNumber = null;
		this.selectOtherParams = false;
	}

	selectOther() {
		this.selectedSectionNumber = null;
		this.selectOtherParams = true;
	}

	closeOther() {
		this.selectedSectionNumber = null;
		this.selectOtherParams = false;
	}

    loadPage(pageId: number) {
		this.pageService.getPageFields(pageId)
			.subscribe(page => {
                this.initSectionsAndOther(page);
				this.selectedPageFields = page;
			});

        this.selectedPageId = pageId;
	}

    public onConfirm(): void {
        this.onClose.next(true);
        this.modalService.hide();
    }

    public onCancel(): void {
        this.onClose.next(false);
        this.modalService.hide();
    }

    initSectionsAndOther(pageFields: PageFields) {
        this.selectedPageFieldsOther = {
        	params: [],
			values: []
		};

        this.selectedPageFieldsSections = {
            params: {},
            values: {},
        };

    	for (let key in pageFields.params) {
    		if (key === 'sectionsParams') {
    			this.selectedPageFieldsSections = {
    				params: pageFields.params['sectionsParams'],
    				values: pageFields.values['sectionsParams'],
				}
			} else {
    			this.selectedPageFieldsOther.params.push(pageFields.params[key]);
    			this.selectedPageFieldsOther.values.push(pageFields.values[key]);
			}
		}
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

    delete(confirm: boolean): void {
    	if (!confirm || this.onConfirm()) {
            this.pageService.deletePage(this.selectedPageId)
                .subscribe();
		}
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
        this.onClose = new Subject();

		this.getPages();
		this.getDomains();
		this.groupedPages = [];
	}
}
