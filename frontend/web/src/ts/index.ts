import * as angular from 'angular';
import 'angular-route';
import 'angular-touch';


import { ReservationFormController } from './controllers/reservation_form';
import { SiteController } from './controllers/site';
import { SliderController } from './controllers/slider';
import { HoverDirective } from './directives/hover';


export default angular
	.module('main', ['ngRoute', 'ngTouch'])
	.controller('ReservationFormController', ReservationFormController)
	.controller('SiteController', SiteController)
	.controller('SliderController', SliderController)
	.directive('hover', HoverDirective)
	.filter('html', ['$sce', ($sce) => {
		return (htmlCode) => {
			return $sce.trustAsHtml(htmlCode);
		}
	}]);


// Bootstrap the angular app module
//angular
//	.bootstrap(document.body, ['main']);
