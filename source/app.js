/* IE 8 Compatability */
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('./components/application.react');
const StepUtils = require('./utils/StepUtils');
const WorklistFromUtils = require('./utils/WorklistFormUtils');

console.log('[worklist-generator] app.js loaded');

StepUtils.generateMasterSteps();
WorklistFromUtils.initializeWorklistFormOptions();
ReactDOM.render(<Application />, document.getElementById('react-application'));