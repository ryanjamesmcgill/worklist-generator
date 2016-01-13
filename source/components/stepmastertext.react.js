const React = require('react');
const StepStore = require('../stores/StepStore');
const Cell = require('fixed-data-table').Cell;

var StepmasterText = React.createClass({
    render: function(){
        var value = StepStore
                    .getMasterStepAt(this.props.rowIndex)
                    [this.props.column];
        return( <Cell>
                {String(value)}
                </Cell>);
    }
});

module.exports = StepmasterText;