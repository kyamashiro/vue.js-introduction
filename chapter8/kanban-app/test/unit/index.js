import Vue from 'vue'

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('../e2e/specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js or router/*.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!.*(?:main|router)).*(\.js)?$/)
srcContext.keys().forEach(srcContext)
