const React = require('react');
const StepStore = require('../stores/StepStore');
const StepActionCreators = require('../actions/StepActionCreators');
const Cell = require('fixed-data-table').Cell;

var style = {
    height: '100%',
    margin: 'auto',
    fontSize: 22
}

var WorklistTableButton = React.createClass({
    _onClick: function(e){
        var stepObj = this.props.stepObj;
        StepActionCreators.removeStepFromWorklist(stepObj);
        console.log('removed ', stepObj);
    },
    render: function(){
        return( <Cell style = {style} >

                <span onClick={this._onClick} 
                className="glyphicon glyphicon-minus-sign" 
                aria-hidden="true"></span>

                </Cell>
        );
    }
});

module.exports = WorklistTableButton;

/*
<button type="button" 
    id="add"
    className="btn btn-secondary btn-sm worklistRemoveBtn"
    onClick={this._onClick}>
    -
</button>*/