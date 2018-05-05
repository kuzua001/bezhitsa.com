/// <reference path="../../../../../typings/modules/angular/index.d.ts"/>
import * as ng from 'angular'

let jQuery = require ('jquery');

/**
 * Created by ivan on 6/20/17.
 */
export class ReservationController
{
	from: string;
	to: string;

	constructor(private $scope)
	{
		this.from = null;
		this.to = null;
		$scope.from = null;
		$scope.to = null;
		$scope.apply = () => {
			if ($scope.from && $scope.to) {
				let fromDate = $scope.from;
				let toDate = $scope.to;
				let nights = Math.abs(toDate - fromDate) / 3600 / 24000;
				let fromFormatted = fromDate.getFullYear() + '-' +
					("0" + (fromDate.getMonth() + 1)).slice(-2) + '-' +
					("0" + (fromDate.getDate())).slice(-2);

				let url = '/booking/?date=' + fromFormatted + '&nights=' + nights;

				window.location.href = url;
			}
		};
	}
}