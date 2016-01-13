const React = require('react');
const StepStore = require('../stores/StepStore');
const StepActionCreators = require('../actions/StepActionCreators');
const Cell = require('fixed-data-table').Cell;

var StepmasterButton = React.createClass({
    _onClick: function(e){
        var index = this.props.rowIndex;
        var stepObj = StepStore.getMasterStepAt(index);
        StepActionCreators.addStepToWorklist(stepObj);
        console.log('clicked ', stepObj);
    },
    render: function(){
        return( <Cell>
                    <button type="button" 
                            className="btn btn-primary btn-sm"
                            onClick={this._onClick}>
                            Add
                    </button>
                </Cell>
        );
    }
});

module.exports = StepmasterButton;