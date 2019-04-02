'use strict';

const stringifyObject = require('stringify-object'); //Use this to out put webpack configuration content to debug

function buildConfig(env) {
    env = env || {};
    console.log("buildConfig env vars => " + JSON.stringify(env));
    console.log("NODE_ENV => " + process.env.NODE_ENV);

    var configId = env.production ? "prod" : "dev";

    if (process.env.NODE_ENV === "test") {
        console.log("webpack.test.config");
        return require("./webpack.test.config");
    }
    if (configId === "prod") {
        console.log("webpack.prod.config");
        return require('./webpack.prod.config');
    }
    console.log("webpack.dev.config");
    return require('./webpack.dev.config');
}



module.exports = buildConfig;