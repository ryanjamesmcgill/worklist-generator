"use strict";
const React = require('react');
const Modal = require('react-modal');


var modalStyle={
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.60)',
    zIndex			      : 5
  },
  content : {
  	display					           : 'inline-block',
  	position                  : 'absolute',
    top                       : '50%',
    left                      : '50%',
    right                     : 'auto',
    bottom                    : 'auto',
    marginRight               : '-50%',
    transform                 : 'translate(-50%, -50%)',
    zIndex					           : 10,
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '8px',
    outline                    : 'none',
    WebkitBoxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)',
	WozBoxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)',
	boxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)'
  }
};

var closeSymbolStyle = {
	position: 'absolute',
	right: '0px',
	top: '0px',
	width: '21px',
	height: '21px'
};

var Stepmaster = React.createClass({
  _onLoad: function(){
    var reader = new FileReader();
    var file = this.refs.fileinput.files[0];
    
    reader.onload = function(upload){
      console.log('loaded file'); 
    };
    
    reader.readAsText(file);
  },
	render: function(){
	  // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
  		return (
  			<Modal
  				isOpen={this.props.loadfileIsVisible}
  				onRequestClose={this.props.onLoadfileClick}
  				style={modalStyle}>
  				<span 	className="close"
  					style={closeSymbolStyle}
  					onClick={this.props.onLoadfileClick}>&times;</span>
  				<h3 style={{marginTop: 0}}>Load File</h3>
  				<p>Load a set of steps from a previously saved file..</p>
          <input  ref="fileinput" 
                  type="file" 
                  name="file"
                  multiple={false}
                  accept=".csv"
                  className="upload-file"
                  style={{margin:10}}/>
          <div className="" style={{textAlign:'center'}}>
            <button className="btn btn-primary" 
                    style={{marginRight: 10}}
                    onClick={this._onLoad}>
                Load
            </button>
            <button className="btn btn-default"
                    onClick={this.props.onLoadfileClick}>
                Cancel
            </button>
          </div>
  	    </Modal>
  		);
    }
		else {
		  return(
		  <Modal
				isOpen={this.props.loadfileIsVisible}
				onRequestClose={this.props.onLoadfileClick}
				style={modalStyle}>
				<span 	className="close"
					style={closeSymbolStyle}
					onClick={this.props.onLoadfileClick}>&times;</span>
        <h3 style={{marginTop: 0}}>Uh oh!</h3>
        <p>Sorry, file uploading is not supported in this browser.</p>
	    </Modal>
	    );
		}
	}
});

module.exports = Stepmaster;