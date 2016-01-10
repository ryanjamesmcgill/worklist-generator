const React = require('react');
const StepmasterStore = require('../stores/StepmasterStore');
const WorklistActionCreators = require('../actions/WorklistActionCreators');
const Cell = require('fixed-data-table').Cell;

var StepmasterButton = React.createClass({
    _onClick: function(e){
        var rowObj = StepmasterStore.getObjectAt(this.props.rowIndex);
        console.log('clicked ', rowObj);
        WorklistActionCreators.addStep(rowObj);
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