"use strict";

const React = require('react');
const FixedDataTable = require('fixed-data-table');
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const Cell = FixedDataTable.Cell;
var Steps = require('../stepdata/steps.json');
console.log('[worklist-generator] application.react.js');

class DataListWrapper {
  constructor(indexMap, data) {
    this._indexMap = indexMap;
    this._data = data;
  }

  getSize() {
    return this._indexMap.length;
  }

  getObjectAt(index) {
  	var unfiltered_index = this._indexMap[index];
  	if(typeof this._data.getObjectAt != "undefined"){
  		return this._data.getObjectAt(unfiltered_index);
  	}else
  		return this._data[unfiltered_index];
  	}
}


var genIndexes = function(arr){
	var i;
	var indexes = [];
	for(i = 0; i < arr.length; i++){
		indexes.push(i);
	}
	return indexes;
};

var Application = React.createClass({
	getInitialState: function(){
		return {
	      filteredDataList: new DataListWrapper(genIndexes(Steps), Steps)
    	};
	},
	_onFilterChangeStepSeq: function(e){
		console.log(e.target.value);
		if (!e.target.value) {
	      	this.setState({
	        	filteredDataList: Steps
	    	});
		}
    	
    	var filterBy = e.target.value.toLowerCase();
    	var size = Steps.length;
    	var filteredIndxes = [];
    	for (var index = 0; index < size; index++){
    		var StepSeq = Steps[index].StepSeq;
    		if(StepSeq.toLowerCase().indexOf(filterBy) !== -1){
    			filteredIndxes.push(index);
    		}
    	}
    	
    	this.setState({
    		filteredDataList: new DataListWrapper(filteredIndxes, Steps)
    	});
    
	},
	render: function(){
		return (
			<div>
			<input
        	onChange={this._onFilterChangeStepSeq}
          	placeholder="Filter StepSeq"
        	/>
        	<input
        	onChange={this._onFilterChangeStepDesc}
          	placeholder="Filter StepDesc"
        	/>
	      	<Table
	        	rowsCount={this.state.filteredDataList.getSize()}
	        	rowHeight={50}
	        	headerHeight={50}
	        	width={1000}
	        	height={230}>
	        	<Column
	          		header={<Cell>Process ID</Cell>}
	          		cell={props =>(
	            	<Cell {...props}>
	              		{this.state.filteredDataList.getObjectAt(props.rowIndex).ProcessID}
	            	</Cell>)}
	          	width={120}
	        	/>
	        	<Column
	          		header={<Cell>Step Seq</Cell>}
	          		cell={props =>(
	            	<Cell {...props}>
	              		{this.state.filteredDataList.getObjectAt(props.rowIndex).StepSeq}
	            	</Cell>)}
	          	width={120}
	        	/>
	        	<Column
	          		header={<Cell>Step Description</Cell>}
	          		cell={props =>(
	            	<Cell {...props}>
	              		{this.state.filteredDataList.getObjectAt(props.rowIndex).StepDesc}
	            	</Cell>)}
	          	width={300}
	        	/>
	        	<Column
	          		header={<Cell>PPID</Cell>}
	          		cell={props=>(	
	          		<Cell {...props}>
  						{this.state.filteredDataList.getObjectAt(props.rowIndex).PPID}
  					</Cell>)}
	          	width={200}
	        	/>
	      	</Table>
	      	</div>
		);
	}
});

module.exports = Application;

/*
<Cell {...props}>
  	{this.state.filteredDataList[props.rowIndex].PPID}
</Cell>)}
*/