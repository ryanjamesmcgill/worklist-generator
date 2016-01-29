const React = require('react');
const StepStore = require('../stores/StepStore');
const Cell = require('fixed-data-table').Cell;

var StepmasterText = React.createClass({
    render: function(){
        var value = this.props.stepObj[this.props.column];
        var style = {
            height: "100%",
            width: "100%"
        };
        return( 
                <Cell style={style}
                    onClick={this.props.onCellClick.bind(null,this.props.stepObj)}>
                {String(value)}
                </Cell> );
    }
});

module.exports = StepmasterText;