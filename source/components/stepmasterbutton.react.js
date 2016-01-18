const React = require('react');
const StepStore = require('../stores/StepStore');
const StepActionCreators = require('../actions/StepActionCreators');
const Cell = require('fixed-data-table').Cell;

var cellStyle = {
    height: 45,
    width: "100%",
}

var buttonStyle = {
    height: 30,
    width: "100%",
    padding: 0
}

var StepmasterButton = React.createClass({
    _onClick: function(e){
        var stepObj = this.props.stepObj;
        var id = e.target.id;
        
        if(id == "add"){
            StepActionCreators.addStepToWorklist(stepObj);
        } else {
            StepActionCreators.removeStepFromWorklist(stepObj);
        }
        console.log('clicked ', stepObj);
    },
    getButton: function(workliststatus){
        if(!workliststatus){
            return (
                <button type="button" 
                    id="add"
                    className="btn btn-primary"
                    onClick={this._onClick}
                    style={buttonStyle}>
                    <span
                        style={{position: 'relative', left: 0.5}}
                        className="glyphicon glyphicon-plus"
                        id="add"
                        aria-hidden="true"></span>
                </button>
            );
        } else {
            return (
                <button type="button" 
                    id="remove"
                    className="btn btn-danger"
                    onClick={this._onClick}
                    style={buttonStyle}>
                    <span 
                        className="glyphicon glyphicon-minus"
                        id="remove"
                        aria-hidden="true"></span>
                </button>
            );
        }
    },
    render: function(){
        var stepObj = this.props.stepObj
        var buttonElement = this.getButton(stepObj.workliststatus);
        return( <Cell style = {cellStyle} >
                    {buttonElement}
                </Cell>
        );
    }
});

module.exports = StepmasterButton;