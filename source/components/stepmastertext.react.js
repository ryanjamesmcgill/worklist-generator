const React = require('react');
const StepStore = require('../stores/StepStore');
const Cell = require('fixed-data-table').Cell;

var StepmasterText = React.createClass({
    render: function(){
        var value = this.props.stepObj[this.props.column];
        var style = {
            height: "100%",
            width: "100%"
        }
        
        if(this.props.stepObj.workliststatus){
            style.color = "rgba(0, 0, 0, 0.40)";
        } else {
            style.color = "rgba(0, 0, 0, 1.00)";
        }
        return( 
                <Cell style={style}>
                {String(value)}
                </Cell> );
    }
});

module.exports = StepmasterText;