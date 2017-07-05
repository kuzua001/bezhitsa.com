import * as angular from 'angular';
import 'angular-route';

import { ReservationFormController } from './controllers/reservation_form';
import { HeaderController } from './controllers/header';
import { HoverDirective } from './directives/hover';


export default angular
	.module('main', ['ngRoute'])
	.controller('ReservationFormController', ReservationFormController)
	.controller('HeaderController', HeaderController)
	.directive('hover', HoverDirective);


// Bootstrap the angular app module
//angular
//	.bootstrap(document.body, ['main']);
