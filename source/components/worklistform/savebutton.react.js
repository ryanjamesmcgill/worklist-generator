const React = require('react');
const filesaver = require('filesaver.js');
const StepStore = require('../../stores/StepStore');
const Blob = require('blob');

var SaveButton = React.createClass({
	_onClick: function(e){
		e.preventDefault();
		var steps = StepStore.getWorklistSteps();
		var json = JSON.stringify(steps);
		var blob = new Blob([json], {type: "application/json"});
		filesaver.saveAs(blob, "steps.json");
	},
	render: function(){
		return ( 
				<button className="btn btn-default" onClick={this._onClick}>Save</button>
		);
	}
});

module.exports = SaveButton;