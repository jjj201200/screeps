const path = require('path');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'main.js',
		libraryTarget: 'commonjs2',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					plugins: ['lodash'],
					presets: [
						require.resolve('babel-preset-react'), // React preset is needed only for flow support.
						require.resolve('babel-preset-es2015')
					]
				},
			},
		],
	},
	plugins: [
		new LodashModuleReplacementPlugin
	]
};