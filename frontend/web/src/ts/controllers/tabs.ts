/// <reference path="../../../../../typings/modules/angular/index.d.ts"/>
import * as ng from 'angular'
/**
 * Created by ivan on 6/20/17.
 */
export class TabsController {
	public activeTabIndex: number;

	setActiveTabIndex(index: number)
	{
		this.activeTabIndex = index;
	}

	constructor()
	{
	}
}

