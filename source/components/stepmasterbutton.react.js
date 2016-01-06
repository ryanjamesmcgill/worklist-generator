const React = require('react');
const StepmasterStore = require('../stores/StepmasterStore');
const Cell = require('fixed-data-table').Cell;

var StepmasterButton = React.createClass({
    _onClick: function(e){
        console.log('clicked ', StepmasterStore.getObjectAt(this.props.rowIndex));
    },
    render: function(){
        return( <Cell>
                    <button type="button" 
                            className="btn btn-primary btn-sm"
                            onClick={this._onClick}>
                            Add
                    </button>
                </Cell>
        );
    }
});

module.exports = StepmasterButton;