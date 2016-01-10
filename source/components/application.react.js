const React = require('react');
const WorklistTable = require('./worklisttable.react');
const Modal = require('react-modal');

var modalStyle={
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.60)'
  },
  content : {
    position                   : 'absolute',
    margin					   : 'auto',
    top                        : '0px',
    left                       : '0px',
    right                      : '0px',
    bottom                     : '0px',
    width                      : '800px',
    height                     : '600px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '8px',
    outline                    : 'none',
    padding                    : '20px',
    WebkitBoxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)',
	WozBoxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)',
	boxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)'

  }
};

var Application = React.createClass({
	getInitialState: function(){
		return {
			stepmasterIsVisible: false
		};
	},
	_onStepmasterClick: function(){
		console.log('click');
		this.setState({
			stepmasterIsVisible: !(this.state.stepmasterIsVisible)
		});
	},
	render: function(){
		return ( 
		<div>
			<button className="btn" onClick={this._onStepmasterClick}>add</button>
			<Modal
			  isOpen={this.state.stepmasterIsVisible}
			  onRequestClose={this._onStepmasterClick}
			  style={modalStyle}>
			  <h1>Modal Content</h1>
			  <p>Etc.</p>
			</Modal>
		</div>
		);
	}
});

module.exports = Application;
//<Stepmaster />
//<WorklistTable />

