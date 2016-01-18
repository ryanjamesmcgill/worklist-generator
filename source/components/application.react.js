const React = require('react');
const Stepmaster = require('./stepmaster.react');
const WorklistTable = require('./worklisttable.react');
const WorklistForm = require('./worklistform/worklistform.react');


var Application = React.createClass({
	getDefaultProps: function(){
		return ({width: 960});
	},
	getInitialState: function(){
		return {
			stepmasterIsVisible: false
		};
	},
	_onStepmasterClick: function(){
		this.setState({
			stepmasterIsVisible: !(this.state.stepmasterIsVisible)
		});
	},
	render: function(){
		return ( 
			<div style={{textAlign: 'center'}}>
				<button className="btn btn-primary" onClick={this._onStepmasterClick}>add</button>
				<Stepmaster
					stepmasterIsVisible={this.state.stepmasterIsVisible}
					onStepmasterClick={this._onStepmasterClick} />
				<WorklistForm 
					width={this.props.width}/>
				<WorklistTable
					onStepmasterClick={this._onStepmasterClick}
					width={this.props.width}/>
			</div>
		);
	}
});

module.exports = Application;

