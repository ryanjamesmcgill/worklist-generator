"use strict";
const React = require('react');
const StepStore = require('../stores/StepStore');
const FixedDataTable = require('fixed-data-table');
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const Cell = FixedDataTable.Cell;

var footerStyle = {
    height: 20,
    margin: 'auto',
    backgroundColor: '#dae6eb',
    color: '#667b8f',
    fontStyle: 'italic'
};

var WorklistTable = React.createClass({
	getDefaultProps: function(){
		return {
			dimensions: {
				height: 750,
				width: 960
			}
		};
	},
    getInitialState: function(){
		return {
			columnWidths: {
				stepseq: 120,
				stepdesc: 250,
				ppid: 200,
				scancorrelation: 200
			}
		};
	},
	componentDidMount: function(){
		StepStore.addChangeListener(this._onStoreChange);
	},
	componentWillUnmount: function(){
		StepStore.removeChangeListener(this._onStoreChange);
	},
	_onStoreChange: function(){
		this.forceUpdate();
	},
	_onColumnResizeEnd: function(newColumnWidth, columnKey){
		var newWidths = this.state.columnWidths;
		newWidths[columnKey] = newColumnWidth;
	    this.setState({
	    	columnWidths: newWidths
	    });	
	},
	render: function(){
		return (
		<div style={{textAlign: 'center'}}>
			<div style={{display: 'inline-block'}}>
		      	<Table
		        	rowsCount={StepStore.getWorlistLength()}
		        	rowHeight={45}
		        	headerHeight={40}
		        	width={this.props.dimensions.width}
		        	height={this.props.dimensions.height}
		        	footerHeight={0}
		        	isColumnResizing={false}
		        	onColumnResizeEndCallback={this._onColumnResizeEnd}>
		        <Column
	     			columnKey="stepseq"
	     			width={this.state.columnWidths.stepseq}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Step Sequence</p></Cell>}
	        	    cell={"data"} />
	        	<Column
	     			columnKey="stepdesc"
	     			width={this.state.columnWidths.stepdesc}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Step Description</p></Cell>}
	        	    cell={"data"} />
	        	<Column
	     			columnKey="ppid"
	     			width={this.state.columnWidths.ppid}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">PPID</p></Cell>}
	        	    cell={"data"} />
	        	<Column
	     			columnKey="scancorrelation"
	     			width={this.state.columnWidths.scancorrelation}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Scan Correlation</p></Cell>}
	        	    cell={"data"} />
		      	</Table>
		      	<div id="footer" style={footerStyle}>
		      		<p className="text-center">Ryan J McGill</p>
		      	</div>
	      	</div>
	     </div> 
		);
	}
});

module.exports = WorklistTable;