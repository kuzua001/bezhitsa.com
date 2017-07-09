(function (global) {
	System.config({
		map: {
			angular : 'js/node_modules/@angular/core/bundles/core.umd.js',
			'@angular/core': 'js/node_modules/@angular/core/bundles/core.umd.js',
			'@angular/common': 'js/node_modules/@angular/common/bundles/common.umd.js',
			'@angular/compiler': 'js/node_modules/@angular/compiler/bundles/compiler.umd.js',
			'@angular/platform-browser': 'js/node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic': 'js/node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/http': 'js/node_modules/@angular/http/bundles/http.umd.js',
			'@angular/router': 'js/node_modules/@angular/router/bundles/router.umd.js',
			'@angular/forms': 'js/node_modules/@angular/forms/bundles/forms.umd.js',

			jquery : 'js/node_modules/jquery/dist/jquery.slim.js',
			rxjs: 'js/node_modules/rxjs',
			main: 'js/built'
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
