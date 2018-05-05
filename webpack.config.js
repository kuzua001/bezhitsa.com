var path   = require('path');
var webpack = require('webpack');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

var distPath = path.join(__dirname, '/frontend/web/js/built');

var uglify = new webpackUglifyJsPlugin({
	cacheFolder: distPath,
	debug: true,
	minimize: true,
	sourceMap: false,
	output: {
		comments: false
	},
	compressor: {
		warnings: false
	}
});

var jqueryPlugin = new webpack.ProvidePlugin({
	'window.jQuery': 'jquery',
	'windows.$': 'jquery'
});

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
			{ test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
		]
	},
	plugins : [
		jqueryPlugin, uglify
	]
}