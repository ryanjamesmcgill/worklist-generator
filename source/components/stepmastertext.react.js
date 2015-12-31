const React = require('react');
const StepmasterStore = require('../stores/StepmasterStore');
const Cell = require('fixed-data-table').Cell;

var StepmasterText = React.createClass({
    render: function(){
        return( <Cell>
                {StepmasterStore
                    .getObjectAt(this.props.rowIndex)
                    [this.props.column]}
                </Cell>);
    }
});

module.exports = StepmasterText;