const React = require('react');
const DateSelection = require('./dateselection.react');
const DefectSelection = require('./defectselection.react');
const NormalizationSelection = require('./normalizationselection.react');



var Application = React.createClass({
	render: function(){
	    var divStyle = {
	            width: this.props.width,
	            margin: 'auto'
	    };
		return ( 
			<div style={divStyle}>
			<form>
			    <div className="row">
    			    <div className="col-md-4"><DateSelection /></div>
                    <div className="col-md-4"><DefectSelection /></div>
                    <div className="col-md-4"><NormalizationSelection /></div>
    			</div>
				<div className="row">
				    <div className="col-md-12">
        				<div className="form-group">
        				<button className="btn btn-default">Add Steps..</button>
        				<button type="submit" className="btn btn-primary">Generate Worklist</button>
    				</div>
				</div>
				</div>
			</form>
			</div>
		);
	}
});

module.exports = Application;
