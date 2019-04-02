"use strict"

const path = require('path');
const entryPoints = require('./entrypoints').default;

module.exports = {
    entryPoints: entryPoints,
    outputRoot: path.resolve(__dirname, "../../dist")
};