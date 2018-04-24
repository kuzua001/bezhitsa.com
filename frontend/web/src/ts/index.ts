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
import 'angularjs-datepicker';


import { SiteController } from './controllers/site';
import { SliderController } from './controllers/slider';
import { ReservationController } from './controllers/reservation';
import { TabsController } from './controllers/tabs';
import { CustomDropdown } from "./directives/dropdown";

export default angular
	.module('main', ['ngRoute', 'ngTouch', 'bhResponsiveImages', 'slickCarousel', '720kb.datepicker'])
	.controller('SiteController', SiteController)
	.controller('ReservationController', ['$scope', ($scope) => new ReservationController($scope)])
	.controller('SliderController', SliderController)
	.controller('TabsController', TabsController)
	.directive('customDropdown', ['$window', '$document', ($window, $document) => new CustomDropdown($window, $document)])
	.filter('html', ['$sce', ($sce) => {
		return (htmlCode) => {
			return $sce.trustAsHtml(htmlCode);
		}
	}]);


// Bootstrap the angular app module
//angular
//	.bootstrap(document.body, ['main']);
