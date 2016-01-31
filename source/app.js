/* IE 8 Compatability */
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/application.react');
var StepUtils = require('./utils/StepUtils');
var WorklistFromUtils = require('./utils/WorklistFormUtils');

console.log('[worklist-generator] app.js loaded');

StepUtils.generateMasterSteps();
WorklistFromUtils.initializeWorklistFormOptions();
ReactDOM.render(<Application />, document.getElementById('react-application'));