/// <reference path="../../../../../typings/modules/angular/index.d.ts"/>
import * as ng from 'angular'

import * as jQuery from 'jquery';

/**
 * Created by ivan on 6/20/17.
 */
export class SliderController
{
	public currentSlide: number = 0;
	public previousSlide: number = 0;
	public slides: any[];

	swipe(left: boolean) {
		let i = this.currentSlide;
		i += left ? -1 : 1;
		if (i < 0) i = this.slides.length - 1;
		if (i >= this.slides.length) i = 0;

		this.changeSlide(i);
	}

	changeSlide(slide: number) {
		this.previousSlide = this.currentSlide;
		this.currentSlide = slide;
	}
}