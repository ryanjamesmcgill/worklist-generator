"use strict";
var React = require('react');
var StepStore = require('../stores/StepStore');
var StepActionCreators = require('../actions/StepActionCreators');
var StepmasterHeader = require('./stepmasterheader.react');
var StepmasterText = require('./stepmastertext.react');
var StepmasterButton = require("./stepmasterbutton.react");
var StepmasterHeaderButton = require("./stepmasterheaderbutton.react");
var Modal = require('react-modal');
var FixedDataTable = require('fixed-data-table');
var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;
var Cell = FixedDataTable.Cell;

var modalStyle={
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.60)',
    zIndex			  : 5,
    textAlign		  : 'center'
  },
  content : {
  	display					   : 'inline-block',
    position                   : 'relative',
    top                        : '50px',
    left					   : 0,
    right					   : 0,
    padding                    : '20px',
    zIndex					   : 10,
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '8px',
    outline                    : 'none',
    WebkitBoxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)',
	WozBoxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)',
	boxShadow: '0px 3px 13px 0px rgba(0,0,0,0.75)'
  }
};

var closeSymbolStyle = {
	position: 'absolute',
	right: '0px',
	top: '0px',
	width: '21px',
	height: '21px'
};

var cellOverlayStyle = {
        backgroundColor   : 'rgba(0, 0, 0, 0.60)',
        textAlign: 'center',
        visibility: 'hidden',
        width: '100%',
        height: '100%'
    };

var Stepmaster = React.createClass({
	getDefaultProps: function(){
		return {
			dimensions: {
				height: 650,
				width: 875
			}	
		}
	},
    getInitialState: function(){
		return {
			filters: StepStore.getFilters(),
			columnWidths: {
				button: 46,
				processid: 120,
				stepseq: 120,
				stepdesc: 300,
				ppid: 250
			},
		};
	},
	componentDidMount: function(){
		StepStore.addChangeListener(this._onStoreChange);
	},
	componentWillUnmount: function(){
		StepStore.removeChangeListener(this._onStoreChange);
	},
	_onStoreChange: function(){
		this.setState({
			filters: StepStore.getFilters()
		});
	},
	_onType: function(e){
	    var filtertype = e.target.attributes.id.textContent;
	    var value = e.target.value;
		StepActionCreators.setFilter(filtertype, value);
	},
	_onColumnResizeEnd: function(newColumnWidth, columnKey){
		var newWidths = this.state.columnWidths;
		newWidths[columnKey] = newColumnWidth;
	    this.setState({
	    	columnWidths: newWidths
	    });	
	},
	_rowClassNameGetter: function(index){
		var classNames = "";
		var stepObj = StepStore.getMasterStepAt(index);
		
		classNames = "stepmasterRow ";
		
		if(stepObj.isScan){
			classNames += 'stepRow_scan ';
		} else {
			classNames += 'stepRow_process ';
		}
		
		if(!stepObj.workliststatus){
			classNames += 'active ';
		} else {
			classNames += 'inactive ';
		}
		
		return classNames;
	},
	_onCellClick: function(obj, e){
		console.log('cell Click');
		if(obj.workliststatus){
			StepActionCreators.removeStepFromWorklist(obj);
		} else {
			StepActionCreators.addStepToWorklist(obj);
		}
	},
	render: function(){
		var self = this;
		return (
			<Modal
				isOpen={this.props.stepmasterIsVisible}
				onRequestClose={this.props.onStepmasterClick}
				style={modalStyle}>
				
			<span 	className="close"
					style={closeSymbolStyle}
					onClick={this.props.onStepmasterClick}>&times;</span>
					
			<div id="stepmaster-container" style={{margin: 'auto', width: this.props.dimensions.width}}>
			<h4 style={{marginTop: '0px'}}>Select steps to add to your worklist</h4>
	      	<Table
	        	rowsCount={StepStore.getFilteredLength()}
	        	rowHeight={30}
	        	headerHeight={80}
	        	width={this.props.dimensions.width}
	        	height={this.props.dimensions.height}
	        	footerHeight={0}
	        	isColumnResizing={false}
	        	onColumnResizeEndCallback={this._onColumnResizeEnd}
	        	rowClassNameGetter={this._rowClassNameGetter}>
	        	
	        	<Column
	     			columnKey="button"
	     			width={this.state.columnWidths.button}
	     			isResizable={false}
	        	    header={<StepmasterHeaderButton/>}
	        	    cell={	
        	    	function(props){ 
    	    			return (<StepmasterButton 
    	    	        	onCellClick={self._onCellClick}
    	    				stepObj={StepStore.getMasterStepAt(props.rowIndex)}/> ); } 
	        	    	} />
	        	<Column
	     			columnKey="processid"
	     			width={this.state.columnWidths.processid}
	     			isResizable={true}
	        	    header={
	        	    function(props){
	        	    	return(<StepmasterHeader
	        	    			filterType={props.columnKey}
	        	    			handler={self._onType}/> ); }
	        	    	
	        	    }
	        	    cell={
	        	    function(props){
	        	    	return(<StepmasterText
	        	    			column={props.columnKey}
	        	    			onCellClick={self._onCellClick}
	        	    			stepObj={StepStore.getMasterStepAt(props.rowIndex)}/> ); }
	        	    	
	        	    } />
	        	<Column
	     			columnKey="stepseq"
	     			width={this.state.columnWidths.stepseq}
	     			isResizable={true}
	        	    header={function(props){
	        	    	return(<StepmasterHeader
	        	    			filterType={props.columnKey}
	        	    			handler={self._onType}/> ); }
	        	    	
	        	    }
	        	    cell={function(props){
	        	    		return (<StepmasterText
	        	    			column={props.columnKey}
	        	    			onCellClick={self._onCellClick}
	        	    			stepObj={StepStore.getMasterStepAt(props.rowIndex)} /> ); }
	        	    	
	        	    } />
	        	<Column
	     			columnKey="stepdesc"
	     			width={this.state.columnWidths.stepdesc}
	     			isResizable={true}
	        	    header={function(props){
	        	    			return (<StepmasterHeader
	        	    			filterType={props.columnKey}
	        	    			handler={self._onType}/> );}
	        	    	
	        	    }
	        	    cell={function(props){
	        	    		return (<StepmasterText
	        	    			column={props.columnKey}
	        	    			onCellClick={self._onCellClick}
	        	    			stepObj={StepStore.getMasterStepAt(props.rowIndex)} /> ); }
	        	    	
	        	    } />
	        	<Column
	     			columnKey="ppid"
	     			width={this.state.columnWidths.ppid}
	     			isResizable={true}
	        	    header={function(props){
	        	    		return (<StepmasterHeader
	        	    			filterType={props.columnKey}
	        	    			handler={self._onType}/> )}
	        	    	
	        	    }
	        	    cell={function(props){
	        	    		return (<StepmasterText
	        	    			column={props.columnKey}
	        	    			onCellClick={self._onCellClick}
	        	    			stepObj={StepStore.getMasterStepAt(props.rowIndex)} /> );}
	        	    } />
	      	</Table>
	      	</div>
	      	<div>
		      	<button 
		      		style={{margin: '10px auto 0px auto', display: 'block'}}
		      		onClick={this.props.onStepmasterClick} 
		      		className="btn btn-primary">Close</button>
	      	</div>
	      	</Modal>
		);
	}
});

module.exports = Stepmaster;