"use strict";

const React = require('react');
const StepmasterStore = require('../stores/StepmasterStore');
const StepmasterActionCreators = require('../actions/StepmasterActionCreators');
const FixedDataTable = require('fixed-data-table');
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const Cell = FixedDataTable.Cell;

console.log('[worklist-generator] application.react.js');


var Application = React.createClass({
	getInitialState: function(){
		return {
			filters: StepmasterStore.getFilters()
		};
	},
	componentDidMount: function(){
		StepmasterStore.addChangeListener(this.onFilterChange);	
	},
	componentWillUnmount: function(){
		StepmasterStore.removeChangeListener(this.onFilterChange);	
	},
	onFilterChange: function(){
		this.setState({
			filters: StepmasterStore.getFilters()
		});
	},
	_onType: function(e){
		StepmasterActionCreators.setFilterStepSeq(e.target.value);
	},
	render: function(){
		return (
			<div>
			<input
        	onChange={this._onType}
          	placeholder="Filter StepSeq"
        	/>
        	<input
        	onChange={this._onFilterChangeStepDesc}
          	placeholder="Filter StepDesc"
        	/>
	      	<Table
	        	rowsCount={StepmasterStore.getFilteredLength()}
	        	rowHeight={50}
	        	headerHeight={50}
	        	width={1000}
	        	height={230}>
	        	<Column
	          		header={<Cell>Process ID</Cell>}
	          		cell={props =>(
	            	<Cell {...props}>
	              		{StepmasterStore.getObjectAt(props.rowIndex).processid}
	            	</Cell>)}
	          	width={120}
	        	/>
	        	<Column
	          		header={<Cell>Step Seq</Cell>}
	          		cell={props =>(
	            	<Cell {...props}>
	              		{StepmasterStore.getObjectAt(props.rowIndex).stepseq}
	            	</Cell>)}
	          	width={120}
	        	/>
	        	<Column
	          		header={<Cell>Step Description</Cell>}
	          		cell={props =>(
	            	<Cell {...props}>
	              		{StepmasterStore.getObjectAt(props.rowIndex).stepseq}
	            	</Cell>)}
	          	width={300}
	        	/>
	        	<Column
	          		header={<Cell>PPID</Cell>}
	          		cell={props=>(	
	          		<Cell {...props}>
  						{StepmasterStore.getObjectAt(props.rowIndex).ppid}
  					</Cell>)}
	          	width={200}
	        	/>
	      	</Table>
	      	</div>
		);
	}
});

module.exports = Application;
