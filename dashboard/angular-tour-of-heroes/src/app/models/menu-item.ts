import { Component, OnInit } from '@angular/core';
import { SubMenu } from './sub-menu';

export class MenuItem {
	constructor(
		private path: string,
		private name: string,
		private subMenu: SubMenu
	) {}

	getPath() {
		return this.path;
	}

	getName() {
		return this.name;
	}

	getSubmenu(): SubMenu {
		return this.subMenu;
	}
}