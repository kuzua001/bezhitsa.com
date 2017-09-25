/// <reference path="../../../../../typings/modules/angular/index.d.ts"/>
import * as ng from 'angular'

import * as jQuery from 'jquery';

/**
 * Created by ivan on 6/20/17.
 */
export class SiteController
{
	slideMenuState: boolean = false;

	toggleMenu()
	{
		this.slideMenuState = !this.slideMenuState;
	}

	setMenuState(state: boolean)
	{
		this.slideMenuState = state;
	}

	scrollBodyTo(selector: string)
	{
		jQuery('html, body').animate({
			scrollTop: jQuery(selector).offset().top - 50
		}, 500);
	}

	constructor()
	{
	}
}

