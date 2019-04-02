
import { App } from "./app-setup";
import Vue from 'vue';

Vue.config.productionTip = false;

/* Add imports and call Vue.use */

/** App Initialise */
App.initialise();


// require all test files (files that ends with .spec.js)
const testsContext = require.context('.', true, /\.spec\.ts$/);
testsContext.keys().forEach(testsContext);

/* ======= COVERAGE ======== */
// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
// const srcContext = require.context('../../source', true, /^\.\/(?!main(\.js)?$)/)
// srcContext.keys().forEach(srcContext)


