var path = require('path');

var distPath = path.join(__dirname, '/frontend/web/js/built');


module.exports = {
	/*devtool: 'inline-source-map',*/
	entry: './frontend/web/src/ts/index.ts',
	output: {
		filename: 'index.js',
		path : distPath
	},
	resolve: {
// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: ['.ts', '.tsx', '.js'],
		modules: ["node_modules"]
	},
	module: {
		loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		]
	}
}