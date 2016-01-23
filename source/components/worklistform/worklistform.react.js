const React = require('react');
const DateSelection = require('./dateselection.react');
const DefectSelection = require('./defectselection.react');
const DataTypeSelection = require('./datatypeselection.react');
const LoadButton = require('./loadbutton.react');

var WorklistForm = React.createClass({
	_onAddSteps: function(e){
		e.preventDefault();
		this.props.onStepmasterClick();
	},
	render: function(){
		return ( 
			<div className="worklist-form-container">
			<form className="worklist-form">
			    <div className="row">
    			    <div className="col-md-4"><DateSelection /></div>
                    <div className="col-md-4"><DefectSelection /></div>
                    <div className="col-md-4"><DataTypeSelection /></div>
    			</div>
    			<hr />
				<div className="row">
				    <div className="col-md-12">
        				<div className="row form-group" style={{textAlign:'center'}}>
        					<div className="btn-group" role="group">
	        					<button className="btn btn-default" onClick={this._onAddSteps}>Add Steps..</button>
	        					<LoadButton 
	        						onLoadfileClick={this.props.onLoadfileClick} />
	        				</div>
							<div className="btn-group" style={{marginLeft: 20}}>
        						<button type="submit" className="btn btn-primary">Generate Worklist</button>
							</div>	        				
    					</div>
					</div>
				</div>
			</form>
			</div>
		);
	}
});

module.exports = WorklistForm;