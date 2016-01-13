const React = require('react');
const StepmasterStore = require('../stores/StepmasterStore');
const Cell = require('fixed-data-table').Cell;

var StepmasterText = React.createClass({
    render: function(){
        var value = StepmasterStore
                    .getObjectAt(this.props.rowIndex)
                    [this.props.column];
        return( <Cell>
                {String(value)}
                </Cell>);
    }
});

module.exports = StepmasterText;