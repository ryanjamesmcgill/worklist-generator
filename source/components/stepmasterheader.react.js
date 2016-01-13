const React = require('react');
const Cell = require('fixed-data-table').Cell;
const StepStore = require("../stores/StepStore");

var StepmasterHeader = React.createClass({
    render: function(){
        console.log('stepmaster header');
        var filterValue = StepStore.getFilters()[this.props.filterType].value;
        var filterName = StepStore.getFilters()[this.props.filterType].name;
        var defaultText = "filter by " + filterName;
        
        if(filterValue == ""){ filterValue = null;}
        else { defaultText = null; }
        
        return(<Cell>
                    <p style={{whiteSpace: 'nowrap'}}>{filterName}</p>
                    <input type="search" 
                        className="form-control"
                        placeholder = {defaultText}
                        onChange = {this.props.handler}
                        value = {filterValue}
                        id = {this.props.filterType}/>
                </Cell>);
    }
});

module.exports = StepmasterHeader;