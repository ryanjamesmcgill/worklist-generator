"use strict";
const React = require('react');
const StepStore = require('../stores/StepStore');
const WorklistTableButton = require('./worklisttablebutton.react');
const WorklistTableText = require('./worklisttabletext.react');
const WorklistTableDropdown = require('./worklisttabledropdown.react');
const WorklistTableDropdownSelection = require('./worklisttabledropdownselection.react');
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
				button: 50,
				stepseq: 120,
				stepdesc: 250,
				ppid: 200,
				scancorrelation: 200,
				type: 120
			},
			dropdown: {
				visible: false,
				x: 0,
				y: 0
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
	showDropdown: function(stepObj, e){
		var x = e.clientX;
		var y = e.clientY;
		this.setState({
			dropdown: {
				visible: true,
				x: x,
				y: y
			}
		});
	},
	hideDropdown: function(){
		this.setState({
			dropdown: {
				visible: false,
				x: 0,
				y: 0
			}
		});
	},
	render: function(){
		var dropdown;
		if (this.state.dropdown.visible){
			dropdown = <WorklistTableDropdownSelection
							hideDropdown={this.hideDropdown} 
							x = {this.state.dropdown.x} 
							y = {this.state.dropdown.y} />;
		} else {
			dropdown = null;
		}
		return (
		<div style={{textAlign: 'center'}}>
			<div style={{display: 'inline-block'}}>
		      	<Table
		        	rowsCount={StepStore.getWorklistLength()}
		        	rowHeight={45}
		        	headerHeight={40}
		        	width={this.props.dimensions.width}
		        	height={this.props.dimensions.height}
		        	footerHeight={0}
		        	isColumnResizing={false}
		        	onColumnResizeEndCallback={this._onColumnResizeEnd}>
		        <Column
	     			columnKey="button"
	     			width={this.state.columnWidths.button}
	     			isResizable={true}
	        	    header=""
	        	    cell={props=>(<WorklistTableButton 
	        	    		stepObj={StepStore.getWorklistStepAt(props.rowIndex)} />) } />
		        <Column
	     			columnKey="stepseq"
	     			width={this.state.columnWidths.stepseq}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Step Sequence</p></Cell>}
	        	    cell={props=>(<WorklistTableText
	        	    				value={StepStore.getWorklistStepAt(props.rowIndex)[props.columnKey]}/> )} />
	        	<Column
	     			columnKey="stepdesc"
	     			width={this.state.columnWidths.stepdesc}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Step Description</p></Cell>}
	        	    cell={props=>(<WorklistTableText
	        	    				value={StepStore.getWorklistStepAt(props.rowIndex)[props.columnKey]}/> )} />
	        	<Column
	     			columnKey="ppid"
	     			width={this.state.columnWidths.ppid}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">PPID</p></Cell>}
	        	    cell={props=>(<WorklistTableText
	        	    				value={StepStore.getWorklistStepAt(props.rowIndex)[props.columnKey]}/> )} />
	        	<Column
	     			columnKey="scancorrelation"
	     			width={this.state.columnWidths.scancorrelation}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Scan Correlation</p></Cell>}
	        	    cell={props=>(<WorklistTableDropdown 
	        	    				showDropdown={this.showDropdown}
	        	    				stepObj={StepStore.getWorklistStepAt(props.rowIndex)} /> ) } />
				<Column
	     			columnKey="type"
	     			width={this.state.columnWidths.type}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Step Type</p></Cell>}
	        	    cell={props=>(<WorklistTableText
	        	    				value={StepStore.getWorklistStepAt(props.rowIndex)[props.columnKey]}/> )} />
		      	</Table>
		      	<div id="footer" style={footerStyle}>
		      		<p className="text-center">Ryan J McGill</p>
		      	</div>
		      	{dropdown}
	      	</div>
	     </div> 
		);
	}
});

module.exports = WorklistTable;