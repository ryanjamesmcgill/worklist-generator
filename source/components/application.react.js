const React = require('react');
const Stepmaster = require("./stepmaster.react");
const ResizeTest = require("./resizetest.react");

var Application = React.createClass({
	
	render: function(){
		return (
		<div className = 'container'>
			<Stepmaster />
			<ResizeTest style={{position: 'float'}}/>
	    </div>
		);
	}
});

module.exports = Application;


