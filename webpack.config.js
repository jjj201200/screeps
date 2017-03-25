const path = require('path');
module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname,'./'),
		filename: 'main.js',
		libraryTarget: 'commonjs2',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: [
						require.resolve('babel-preset-react'), // React preset is needed only for flow support.
						require.resolve('babel-preset-es2015')
					]
				},
			},
		],
	},
};