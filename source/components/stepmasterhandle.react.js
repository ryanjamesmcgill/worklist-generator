const React = require('react');
const StepmasterActionCreators = require("../actions/StepmasterActionCreators");
const StepmasterStore = require('../stores/StepmasterStore');

var divHandleStyle={
	backgroundColor: '#dae6eb',
	height: 10,
	width: StepmasterStore.getDimensions().width,
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
				initalStepmasterY: StepmasterStore.getDimensions().height
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
				StepmasterActionCreators.setHeight(height+deltaY);
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