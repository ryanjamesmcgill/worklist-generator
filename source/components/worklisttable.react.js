"use strict";
const React = require('react');
const WorklistStore = require('../stores/WorklistStore');
const FixedDataTable = require('fixed-data-table');
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const Cell = FixedDataTable.Cell;

var WorklistTable = React.createClass({
    getInitialState: function(){
		return {
			dimensions: WorklistStore.getDimensions(),
		};
	},
	componentDidMount: function(){
		WorklistStore.addChangeListener(this._onStoreChange);	
	},
	componentWillUnmount: function(){
		WorklistStore.removeChangeListener(this._onStoreChange);	
	},
	_onStoreChange: function(){
		this.setState({
			dimensions: WorklistStore.getDimensions()
		});
	},
	render: function(){
		return (
			<div className={"workliststeps-table"}>
	      	<Table
	        	rowsCount={WorklistStore.getLength()}
	        	rowHeight={45}
	        	headerHeight={40}
	        	width={this.state.dimensions.width}
	        	height={this.state.dimension.height}
	        	footerHeight={5}
	        	isColumnResizing={false}
	        	onColumnResizeEndCallback={this._onColumnResizeEnd}>
	      	</Table>
	      	<div ref="footer" className="footer">
	      		<p className="text-center signiture">Ryan J McGill</p>
	      	</div>
	      	</div>
		);
	}
});

module.exports = WorklistTable;