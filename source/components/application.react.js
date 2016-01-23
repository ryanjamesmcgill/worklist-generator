const React = require('react');
const Stepmaster = require('./stepmaster.react');
const WorklistTable = require('./worklisttable.react');
const WorklistForm = require('./worklistform/worklistform.react');
const CustomStepsModal = require('./worklistform/customstepsmodal.react');


var Application = React.createClass({
	getDefaultProps: function(){
		return ({
			width: 970,
			worklistTableHeight: 700
		});
	},
	getInitialState: function(){
		return {
			stepmasterIsVisible: false,
			loadfileIsVisible: false
		};
	},
	_onStepmasterClick: function(e){
		this.setState({
			stepmasterIsVisible: !(this.state.stepmasterIsVisible)
		});
	},
	_onLoadfileClick: function(e){
		this.setState({
			loadfileIsVisible: !(this.state.loadfileIsVisible)
		});	
	},
	render: function(){
		var divStyle = {
	       width: this.props.width,
	       margin: 'auto',
	       paddingLeft: 15,
	       paddingRight: 15
	    };
		return ( 
			<div className="container" style={divStyle}>
				<div style={{textAlign:'left', backgroundColor: '#EDF9F8'}}>
					<h1>Worklist-Generator</h1>
				</div>
				<WorklistForm
					onStepmasterClick={this._onStepmasterClick}
					onLoadfileClick={this._onLoadfileClick}/>
				<WorklistTable
					onStepmasterClick={this._onStepmasterClick}
					width={this.props.width-(divStyle.paddingRight+divStyle.paddingLeft)}
					height={this.props.worklistTableHeight}/>
				<Stepmaster
					stepmasterIsVisible={this.state.stepmasterIsVisible}
					onStepmasterClick={this._onStepmasterClick} />
				<CustomStepsModal
					loadfileIsVisible={this.state.loadfileIsVisible} 
					onLoadfileClick={this._onLoadfileClick} />
			</div>
		);
	}
});

module.exports = Application;

