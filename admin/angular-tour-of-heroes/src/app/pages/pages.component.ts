import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { Page } from '../models/page.interface';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pages: Page[];

  constructor() { }


  // getPages(): void {
  //
  //     this.pageService.getPages()
  //         .subscribe(pages => this.pages = pages);
  // }

  ngOnInit() {
  }

}
