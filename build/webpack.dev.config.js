'use strict';

const path = require("path");
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const config = require("./config");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    entry: config.entryPoints,
    output: {
        path: config.outputRoot,
        filename: '[name].js',
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial",
                    enforce: true
                }
            }
        }
    },
    target: "web",
    node: false
});

devWebpackConfig.plugins.push(new HtmlWebpackPlugin({
    template: "./../src/app/index.html",
    filename: "./index.html"
}));

module.exports = devWebpackConfig;