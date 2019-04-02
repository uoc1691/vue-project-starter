'use strict';

const merge = require('webpack-merge');
const extractStyles = new (require('extract-text-webpack-plugin'))('projectmanagement.css');
const baseWebpackConfig = require('./webpack.base.config');
const config = require("./config");

const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.less/,
                loader: extractStyles.extract('css-loader!less-loader')
            }
        ]
    },
    entry: config.entryPoints,
    output: {
        path: config.outputRoot,
        filename: '[name].js',
        publicPath: config.outputRoot
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

prodWebpackConfig.plugins.push(extractStyles);

module.exports = prodWebpackConfig;