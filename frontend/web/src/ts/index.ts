import {$,jQuery} from 'jquery';
window.$ = $;
window.jQuery = jQuery;
import * as angular from 'angular';
import 'angular-route';
import 'angular-touch';
import 'angular-picture';
import "angular-responsive-images/src/angular-responsive-images.js";
import "./misc/app";
import 'slick-carousel/slick/slick.min.js';
import 'angular-slick-carousel';


import { ReservationFormController } from './controllers/reservation_form';
import { SiteController } from './controllers/site';
import { SliderController } from './controllers/slider';

export default angular
	.module('main', ['ngRoute', 'ngTouch', 'bhResponsiveImages', 'slickCarousel'])
	.controller('ReservationFormController', ReservationFormController)
	.controller('SiteController', SiteController)
	.controller('SliderController', SliderController)
	.filter('html', ['$sce', ($sce) => {
		return (htmlCode) => {
			return $sce.trustAsHtml(htmlCode);
		}
	}]);


// Bootstrap the angular app module
//angular
//	.bootstrap(document.body, ['main']);
