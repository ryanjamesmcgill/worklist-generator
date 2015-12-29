const React = require('react');
const FixedDataTable = require('fixed-data-table');
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const Cell = FixedDataTable.Cell;

var Application = React.createClass({
	getInitialState: function(){
		return {
	      myTableData: [
	        {name: 'Rylan'},
	        {name: 'Amelia'},
	        {name: 'Estevan'},
	        {name: 'Florence'},
	        {name: 'Tressa'}
	      ]
    	};
	},
	render: function(){
		return (
	      	<Table
	        	rowsCount={this.state.myTableData.length}
	        	rowHeight={50}
	        	headerHeight={50}
	        	width={1000}
	        	height={200}>
	        	<Column
	          		header={<Cell>Name</Cell>}
	          		cell={props => (
	            	<Cell {...props}>
	              		{this.state.myTableData[props.rowIndex].name}
	            	</Cell>
	          		)}
	          	width={200}
	        	/>
	      	</Table>
		);
	}
});

module.exports = Application;