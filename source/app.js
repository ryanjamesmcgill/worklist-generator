const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('./components/application.react');
const StepUtils = require('./utils/StepUtils');
const WorklistFromUtils = require('./utils/WorklistFormUtils');

console.log('[worklist-generator] app.js loaded');

StepUtils.generateMasterSteps();
WorklistFromUtils.initializeWorklistFormOptions();
ReactDOM.render(<Application />, document.getElementById('react-application'));