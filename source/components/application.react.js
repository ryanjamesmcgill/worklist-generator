const React = require('react');
const FixedDataTable = require('fixed-data-table');
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const Cell = FixedDataTable.Cell;
var Steps = require('../stepdata/steps.json');
console.log('[worklist-generator] application.react.js');

var Application = React.createClass({
	getInitialState: function(){
		return {
	      myTableData: Steps
    	};
	},
	render: function(){
		return (
	      	<Table
	        	rowsCount={this.state.myTableData.length}
	        	rowHeight={50}
	        	headerHeight={50}
	        	width={1000}
	        	height={230}>
	        	<Column
	          		header={<Cell>Process ID</Cell>}
	          		cell={props =>(
	            	<Cell {...props}>
	              		{this.state.myTableData[props.rowIndex].ProcessID}
	            	</Cell>)}
	          	width={120}
	        	/>
	        	<Column
	          		header={<Cell>Step Seq</Cell>}
	          		cell={props =>(
	            	<Cell {...props}>
	              		{this.state.myTableData[props.rowIndex].StepSeq}
	            	</Cell>)}
	          	width={120}
	        	/>
	        	<Column
	          		header={<Cell>Step Description</Cell>}
	          		cell={props =>(
	            	<Cell {...props}>
	              		{this.state.myTableData[props.rowIndex].StepDesc}
	            	</Cell>)}
	          	width={300}
	        	/>
	        	<Column
	          		header={<Cell>PPID</Cell>}
	          		cell={props =>(
	            	<Cell {...props}>
	              		{this.state.myTableData[props.rowIndex].PPID}
	            	</Cell>)}
	          	width={200}
	        	/>
	      	</Table>
		);
	}
});

module.exports = Application;

