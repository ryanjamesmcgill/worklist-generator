const React = require('react');
const StepmasterStore = require('../stores/StepmasterStore');
const WorklistActionCreators = require('../actions/WorklistActionCreators');
const Cell = require('fixed-data-table').Cell;

var StepmasterButton = React.createClass({
    _onClick: function(e){
        var index = this.props.rowIndex;
        WorklistActionCreators.addIndex(index);
        console.log('clicked ', StepmasterStore.getObjectAt(index));
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