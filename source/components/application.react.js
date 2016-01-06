const React = require('react');
const Stepmaster = require('./stepmaster.react');
const WorklistTable = require('./worklisttable.react');

var divStyle={
	position:'relative',
	height: '100%'
};

var Application = React.createClass({
	render: function(){
		console.log('render');
		return (
		<div className = 'container' style={divStyle}>
			<Stepmaster />
			<WorklistTable />
	    </div>
		);
	}
});

module.exports = Application;