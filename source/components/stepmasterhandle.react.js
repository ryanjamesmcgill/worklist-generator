const React = require('react');
const StepmasterActionCreators = require("../actions/StepmasterActionCreators");
const DimensionsActionCreators = require("../actions/DimensionsActionCreators");
const StepmasterStore = require('../stores/StepmasterStore');
const DimensionsStore = require('../stores/DimensionsStore');

var divHandleStyle={
	backgroundColor: '#dae6eb',
	height: 10,
	width: DimensionsStore.getStepmaster().width,
	cursor: 'row-resize'
};

var StepmasterHandle = React.createClass({
	getInitialState: function(){
        return {
            draginprogress: false,
            initalMouseY: null,
            initialStepmasterY: null
            
        };
    },
	_handleMouse: function(event){
	switch(event.type){
		case 'mousedown':
			window.getSelection().removeAllRanges(); //not IE compatible
			window.onmousemove = this._handleMouse;
			window.onmouseup = this._handleMouse;
			this.setState({
				draginprogress: true,
				initialMouseY: event.clientY,
				initalStepmasterY: DimensionsStore.getStepmaster().height
			});
			break;
		case 'mouseup':
			window.onmousemove = null;
			window.onmouseup = null;
			this.setState({
				draginprogress: false,
				initialMouseY: null,
				initalStepmasterY: null
			});
			break;
		case 'mousemove':
			if(this.state.draginprogress){
			    var height = this.state.initalStepmasterY;
				var deltaY = event.clientY - this.state.initialMouseY;
				var newHeight = height+deltaY;
				DimensionsActionCreators.setStepmasterHeight(newHeight);
				
			}
	    default: //do nothing
		}
	},
	render: function() {
		return (
		    <div style={divHandleStyle} 
				onMouseDown={this._handleMouse}>
			</div>
		);
	}
});

module.exports = StepmasterHandle;