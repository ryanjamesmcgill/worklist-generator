const React = require('react');
const Select = require('react-select');
const WorklistFormStore = require('../../stores/WorklistFormStore');
const WorklistFormActionCreators = require('../../actions/WorklistFormActionCreators');
const CheckboxList = require('./checkboxlist.react');

var DefectSelection= React.createClass({
	getInitialState: function(){
		return({
			selections: WorklistFormStore.getSelectionsDefectClasses()
		});
	},
    logChange: function(val, array){
        WorklistFormActionCreators.setSelectionsDefectClasses(array);
        this.setState({
        	selections: array
        });
    },
	render: function(){
	    var options = WorklistFormStore.getOptionsDefectClasses();
		return (
	    <div>
	        <h5>Defect Selection</h5>
	        <div className="form-group">
	            <Select
                    name="doi"
                    value={this.state.selections}
                    options={options}
                    onChange={this.logChange}
                    multi={true}
                />
                
	        </div>
	        <CheckboxList />
	    </div>
		);
	}
});

module.exports = DefectSelection;