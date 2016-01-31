var React = require('react');
var StepStore = require('../stores/StepStore');
var StepActionCreators = require('../actions/StepActionCreators');
var Cell = require('fixed-data-table').Cell;
var _ = require('lodash');

var StepmasterHeaderButton = React.createClass({
    _onClick: function(e){
        console.log('all filtered ', StepStore.getFilteredSteps());
        var steps = StepStore.getFilteredSteps();
        steps.map(function(stepObj, index, array){
           StepActionCreators.addStepToWorklist(stepObj);
        });
    },
    render: function(){
        return( <Cell style={{
                        margin: 'auto',
                        position: 'relative',
                        top: '45%',
                        fontSize: 22}}>
                    <span onClick={this._onClick} className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </Cell>
        );
    }
});

module.exports = StepmasterHeaderButton;
/*
<button type="button" 
        className="btn btn-info btn-sm"
        onClick={this._onClick}>
        All
</button>
*/