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

	private convertDateToDate(dateStr: string) {
		if (dateStr === null || dateStr === undefined) {
			return null;
		}
		let parts = dateStr.split(".");
		let date = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));

		return date;
	}

	convertDate(dateStr: string, offset: number = 0): string|null {
		if (dateStr === null || dateStr === undefined) {
			return null;
		}
		let parts = dateStr.split(".");
		let date = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
		date.setDate(date.getDate() + offset);
		let result = date.toDateString();
		console.log(result);

		return result;
	}



	constructor(private $scope)
	{
		this.from = null;
		this.to = null;
		$scope.apply = () => {
			console.log('Hello');
			if ($scope.from && $scope.to) {
				let fromDate = this.convertDateToDate($scope.from);
				let toDate = this.convertDateToDate($scope.to);
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