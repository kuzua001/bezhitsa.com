import { Component, OnInit } from '@angular/core';
import { SubMenuComponent } from '../sub-menu.component';
import { SettingsListComponent } from '../../settings-list/settings-list.component'

@Component({
  selector: 'sub-menu-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SubMenuSettingsComponent extends SubMenuComponent {

  ngOnInit() {
  }

}