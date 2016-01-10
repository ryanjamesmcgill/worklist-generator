"use strict";
const React = require('react');
const WorklistStore = require('../stores/WorklistStore');
const DimensionsStore = require('../stores/DimensionsStore');
const WorklistActionCreators = require('../actions/WorklistActionCreators');
const DimensionsActionCreators = require('../actions/DimensionsActionCreators');
const FixedDataTable = require('fixed-data-table');
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const Cell = FixedDataTable.Cell;

var WorklistTable = React.createClass({
    getInitialState: function(){
		return {
			dimensions: DimensionsStore.getWorklist(),
			columnWidths: {
				stepseq: 120,
				stepdesc: 250,
				ppid: 200,
				scancorrelation: 200
			}
		};
	},
	componentDidMount: function(){
		WorklistStore.addChangeListener(this._onStoreChange);
		DimensionsStore.addChangeListener(this._onStoreChange);
		this.storeReferences();
	},
	componentWillUnmount: function(){
		WorklistStore.removeChangeListener(this._onStoreChange);
		DimensionsStore.removeChangeListener(this._onStoreChange);
	},
	_onStoreChange: function(){
		this.setState({
			dimensions: DimensionsStore.getWorklist()
		});
	},
	storeReferences: function(){
		var refs = {
			top: this.refs.container,
			bottom: this.refs.footer
		};
		DimensionsActionCreators.storeReferences(refs);	
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
			<div ref="container" className="worklist-table">
		      	<Table
		        	rowsCount={WorklistStore.getLength()}
		        	rowHeight={45}
		        	headerHeight={40}
		        	width={this.state.dimensions.width}
		        	height={this.state.dimensions.height}
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
		      	<div ref="footer" className="footer">
		      		<p className="text-center signiture">Ryan J McGill</p>
		      	</div>
	      	</div>
		);
	}
});

module.exports = WorklistTable;