const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('./components/application.react');
const StepmasterUtils = require('./utils/StepmasterUtils');

console.log('[worklist-generator] app.js loaded');

StepmasterUtils.generateStepmaster();
ReactDOM.render(<Application />, document.getElementById('react-application'));