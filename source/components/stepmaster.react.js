"use strict";
const React = require('react');
const StepmasterStore = require('../stores/StepmasterStore');
const StepmasterActionCreators = require('../actions/StepmasterActionCreators');
const StepmasterHeader = require('./stepmasterheader.react');
const StepmasterText = require('./stepmastertext.react');
const FixedDataTable = require('fixed-data-table');
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const Cell = FixedDataTable.Cell;

var Stepmaster = React.createClass({
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
	    var filtertype = e.target.attributes.id.textContent;
	    var value = e.target.value;
		StepmasterActionCreators.setFilter(filtertype, value);
	},
	render: function(){
		return (
			<div>
	      	<Table
	        	rowsCount={StepmasterStore.getFilteredLength()}
	        	rowHeight={30}
	        	headerHeight={80}
	        	width={1000}
	        	height={230}>
	        	<Column
	        		width={120}
	        	    header={<StepmasterHeader
	        	    			name="Process ID"
	        	    			filtertype="processid"
	        	    			handler={this._onType}/>}
	        	    cell={props=>(<StepmasterText
	        	    			column="processid"
	        	    			rowIndex={props.rowIndex} /> )} />
	        	<Column
	        		width={120}
	        	    header={<StepmasterHeader
	        	    			name="Step Seq"
	        	    			filtertype="stepseq"
	        	    			handler={this._onType}/>}
	        	    cell={props=>(<StepmasterText
	        	    			column="stepseq"
	        	    			rowIndex={props.rowIndex} /> )} />
	        	<Column
	        		width={300}
	        	    header={<StepmasterHeader
	        	    			name="Step Desc"
	        	    			filtertype="stepdesc"
	        	    			handler={this._onType}/>}
	        	    cell={props=>(<StepmasterText
	        	    			column="stepdesc"
	        	    			rowIndex={props.rowIndex} /> )} />
	        	<Column
	        		width={300}
	        	    header={<StepmasterHeader
	        	    			name="PPID"
	        	    			filtertype="ppid"
	        	    			handler={this._onType}/>}
	        	    cell={props=>(<StepmasterText
	        	    			column="ppid"
	        	    			rowIndex={props.rowIndex} /> )} />
	      	</Table>
	      	</div>
		);
	}
});

module.exports = Stepmaster;