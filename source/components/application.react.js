const React = require('react');
const Stepmaster = require("./stepmaster.react");

var Application = React.createClass({
	render: function(){
		return (
		<div className = 'container'>
			<Stepmaster />
	    </div>
		);
	}
});

module.exports = Application;
