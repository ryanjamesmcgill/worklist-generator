const React = require('react');

var Application = React.createClass({
	render: function(){
		return (
			<div className="container-fluid">
			<p> Loaded from application.react.js </p>
			</div>
		);
	}
});

module.exports = Application;