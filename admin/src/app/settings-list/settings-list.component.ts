import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PagesService} from '../pages.service';
import {Page} from '../models/page.interface';
import {Domain} from '../models/domain.interface';

import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {SettingsService} from "../settings.service";

@Component({
    selector: 'settings-list',
    templateUrl: './settings-list.component.html',
    styleUrls: ['./settings-list.component.css']
})
export class SettingsListComponent implements OnInit {
    groupedSettings: any = null;
    domains: Domain[] = null;

    settingsLoaded: boolean = false;
    domainsLoaded: boolean = false;

    selectedDomain: number = 1;
    selectedGroupTitle: string = null;

    loadGroup(groupTitle: string) {
        this.selectedGroupTitle = groupTitle;
        let group = this.groupedSettings[this.selectedDomain][groupTitle];
        this.selectItemService.emit(new SelectItemEvent(
            SelectItemEvent.Type.SettingsGroup,
            {
                groupTitle: groupTitle,
                groupData: group
            }
        ));
    }

    constructor(private pageService: PagesService,
                private selectItemService: SelectItemService,
                private settingsService: SettingsService,) {
    }

    loadSettings(): void {
        this.getSettings();
        for (let domain of this.domains) {
            this.getSettings(domain.id);
        }
    };

    getSettings(siteId?: number): void {
        this.settingsService.getSettings(siteId)
            .subscribe(settings => {
                this.groupedSettings[siteId ? siteId : 0] = settings;
                this.settingsLoaded = true;
            });
    }

    getDomains(): void {

        this.pageService.getDomains()
            .subscribe(domains => {
                this.domains = domains;
                this.domainsLoaded = true;
                this.loadSettings();
            });
    }

    ngOnInit() {
        this.groupedSettings = [];
        this.getDomains();
    }
}