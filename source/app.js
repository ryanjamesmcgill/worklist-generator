const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('./components/application.react');


console.log('[worklist-generator] app.js loaded');
ReactDOM.render(<Application />, document.getElementById('react-application'));