import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
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
    pageFieldsSectionsOrder: any;

    selectedSectionNumber: number;
	selectOtherParams: boolean = false;
    confirmationResult: Subject<boolean>;
	
	
	@ViewChild('confirmationDialog') confirmationDialog;
	@ViewChild('reorderDialog') reorderDialog;
    modalRef: BsModalRef;

	constructor(
		private pageService: PagesService,
		private selectItemService: SelectItemService,
        private modalService: BsModalService,
        private ref: ChangeDetectorRef
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

	public reorderApply(): void {
	    let orderedSections = [];
	    for (let realId in this.pageFieldsSectionsOrder) {
	        orderedSections[realId] = this.selectedPageFields.values['sectionsParams'][this.pageFieldsSectionsOrder[realId].id];
        }

        this.selectedPageFields.values['sectionsParams'] = orderedSections;
	    this.selectedPageFieldsSections.values = orderedSections;
	    this.modalRef.hide();
    }

    public onConfirm(): void {
        this.confirmationResult.next(true);
        this.modalRef.hide();
    }

    public onCancel(): void {
        this.confirmationResult.next(false);
        this.modalRef.hide();
    }


    public prepareSectionInstance(sectionInstance, sectionType: string, fieldName: string) {
        let newSection = {
            sectionType: sectionType,
            type: sectionType,
            sectionTypeName: this.selectedPageFields.params[fieldName]['instancesLabels'][sectionType]
        };

        for (let key in sectionInstance) {
            if (sectionInstance[key].type !== 'composite') {
                newSection[key] = sectionInstance[key].default;
            } else {
                newSection[key] = [];
            }
        }

        return newSection;
	}

    public appendSection(fieldName: string = 'sectionsParams', sectionType: string) {
	    let newSection = this.prepareSectionInstance(this.selectedPageFields.params[fieldName]['availableInstances'][sectionType], sectionType, fieldName);

	    this.selectedPageFields.values[fieldName].push(newSection);

	    this.initSectionsAndOther(this.selectedPageFields);
    }

    initSectionsAndOther(pageFields: PageFields) {
        this.selectedSectionNumber = null;
        this.selectedPageFieldsOther = {
        	params: [],
			values: []
		};

        this.selectedPageFieldsSections = {
            params: {},
            values: [],
        };

        this.pageFieldsSectionsOrder = [];

        let orderId = 0;
    	for (let key in pageFields.params) {
    		if (key === 'sectionsParams') {
    			this.selectedPageFieldsSections = {
    				params: pageFields.params['sectionsParams'],
    				values: Object.values(pageFields.values['sectionsParams']),
				};
    			for (let sectionIndex in pageFields.values['sectionsParams']) {
    			    let sectionName = pageFields.values['sectionsParams'][sectionIndex].type; //todo - change this name to norm.. :)

                    this.pageFieldsSectionsOrder.push({
                        id: orderId,
                        name: sectionName
                    });
                    orderId ++;
    			}
			} else {
    			this.selectedPageFieldsOther.params.push(pageFields.params[key]);
    			this.selectedPageFieldsOther.values.push(pageFields.values[key]);
			}
		}

		console.log('Order is:');
		console.log(this.pageFieldsSectionsOrder);
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
	    //for (let section)

	    this.pageService.savePageFields(this.selectedPageId, this.getPageFieldsValues(this.selectedPageFields.params, this.selectedPageFields.values))
            .subscribe();
    }


    deleteWithConfirm(): void {
        this.modalRef = this.modalService.show(this.confirmationDialog);
        this.confirmationResult.subscribe(result => {
            if (result === true) {
            	this.delete();
			}
        });
	}

    reorder(): void {
        this.modalRef = this.modalService.show(this.reorderDialog);
    }

    delete(): void {
		this.pageService.deletePage(this.selectedPageId)
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
        this.confirmationResult = new Subject();

        this.selectedSectionNumber = null;

		this.getPages();
		this.getDomains();
		this.groupedPages = [];
	}
}
