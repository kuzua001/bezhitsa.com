/// <reference path="../../../../../typings/modules/angular/index.d.ts"/>
import * as ng from 'angular'
/**
 * Created by ivan on 6/20/17.
 */
export class TabsController {
	private activeTabIndex: number;

	public setActiveTabIndex(index: number)
	{
		this.activeTabIndex = index;
	}

	public getActiveClass(index: number)
	{
		return (this.activeTabIndex === index) ? 'active' : '';
	}

	constructor()
	{
		this.activeTabIndex = 1;
	}
}

