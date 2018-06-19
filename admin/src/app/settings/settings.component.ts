import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { PagesService } from '../pages.service';
import { Page } from '../models/page.interface';
import { Domain } from '../models/domain.interface';

import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";
import {PageFields} from "../models/page-fields.interface";
import {Subject} from "rxjs/Subject";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {SettingsService} from "../settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css', '../page-editor-field/page-editor-field.component.css'],
})
export class SettingsComponent implements OnInit {

	private groupSettings = null;

	private initialValues;

	constructor(
		private pageService: PagesService,
		private selectItemService: SelectItemService,
		private settinsService: SettingsService
	) {
        selectItemService.event$.subscribe((event: SelectItemEvent) => {
            if (event.itemType === SelectItemEvent.Type.SettingsGroup) {
                this.groupSettings = event.payload.groupData;
                this.initialValues = [];
                for (let subGroupTitle in this.groupSettings) {
                	for (let item of this.groupSettings[subGroupTitle]) {
                		this.initialValues[item.id] = item.value;
					}
				}
                console.log('ivaules:');
                console.log(this.initialValues);
            }
        });
	}

	public save() {
        for (let subGroupTitle in this.groupSettings) {
            for (let item of this.groupSettings[subGroupTitle]) {
                if (this.initialValues[item.id] !== item.value) {
                	this.settinsService.save(item);
				}
            }
        }
	}

	ngOnInit() {

	}
}
