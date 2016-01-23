const React = require('react');

var LoadButton = React.createClass({
	handleChange: function(e){
		console.log('form change');	
	},
	render: function(){
		return (
		<div className="btn-group" role="group">
		  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		    Load
		  </button>
		  <ul className="dropdown-menu">
		    <li><a className="dropdown-item" href="#">UXQ3 - CMP BF</a></li>
			<li><a className="dropdown-item" href="#">UXB8 - CMP BF</a></li>
			<li><a className="dropdown-item" href="#">UXXX - CMP BF</a></li>
			<li><a className="dropdown-item" href="#">UXXZ - CMP BF</a></li>
		    <li className="divider" role="seperator"></li>
		    <li onClick={this.props.onLoadfileClick}>
		    	<a className="dropdown-item" href="#">Upload a custom set</a>
		    </li>
		  </ul>
		 </div>
		);
	}
});

module.exports = LoadButton;
//    