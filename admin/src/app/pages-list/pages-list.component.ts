import {Component, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import {PagesService} from '../pages.service';
import {Page} from '../models/page.interface';
import {Domain} from '../models/domain.interface';

import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {HttpClient} from "@angular/common/http";
import {Action} from "../models/action";
import {PageType} from "../models/page-type";
import {bindToComponentState} from "../storage";
import {State} from "../models/state";

@Component({
    selector: 'pages-list',
    templateUrl: './pages-list.component.html',
    styleUrls: ['./pages-list.component.css']
})
export class PagesListComponent extends State implements OnInit {
    groupedPages: object[][];
    pages: Page[];
    domains: Domain[];
    actions: Action[];
    pageTypes: PageType[];

    domainsLoaded = false;
    pagesLoaded = false;

    @bindToComponentState
    selectedDomain: number;

    @bindToComponentState
    selectedPageId: number;

    processLoadedState()
    {
        let state = this.getState();
        for (let key in state)
        {
            this[key] = state[key];
        }

        this.loadPage(this.pages.find(p => p.id == this.selectedPageId), true);
    }

    modalRef: BsModalRef;

    loadPage(page: Page, initial: boolean = false) {
        this.selectedPageId = page.id;
        this.selectItemService.emit(new SelectItemEvent(
            SelectItemEvent.Type.Page,
            {
                page: page,
                pageId: page.id,
                initial: initial
            }
        ));
    }

    findDomainById(domainId) {
        return this.domains.find(d => d.id == domainId);
    }

    openModal(template: TemplateRef<any>, options) {
        this.modalRef = this.modalService.show(template, options);
    }

    constructor(private pageService: PagesService,
                private selectItemService: SelectItemService,
                private modalService: BsModalService) {
        super();
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

    createNewPage(
        name: string,
        domainId: number,
        pageTypeId: number,
        showInMenu: boolean,
        url: string,
        actionId: number
    ): void {
        this.pageService.createPage({
           'name' : name,
           'domain_id' : domainId,
           'pages_id' : pageTypeId,
           'show_in_menu' : showInMenu,
           'url' : url,
           'action_id' : actionId,
        }).subscribe(page => {
            this.groupedPages[page.domain_id].push(page);
            this.selectedDomain = domainId;
        });
    }

    getPages(): void {

        this.pageService.getPages()
            .subscribe(pages => {
                this.pages = pages;
                this.pagesLoaded = true;
                this.groupPages();
                this.processLoadedState();
            });
    }

    getDomains(): void {

        this.pageService.getDomains()
            .subscribe(domains => {
                this.domains = domains;
                this.domainsLoaded = true;
                this.groupPages();
                this.processLoadedState();
            });
    }

    getActions(): void {
        this.pageService.getActions()
            .subscribe(actions => {
                this.actions = actions.filter(a => a.is_available == true);
            });
    }

    getPagesTypes(): void {
        this.pageService.getPageTypes()
            .subscribe(pageTypes => {
                this.pageTypes = pageTypes;
            });
    }

    ngOnInit() {
        this.getPages();
        this.getDomains();
        this.getActions();
        this.getPagesTypes();
        this.groupedPages = [];
    }
}