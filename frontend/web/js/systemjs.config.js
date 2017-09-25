(function (global) {
	System.config({
		map: {
			angular : '/js/node_modules/angular/angular.js',
			'angular-route' : '/js/node_modules/angular-route/angular-route.min.js',
			'angular-touch' : '/js/node_modules/angular-touch/angular-touch.min.js',
			'angular-resource' : '/js/node_modules/angular-resource/angular-resource.min.js',
			jquery : '/js/node_modules/jquery/dist/jquery.min.js',
			rxjs: '/js/node_modules/rxjs',
			main: '/js/built'
		},
		packages: {
			main: {
				main: './index.js',
				defaultExtension: 'js',
			},
			rxjs: {
				defaultExtension: 'js'
			}
		},
		meta : {
			angular : {
				format : 'global',
				exports: 'angular',
				deps : [
					'jquery'
				]
			},
			main : {
				deps : ['angular']
			}
		}
	});
})(this);
