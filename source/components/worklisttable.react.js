"use strict";
const React = require('react');
const _ = require('lodash');
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
    getInitialState: function(){
		return {
			columnWidths: {
				button: 50,
				stepseq: 120,
				stepdesc: 250,
				ppid: 200,
				scancorrelation: 200,
				scanstep: 120
			},
			dropdown: {
				visible: false,
				x: 0,
				y: 0,
				stepseq: ''
			},
			activeIndexes: []
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
				y: y,
				stepseq: stepObj.stepseq
			}
		});
	},
	hideDropdown: function(){
		this.setState({
			dropdown: {
				visible: false,
				x: 0,
				y: 0,
				stepseq: ''
			}
		});
	},
	_onDropdownMouseEnter: function(stepObj,e){
		var activeIndexes = [];
		activeIndexes.push(StepStore.getWorklistIndexByObj(stepObj));
		
		var scanstep = stepObj.scanstep;
		if(scanstep){
			var scanIndex=StepStore.getWorklistIndexByStep(scanstep);
			activeIndexes.push(scanIndex);
		}
		
		this.setState({
			activeIndexes: activeIndexes
		});
	},
	_onDropdownMouseLeave: function(index){
		this.setState({
			activeIndexes: []
		});
	},
	_onDropdownElementMouseEnter: function(e){
		var stepseq = e.currentTarget.id;
		var index = StepStore.getWorklistIndexByStep(stepseq);
		this.setState({
			activeIndexes: [index]
		});
	},
	rowClassNameGetter: function(index){
		var classList = "";
		var stepObj = StepStore.getWorklistStepAt(index);
		if(stepObj.isScan){
			classList += "worklistStepRow_scan ";
		} else {
			classList += "worklistStepRow_process ";
		}
		if(_.indexOf(this.state.activeIndexes,index)>-1){
			classList += "worklistactive "
		}
		return classList;
	},
	render: function(){
		var dropdown;
		if (this.state.dropdown.visible){
			dropdown = <WorklistTableDropdownSelection
							hideDropdown={this.hideDropdown} 
							x = {this.state.dropdown.x} 
							y = {this.state.dropdown.y} 
							ownerStepSeq = {this.state.dropdown.stepseq}
							onDropdownElementMouseEnter={this._onDropdownElementMouseEnter}
							onDropdownMouseLeave={this._onDropdownMouseLeave}
							onStepmasterClick={this.props.onStepmasterClick}/>;
		} else {
			dropdown = null;
		}
		return (
			<div>
		      	<Table
		        	rowsCount={StepStore.getWorklistLength()}
		        	rowHeight={45}
		        	headerHeight={40}
		        	width={this.props.width}
		        	height={this.props.height}
		        	footerHeight={0}
		        	isColumnResizing={false}
		        	onColumnResizeEndCallback={this._onColumnResizeEnd}
		        	rowClassNameGetter={this.rowClassNameGetter}>
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
	        	    				onDropdownMouseEnter={this._onDropdownMouseEnter}
	        	    				onDropdownMouseLeave={this._onDropdownMouseLeave}
	        	    				showDropdown={this.showDropdown}
	        	    				stepObj={StepStore.getWorklistStepAt(props.rowIndex)} /> ) } />
				<Column
	     			columnKey="scanstep"
	     			width={this.state.columnWidths.scanstep}
	     			isResizable={true}
	        	    header={<Cell><p className="tableHeader">Scan Step</p></Cell>}
	        	    cell={props=>(<WorklistTableText
	        	    				value={StepStore.getWorklistStepAt(props.rowIndex)[props.columnKey]}/> )} />
		      	</Table>
		      	<div id="footer" style={footerStyle}>
		      		<p className="text-center">Ryan J McGill</p>
		      	</div>
		      	{dropdown}
	      	</div>
		);
	}
});

module.exports = WorklistTable;