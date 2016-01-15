const React = require('react');
const StepStore = require('../stores/StepStore');
const StepActionCreators = require('../actions/StepActionCreators');
const Cell = require('fixed-data-table').Cell;

var style = {
    height: "100%",
    width: "100%",
    
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
                    onClick={this._onClick}>
                    +
                </button>
            );
        } else {
            return (
                <button type="button" 
                    id="remove"
                    className="btn btn-danger"
                    onClick={this._onClick}>
                    -
                </button>
            );
        }
    },
    render: function(){
        var stepObj = this.props.stepObj
        var buttonElement = this.getButton(stepObj.workliststatus);
        return( <Cell style = {style} >
                    {buttonElement}
                </Cell>
        );
    }
});

module.exports = StepmasterButton;