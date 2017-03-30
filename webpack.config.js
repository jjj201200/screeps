const path                          = require('path'),
      LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
module.exports                      = {
	entry  : './src/main.js',
	output : {
		path         : path.resolve(__dirname, './'),
		pathinfo     : true,
		filename     : 'main.js',
		libraryTarget: 'commonjs2',
	},
	module : {
		loaders: [
			{
				test   : /\.js$/,
				loader : 'babel-loader',
				enforce: 'pre',
				exclude: /node_modules/,
				query  : {
					plugins: [
						'lodash',
						require.resolve('babel-plugin-add-module-exports'),
						require.resolve("babel-plugin-dynamic-import-webpack"),
						// https://github.com/screepers/screeps-regenerator
						require.resolve('screeps-regenerator-preset'),
					],
					presets: [
						// React preset is needed only for flow support.
						require.resolve('babel-plugin-add-module-exports'),
						require.resolve("babel-plugin-dynamic-import-webpack")
					]
				},
			},
		],
	},
	plugins: [
		new LodashModuleReplacementPlugin
	]
};