import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PagesService } from '../pages.service';
import { Page } from '../models/page.interface';
import { Domain } from '../models/domain.interface';

import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";

@Component({
  selector: 'pages-list',
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
  selectedPageId: number;

  loadPage(pageId: number) {
      this.selectedPageId = pageId;
      this.selectItemService.emit(new SelectItemEvent(
        SelectItemEvent.Type.Page,
        {
          pageId : pageId
        }
    ));
  }

  constructor(private pageService: PagesService, private selectItemService: SelectItemService) { }

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