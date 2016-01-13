const React = require('react');
const Cell = require('fixed-data-table').Cell;
const StepmasterStore = require("../stores/StepmasterStore");

var StepmasterHeader = React.createClass({
    render: function(){
        var currentFilterValue = StepmasterStore.getFilters()[this.props.filterType];
        var defaultText = "filter by " + StepmasterStore.getName(this.props.filterType);
        
        if(currentFilterValue == ""){ currentFilterValue = null;}
        else { defaultText = null; }
        
        return(<Cell>
                    <p style={{whiteSpace: 'nowrap'}}>{StepmasterStore.getName(this.props.filterType)}</p>
                    <input type="search" 
                        className="form-control"
                        placeholder = {defaultText}
                        onChange = {this.props.handler}
                        value = {currentFilterValue}
                        id = {this.props.filterType}/>
                </Cell>);
    }
});

module.exports = StepmasterHeader;