const React = require('react');
const Stepmaster = require("./stepmaster.react");


var Application = React.createClass({
	render: function(){
		console.log('render');
		return (
		<div className = 'container'>
			<Stepmaster />
	    </div>
		);
	}
});

module.exports = Application;