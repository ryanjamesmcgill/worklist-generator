const React = require('react');
const Cell = require('fixed-data-table').Cell;
const StepmasterStore = require("../stores/StepmasterStore");

var StepmasterHeader = React.createClass({
    render: function(){
        var defaultText = "filter by " + this.props.name;
        return( <Cell>
                    <p>{StepmasterStore.getName(this.props.filterType)}</p>
                    <input type="search" 
                        className="form-control"
                        placeholder = {defaultText}
                        onChange = {this.props.handler}
                        id = {this.props.filterType}/>
                </Cell>);
    }
});

module.exports = StepmasterHeader;