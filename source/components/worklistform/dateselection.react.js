const React = require('react');
const DatePicker = require('react-datepicker');
const moment = require('moment');
const $ = require('jquery');


var DateSelection= React.createClass({
    getInitialState: function(){
        return {
            startDate: moment()
        };
    },
    handleChange: function(date){
        var inputNode = this.refs.fromdate.refs.input;
        var startDays;
        if(date){
            var now = moment();
            startDays = date.diff(now, 'days');
            inputNode.state.maybeDate=startDays;
        }
        this.setState({
            startDate: date,
            startDays: startDays
        });
    },
	render: function(){
		console.log('startDays: ', this.state.startDays);
		return ( 
		        <div className="form-horizontal">
		            <div className="form-group">
    			        <lable htmlFor="inputFromDate" className="col-sm-2 control-label"><p>From:</p></lable>
    			        <div className="col-sm-10">
    			            <DatePicker
    			                ref='fromdate'
    			                className="form-control fromdate"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                dateFormat={"[0]"}
                                />
        				</div>
    				</div>
    				<div className="form-group">
    				    <lable htmlFor="inputToDate" className="col-sm-2 control-label">To:</lable>
    				    <div className="col-sm-10">
    				        <input id="inputToDate" type="text" className="col-sm-10 form-control" placeholder="# of days.." />
    				    </div>
    				</div>
		        </div>
		);
	}
});

module.exports = DateSelection;
