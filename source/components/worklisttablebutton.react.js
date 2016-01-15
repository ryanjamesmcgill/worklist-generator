const React = require('react');
const StepStore = require('../stores/StepStore');
const StepActionCreators = require('../actions/StepActionCreators');
const Cell = require('fixed-data-table').Cell;

var style = {
    height: "100%",
    width: "100%",
    
}

var WorklistTableButton = React.createClass({
    _onClick: function(e){
        var stepObj = this.props.stepObj;
        StepActionCreators.removeStepFromWorklist(stepObj);
        console.log('removed ', stepObj);
    },
    render: function(){
        return( <Cell style = {style} >
                    <button type="button" 
                        id="add"
                        className="btn btn-secondary btn-sm"
                        onClick={this._onClick}>
                        -
                    </button>
                </Cell>
        );
    }
});

module.exports = WorklistTableButton;