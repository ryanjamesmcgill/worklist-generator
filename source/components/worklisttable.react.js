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
			dimensions: DimensionsStore.getWorklist()
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
	render: function(){
		return (
			<div ref="container" className="worklist-table">
		      	<Table
		        	rowsCount={WorklistStore.getLength()}
		        	rowHeight={45}
		        	headerHeight={40}
		        	width={this.state.dimensions.width}
		        	height={this.state.dimensions.height}
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