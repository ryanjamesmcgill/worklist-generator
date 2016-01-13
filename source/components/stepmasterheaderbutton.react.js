const React = require('react');
const StepStore = require('../stores/StepStore');
const Cell = require('fixed-data-table').Cell;

var StepmasterHeaderButton = React.createClass({
    _onClick: function(e){
        console.log('all filtered ', StepStore.getFilteredSteps());
    },
    render: function(){
        return( <Cell>
                    <button type="button" 
                            className="btn btn-info btn-sm"
                            onClick={this._onClick}>
                            All
                    </button>
                </Cell>
        );
    }
});

module.exports = StepmasterHeaderButton;