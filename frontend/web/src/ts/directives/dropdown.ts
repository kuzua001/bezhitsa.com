import * as ng from 'angular';

export class CustomDropdown implements ng.IDirective {
	restrict = 'C';

	link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
		scope.showDropdown = false;

		element.on('click', function(e) {
			scope.showDropdown = !scope.showDropdown;
			element.toggleClass('dropdown-active', scope.showDropdown);
			e.stopPropagation();
		});

		/*element.find('.dropdown-list li:not(.triangle-container)').on('mouseover', (e) => {
			//console.log(angular.element(e.currentTarget).index());
			if (angular.element(e.currentTarget).index() === 1) {
				scope.firstItemSelected = true;
			}
		});*/

		this.$document.on('click', (e) => {
			console.log(e);
			if (e.currentTarget !== element) {
				scope.showDropdown = false;
				element.removeClass('dropdown-active');
			}
		});
	};

	constructor(private $window, private $document) {

	}
}
