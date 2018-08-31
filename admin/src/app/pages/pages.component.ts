import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { PagesService } from '../pages.service';
import { Page } from '../models/page.interface';
import { Domain } from '../models/domain.interface';

import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";
import {PageFields} from "../models/page-fields.interface";
import {Subject} from "rxjs/Subject";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {State} from "../models/state";
import {bindToComponentState} from "../storage";
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent extends State implements OnInit {
	groupedPages: object[][];
	pages:   Page[];
	domains: Domain[];
	domainsLoaded =  false;
	pagesLoaded =  false;
	selectedDomain: number = 1;
	selectedPageId: number = null;
	currentPage: Page;

	selectedPageFields: PageFields = null;
	selectedPageFieldsOther: any;
    selectedPageFieldsSections: any;
    pageFieldsSectionsOrder: any;

    @bindToComponentState
    selectedSectionNumber: number;

    @bindToComponentState
	selectOtherParams: boolean;

    confirmationResult: Subject<boolean>;
	
    language: number = 1;

	@ViewChild('confirmationDialog') confirmationDialog;
	@ViewChild('sectionConfirmationDialog') sectionConfirmationDialog;
	@ViewChild('reorderDialog') reorderDialog;
    modalRef: BsModalRef;

    processLoadedState() {
        let state = this.getState();
        for (let key in state) {
            this[key] = state[key];
        }
    }

	constructor(
		private pageService: PagesService,
		private selectItemService: SelectItemService,
        private modalService: BsModalService,
        private ref: ChangeDetectorRef,
		private notificationService: NotificationService
	) {

		super();
        selectItemService.event$.subscribe((event: SelectItemEvent) => {
            if (event.itemType === SelectItemEvent.Type.LanguageChange) {
                this.language = event.payload.language;
                if (this.selectedPageId !== null) {
                    this.loadPage(this.selectedPageId, false);
				}
            } else if (event.itemType === SelectItemEvent.Type.Page) {
            	this.currentPage = event.payload.page;
                this.loadPage(event.payload.pageId, !event.payload.initial);
                if (!event.payload.initial) {
                    this.selectItemService.emitCloseAll('page');
				}
            } else if (event.itemType === SelectItemEvent.Type.CloseAllSelectedItems && event.payload.model !== 'page') {
            	this.unload();
			}
        });
	}

	unload() {
        this.selectOtherParams = false;
        this.selectedSectionNumber = null;
	}

	selectSection(sectionNumber: number) {
        this.selectOtherParams = false;
		this.selectedSectionNumber = sectionNumber;
        this.selectItemService.emitCloseAll('page');
	}

	closeSection() {
		this.selectedSectionNumber = null;
		this.selectOtherParams = false;
	}

	selectOther() {
		this.selectedSectionNumber = null;
		this.selectOtherParams = true;
		this.selectItemService.emitCloseAll('page');
	}

	closeOther() {
		this.selectedSectionNumber = null;
		this.selectOtherParams = false;
	}

    loadPage(pageId: number, unload: boolean) {
		this.pageService.getPageFields(pageId, this.language)
			.subscribe(page => {
				//console.log('Initing section!');
                this.initSectionsAndOther(page);
				this.selectedPageFields = page;

				if (unload) {
					this.unload();
				}
			});

        this.selectedPageId = pageId;

        if (unload) {
            this.unload();
        }
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

    public deleteSectionWithConfirm(fieldName: string = 'sectionsParams', sectionNumber: number) {
        this.modalRef = this.modalService.show(this.sectionConfirmationDialog);
        this.confirmationResult.subscribe(result => {
            if (result === true) {
                this.deleteSection(fieldName, sectionNumber);
                this.modalRef.hide();
            }
        });
	}

	private deleteSection(fieldName: string = 'sectionsParams', sectionNumber: number) {
        this.selectedPageFields.values[fieldName].splice(sectionNumber, 1);

        this.selectedSectionNumber = null;
        this.initSectionsAndOther(this.selectedPageFields);
	}

    private sectionsInited = false;

    initSectionsAndOther(pageFields: PageFields, process: boolean = true) {
    	if (process) {
            this.processLoadedState();
		}

        this.selectedPageFieldsOther = {
        	params: {},
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
    			for (let section of pageFields.values['sectionsParams']) {
    			    let sectionType = section.type;
    			    let sectionName = pageFields.params[key]['instancesLabels'][sectionType];
    			    //console.log(sectionName);

                    this.pageFieldsSectionsOrder.push({
                        id: orderId,
                        name: sectionName
                    });
                    orderId ++;
    			}
			} else {
    			this.selectedPageFieldsOther.params[key] = pageFields.params[key];
    			this.selectedPageFieldsOther.values[key] = pageFields.values[key];
			}
		}

		this.sectionsInited = true;
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

	validatePageFieldsValues(params, values): boolean {
    	for (let key in params) {
    		if (params[key].type !== 'composite') {
                if (params[key].required === 1 && !values[key]) {
                    return false;
                }
			} else {
                for (let section of values[key]) {
                    if (!this.validatePageFieldsValues(params[key]['availableInstances'][section.type], section)) {
                    	return false;
					}
                }
			}
		}

		return true;
	}

	save(): void {
		if (!this.validatePageFieldsValues(this.selectedPageFields.params, this.selectedPageFields.values)) {
			this.notificationService.error("Невозможно сохранить страницу, заполните обязательные поля");
			return;
		}

		this.copyOtherParamsChanges();

	    this.pageService.savePageFields(this.selectedPageId, this.getPageFieldsValues(this.selectedPageFields.params, this.selectedPageFields.values), this.language)
            .subscribe();
    }

    private copyOtherParamsChanges() {
        for (let key in this.selectedPageFieldsOther.values) {
            this.selectedPageFields.values[key] = this.selectedPageFieldsOther.values[key];
        }
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
			});
	}

	ngOnInit() {
        this.confirmationResult = new Subject();
		this.getPages();
		this.getDomains();
		this.groupedPages = [];
	}
}
