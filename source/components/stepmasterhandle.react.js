const React = require('react');
const StepmasterActionCreators = require("../actions/StepmasterActionCreators");
const StepmasterStore = require('../stores/StepmasterStore');
const MousemoveCatcher = require('./mousemovecatcher.react');

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
			this.setState({
				draginprogress: true,
				initialMouseY: event.clientY,
				initalStepmasterY: StepmasterStore.getDimensions().height
			});
			break;
		case 'mouseup':
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
		var mousemoveVisibility;
		if(this.state.draginprogress){
			mousemoveVisibility = 'visible';
		} else {
			mousemoveVisibility = 'hidden';
		}
		
		return (
		    <div style={divHandleStyle} 
				onMouseEnter={this._handleMouse}
				onMouseDown={this._handleMouse}
				onMouseUp={this._handleMouse}>
				<MousemoveCatcher 
					visibility={mousemoveVisibility}
					_handleMouse={this._handleMouse} />
			</div>
		);
	}
});

module.exports = StepmasterHandle;

/*

*/