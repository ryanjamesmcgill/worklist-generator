const React = require('react');
const Cell = require('fixed-data-table').Cell;




var StepmasterHeader = React.createClass({
    render: function(){
        var defaultText = "filter by " + this.props.name;
        return( <Cell>
                    <p>{this.props.name}</p>
                    <input type="search" 
                        className="form-control"
                        placeholder = {defaultText}
                        onChange = {this.props.handler}
                        id = {this.props.filtertype}/>
                </Cell>);
    }
});

module.exports = StepmasterHeader;