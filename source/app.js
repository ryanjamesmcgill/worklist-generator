const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('./components/application.react');
const StepUtils = require('./utils/StepUtils');

console.log('[worklist-generator] app.js loaded');

StepUtils.generateMasterSteps();
ReactDOM.render(<Application />, document.getElementById('react-application'));