const React = require('react');
const Cell = require('fixed-data-table').Cell;

var WorklistTableText = React.createClass({
    render: function(){
        var style = {
            height: "100%",
            width: "100%"
        };
        var value = this.props.value;
        return( 
                <Cell style={style}>
                {value}
                </Cell> );
    }
});

module.exports = WorklistTableText;