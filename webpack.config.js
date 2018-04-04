const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const rootPath = process.cwd();
const globalPath = path.resolve(rootPath, 'global');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './'),
        // pathinfo: true,
        filename: 'main.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                enforce: 'pre',
                exclude: /node_modules/,
                query: {
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
    resolve: {
        alias: { // 这里需要个app.js里保持一致
            Classes: path.resolve(globalPath, 'classes'),
            Extensions: path.resolve(globalPath, 'extensions'),
            Settings: path.resolve(globalPath, 'settings'),
        },
        mainFiles: ['index'],
        extensions: ['.js', '.json', '.jsx', '.css', '.less', '.scss', '.sass'],
    },
    plugins: [
        new LodashModuleReplacementPlugin,
    ]
};