(function(global) {

	// map tells the System loader where to look for things
	var map = {
		'app':                        '/admin/js/built', // 'dist',
		'@angular':                   '/admin/js/node_modules/@angular',
		'ng2-restangular':            '/admin/js/node_modules/ng2-restangular',
		'rxjs':                       '/admin/js/node_modules/rxjs',
		'lodash':                     '/admin/js/node_modules/lodash',
		jquery :                      '/admin/js/node_modules/jquery/dist/jquery.min.js',
		bootstrap :                   '/admin/js/bootstrap.min.js',
		spectrum :                    '/admin/js/spectrum.js',
		jqueryui :                    '/admin/js/jqueryui.min.js',
	};

	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'app':                        { main: 'index.js?v=' + Math.floor(Math.random(99999)),   defaultExtension: 'js' },
		"ng2-restangular":            { main: './dist/esm/src/index.js',  defaultExtension: 'js'},
		'rxjs':                       { main: "./Rx.js", defaultExtension: 'js' },
		'lodash':                     { main: './lodash.js', defaultExtension: 'js'},
	};

	var ngPackageNames = [
		'common',
		'compiler',
		'core',
		'forms',
		'http',
		'platform-browser',
		'platform-browser-dynamic',
		'router',
		'upgrade',
	];

	// Individual files (~300 requests):
	function packIndex(pkgName) {
		packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
	}

	// Bundled (~40 requests):
	function packUmd(pkgName) {
		packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
	}

	// Most environments should use UMD; some (Karma) need the individual index files
	var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

	// Add package entries for angular packages
	ngPackageNames.forEach(setPackageConfig);

	var config = {
		map: map,
		packages: packages
	};

	System.config(config);

})(this);