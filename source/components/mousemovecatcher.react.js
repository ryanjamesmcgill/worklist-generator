const React = require('react');

var MousemoveCatcher = React.createClass({
    render: function(){
        var divStyle = {
                position: 'absolute',
            	top: 0,
            	left: 0,
            	width: '100%',
            	height: '100%',
            	visibility: this.props.visibility
            };
            
        return (
            <div
                style={divStyle}
                onMouseMove={this.props._handleMouse}></div>  
        );
    }
});

module.exports= MousemoveCatcher;