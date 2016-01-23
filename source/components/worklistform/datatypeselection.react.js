const React = require('react');
const Select = require('react-select');
const WorklistFormStore = require('../../stores/WorklistFormStore');

var DataTypeSelection= React.createClass({
    logChange: function(val){
        console.log("Selected: " + val); 
    },
	render: function(){
        var options = WorklistFormStore.getOptionsDataTypes();
		return (
	    <div>
	        <h5>Data Type</h5>
	        <div className="form-group">
	            <Select
                    name="datatype"
                    value="Count"
                    options={options}
                    onChange={this.logChange}
                />
	        </div>
	    </div>
		);
	}
});

module.exports = DataTypeSelection;