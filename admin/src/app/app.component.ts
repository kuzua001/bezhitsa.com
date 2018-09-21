import {Component} from '@angular/core';
import 'rxjs/add/operator/filter';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {MenuService} from "./menu.service";
import {MenuItem} from "./models/menu-item";
import {SelectItemService} from "./select-item.service";
import {SelectItemEvent} from "./models/select-item-event";
import * as $ from 'jquery';
import {NotificationService} from "./notification.service";
import {NotificationEvent} from "./models/notification-event";
import {AuthenticationService} from "./authentication.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Админка';
    currentMenuContent = null;
    currentRoute = null;
    languageEn = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private menuService: MenuService,
                private selectItemService: SelectItemService,
                private notificationService: NotificationService,
                private auth: AuthenticationService) {
        this.notificationService.onError((event: NotificationEvent) => {
            AppComponent.showErrorAlert(event.message);
        });
        this.auth.checkAuth();
    }

    public isAuthorized()
    {
        return this.auth.isAuthenticated();
    }

    private hideAlert() {
        $('.alert-element').hide();
    }

    public getUserName() {
        return this.auth.getUserName();
    }

    public logout()
    {
        this.auth.logout();
    }

    private static showErrorAlert(message: string) {
        $('.alert-element .message').text(message);
        $('.alert-element').show();
    }

    toggleLanguage() {
        this.languageEn = !this.languageEn;
        this.selectItemService.emit(new SelectItemEvent(SelectItemEvent.Type.LanguageChange, {
            language: this.languageEn ? 2 : 1
        }));

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
