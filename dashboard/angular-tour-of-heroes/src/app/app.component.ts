import { Component } from '@angular/core';
import 'rxjs/add/operator/filter';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {MenuService} from "./menu.service";
import {MenuItem} from "./models/menu-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Админка';
  currentMenuContent = null;
  currentRoute    = null;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private menuService: MenuService,
  ) {
  }

  getMenuItems(): MenuItem[] {
      return this.menuService.getItems();
  }

  ngOnInit() {
    this.router.events
		.filter(event => event instanceof NavigationEnd)
		.subscribe(event => {
          this.currentRoute = this.route.root;
          while (this.currentRoute.children[0] !== undefined) {
            this.currentRoute = this.currentRoute.children[0];
          }
        })
  }
}
