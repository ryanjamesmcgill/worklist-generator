const React = require('react');
const WorklistFormActionCreators = require('../../actions/WorklistFormActionCreators');
const WorklistFormStore = require('../../stores/WorklistFormStore');
const DateSelection = require('./dateselection.react');
const DefectSelection = require('./defectselection.react');
const DataTypeSelection = require('./datatypeselection.react');
const LoadButton = require('./loadbutton.react');
const SaveButton = require('./savebutton.react');
const XlsxUtils = require('../../utils/XlsxUtils');
const queryString = require('query-string');



var WorklistForm = React.createClass({
	getInitialState: function(){
		const parsed = queryString.parse(location.search);
		return parsed;
	},
	_onSubmit: function(e){
		e.preventDefault();
		var startday = this.refs.form[0].value;
		var endday  = this.refs.form[1].value;
		var dates = {
			startday: startday,
			endday: endday
		};
		WorklistFormActionCreators.setSelectionsDates(dates);
		var selections = WorklistFormStore.getSelections();
		console.log('worklistform submitted');
		XlsxUtils.generateWorklist();
	},
	_onAddSteps: function(e){
		e.preventDefault();
		this.props.onStepmasterClick();
	},
	render: function(){
		var SaveButtonWrapper;
		if(this.state.save){
			SaveButtonWrapper = <SaveButton /> ;
		} else {
			SaveButtonWrapper = null;
		}
		return ( 
			<div className="worklist-form-container">
			<form className="worklist-form" ref="form">
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
	        					{ SaveButtonWrapper }
	        					<LoadButton 
	        						onLoadfileClick={this.props.onLoadfileClick} />
	        				</div>
							<div className="btn-group" style={{marginLeft: 20}}>
        						<button type="submit" onClick={this._onSubmit} className="btn btn-primary">Generate Worklist</button>
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