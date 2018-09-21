/// <reference path="../../../../../typings/modules/angular/index.d.ts"/>
import * as ng from 'angular';

let jQuery = require ('jquery');

/**
 * Created by ivan on 6/20/17.
 */
export class OrderController {

	public trainerId;

	constructor(private $scope)
	{
		$scope.reset = (trainerForm) => {
			if (trainerForm) {
				trainerForm.$setPristine();
				trainerForm.$setUntouched();
			}
		};

		$scope.save = (form) => {
			console.log(form);

			let payload = {
				'trainer_id' : this.trainerId,
				'name' : form.name.$viewValue,
				'phone' : form.phone.$viewValue,
				'email' : form.email.$viewValue,
			};

			jQuery.post({
				url: '/ajax/create-order',
				data: payload,
				dataType: 'json',
				success : (data) => {
					if (data.status === 'success') {
						form.name = null;
						form.phone = null;
						form.email = null;
						jQuery('#trainerFormSuccess').modal('show');
					}
				}
			});
		}
	}
}