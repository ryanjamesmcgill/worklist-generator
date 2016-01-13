const React = require('react');
const Stepmaster = require('./stepmaster.react');
const WorklistTable = require('./worklisttable.react');


var Application = React.createClass({
	getInitialState: function(){
		return {
			stepmasterIsVisible: false
		};
	},
	_onStepmasterClick: function(){
		console.log('click');
		this.setState({
			stepmasterIsVisible: !(this.state.stepmasterIsVisible)
		});
	},
	render: function(){
		return ( 
		<div>
			<button className="btn btn-primary" onClick={this._onStepmasterClick}>add</button>
			<Stepmaster
				stepmasterIsVisible={this.state.stepmasterIsVisible}
				_onStepmasterClick={this._onStepmasterClick} />
			<WorklistTable />
		</div>
		);
	}
});

module.exports = Application;

