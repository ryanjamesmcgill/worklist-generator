const React = require('react');
const DefectDropdown = require('./defectdropdown.react');

var DefectSelection= React.createClass({
    getInitialState: function(){
        return ({
            showDropdown: false
        });  
    },
    _onClick: function(e){
        this.setState({
            showDropdown: true
        });
    },
    hideDropdown: function(){
        this.setState({
            showDropdown: false
        });
    },
	render: function(){
	    var dropdown = null;
	    if(this.state.showDropdown){
	        dropdown = <DefectDropdown
	                        hideDropdown={this.hideDropdown}/>;
	    }
		return (
	    <div>
	        <h5>Defect Selection</h5>
	        <div className="form-horizontal">
	            <div className="form-group">
	                <div className="col-md-8">
                        <div className="dropdown">
                          <button   className="btn btn-default dropdown-toggle" 
                                    type="button" id="defectdropdown_button" 
                                    aria-haspopup="true" aria-expanded="true"
                                    style={{width:'100%'}}
                                    onClick={this._onClick}>
                            <p>Defect Of Interest</p> 
                            <span className="caret"></span>
                          </button>
                        {dropdown}
                        </div>
                    </div>
                    <div className="col-md-4" style={{textAlign:'left'}}>
                        <div className="radio">
                            <label><input className="active" type="radio" name="optradio" />single</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio" />sum</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio" />merge</label>
                        </div>
                    </div>
    			</div>
		    </div>
	    </div>
		);
	}
});

module.exports = DefectSelection;