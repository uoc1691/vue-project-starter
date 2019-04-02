'use strict';

const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config');

const testWebpackConfig = merge(baseWebpackConfig, {
    mode: "development",
    context: __dirname,
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
        ]
    }
});

module.exports = testWebpackConfig;