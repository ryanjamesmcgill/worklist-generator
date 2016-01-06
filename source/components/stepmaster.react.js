"use strict";
const React = require('react');
const StepmasterStore = require('../stores/StepmasterStore');
const StepmasterActionCreators = require('../actions/StepmasterActionCreators');
const StepmasterHeader = require('./stepmasterheader.react');
const StepmasterText = require('./stepmastertext.react');
const StepmasterHandle = require("./stepmasterhandle.react");
const StepmasterButton = require("./stepmasterbutton.react");
const StepmasterHeaderButton = require("./stepmasterheaderbutton.react");
const FixedDataTable = require('fixed-data-table');
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const Cell = FixedDataTable.Cell;



var Stepmaster = React.createClass({
    getInitialState: function(){
		return {
			filters: StepmasterStore.getFilters(),
			dimensions: StepmasterStore.getDimensions(),
			columnWidths: {
				button: 67,
				processid: 120,
				stepseq: 120,
				stepdesc: 250,
				ppid: 200
			}
		};
	},
	componentDidMount: function(){
		StepmasterStore.addChangeListener(this._onStoreChange);	
	},
	componentWillUnmount: function(){
		StepmasterStore.removeChangeListener(this._onStoreChange);	
	},
	_onStoreChange: function(){
		this.setState({
			filters: StepmasterStore.getFilters(),
			dimensions: StepmasterStore.getDimensions()
		});
	},
	_onType: function(e){
	    var filtertype = e.target.attributes.id.textContent;
	    var value = e.target.value;
		StepmasterActionCreators.setFilter(filtertype, value);
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
			<div>
	      	<Table
	        	rowsCount={StepmasterStore.getFilteredLength()}
	        	rowHeight={45}
	        	headerHeight={80}
	        	width={this.state.dimensions.width}
	        	height={this.state.dimensions.height}
	        	footerHeight={5}
	        	isColumnResizing={false}
	        	onColumnResizeEndCallback={this._onColumnResizeEnd}>
	        	<Column
	     			columnKey="button"
	     			width={this.state.columnWidths.button}
	     			isResizable={true}
	        	    header={<StepmasterHeaderButton/>}
	        	    cell={props=>(<StepmasterButton rowIndex={props.rowIndex} /> )} />
	        	<Column
	     			columnKey="processid"
	     			width={this.state.columnWidths.processid}
	     			isResizable={true}
	        	    header={props=>(<StepmasterHeader
	        	    			filterType={props.columnKey}
	        	    			handler={this._onType}/> )}
	        	    cell={props=>(<StepmasterText
	        	    			column={props.columnKey}
	        	    			rowIndex={props.rowIndex} /> )} />
	        	<Column
	     			columnKey="stepseq"
	     			width={this.state.columnWidths.stepseq}
	     			isResizable={true}
	        	    header={props=>(<StepmasterHeader
	        	    			filterType={props.columnKey}
	        	    			handler={this._onType}/> )}
	        	    cell={props=>(<StepmasterText
	        	    			column={props.columnKey}
	        	    			rowIndex={props.rowIndex} /> )} />
	        	<Column
	     			columnKey="stepdesc"
	     			width={this.state.columnWidths.stepdesc}
	     			isResizable={true}
	        	    header={props=>(<StepmasterHeader
	        	    			filterType={props.columnKey}
	        	    			handler={this._onType}/> )}
	        	    cell={props=>(<StepmasterText
	        	    			column={props.columnKey}
	        	    			rowIndex={props.rowIndex} /> )} />
	        	<Column
	     			columnKey="ppid"
	     			width={this.state.columnWidths.ppid}
	     			isResizable={true}
	        	    header={props=>(<StepmasterHeader
	        	    			filterType={props.columnKey}
	        	    			handler={this._onType}/> )}
	        	    cell={props=>(<StepmasterText
	        	    			column={props.columnKey}
	        	    			rowIndex={props.rowIndex} /> )} />

	      	</Table>
	      	<StepmasterHandle />
	      	</div>
		);
	}
});

module.exports = Stepmaster;