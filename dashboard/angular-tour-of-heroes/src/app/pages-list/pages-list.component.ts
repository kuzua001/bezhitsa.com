import { Component, OnInit, ElementRef } from '@angular/core';
import {Domain} from "../models/domain.interface";
import {Page} from "../models/page.interface";
import {PagesService} from "../pages.service";

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css']
})
export class PagesListComponent implements OnInit {

    groupedPages: object[][];
    pages:   Page[];
    domains: Domain[];
    domainsLoaded =  false;
    pagesLoaded =  false;
    selectedDomain: number = 1;

    constructor(private elRef: ElementRef, private pageService: PagesService) {}


    getHtmlContent() {
        //This will return '<p> Text </p>' as a string
        return this.elRef.nativeElement.innerHTML;
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

        console.log('pages-list');
    }

}
