const React = require('react');
const Stepmaster = require('./stepmaster.react');

var StepmasterPopup =  React.createClass({
    render: function(){
        console.log('render popup');
        var renders;
        if(this.props.stepmasterVisible){
            renders = <Stepmaster />;
        } else{
            renders = null;
        }
        
        return (renders); 
    }
});

module.exports = StepmasterPopup;
