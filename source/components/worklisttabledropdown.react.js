const React = require('react');
const Cell = require('fixed-data-table').Cell;

var WorklistTableDropdown = React.createClass({
    render: function(){
        var style = {
            height: "100%",
            width: "100%",
            padding: 0
        };
        var value = this.props.stepObj.scanstep;
        return( 
                <Cell style={style}>
                  <button   className="btn btn-default dropdown-toggle" 
                            type="button"
                            onClick={this.props.showDropdown.bind(null,this.props.stepObj)}>
                    {value} 
                    <span className="caret"></span>
                  </button>
                </Cell> );
    }
});

module.exports = WorklistTableDropdown;