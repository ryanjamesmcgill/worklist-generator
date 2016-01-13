"use strict";
const React = require('react');
const StepmasterStore = require('../stores/StepmasterStore');
const WorklistStore = require('../stores/WorklistStore');
const StepmasterActionCreators = require('../actions/StepmasterActionCreators');
const StepmasterHeader = require('./stepmasterheader.react');
const StepmasterText = require('./stepmastertext.react');
const StepmasterButton = require("./stepmasterbutton.react");
const StepmasterHeaderButton = require("./stepmasterheaderbutton.react");
const Modal = require('react-modal');
const FixedDataTable = require('fixed-data-table');
const Table = FixedDataTable.Table;
const Column = FixedDataTable.Column;
const Cell = FixedDataTable.Cell;

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

var Stepmaster = React.createClass({
	getDefaultProps: function(){
		return {
			dimensions: {
				height: 600,
				width: 800
			}	
		}
	},
    getInitialState: function(){
		return {
			filters: StepmasterStore.getFilters(),
			columnWidths: {
				button: 67,
				processid: 120,
				stepseq: 120,
				stepdesc: 250,
				ppid: 100,
				inWorklist: 100
			}
		};
	},
	componentDidMount: function(){
		StepmasterStore.addChangeListener(this._onStoreChange);
		WorklistStore.addChangeListener(this._onStoreChange);
	},
	componentWillUnmount: function(){
		StepmasterStore.removeChangeListener(this._onStoreChange);
		WorklistStore.removeChangeListener(this._onStoreChange);
	},
	_onStoreChange: function(){
		this.setState({
			filters: StepmasterStore.getFilters()
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
			<Modal
				isOpen={this.props.stepmasterIsVisible}
				onRequestClose={this.props._onStepmasterClick}
				style={modalStyle}>
				
			<span 	className="close"
					style={closeSymbolStyle}
					onClick={this.props._onStepmasterClick}>&times;</span>
					
			<div id="stepmaster-container" style={{margin: 'auto', width: this.props.dimensions.width}}>
			<h4 style={{marginTop: '0px'}}>Select steps to add to your worklist</h4>
	      	<Table
	        	rowsCount={StepmasterStore.getFilteredLength()}
	        	rowHeight={45}
	        	headerHeight={80}
	        	width={this.props.dimensions.width}
	        	height={this.props.dimensions.height}
	        	footerHeight={0}
	        	isColumnResizing={false}
	        	onColumnResizeEndCallback={this._onColumnResizeEnd}>
	        	<Column
	     			columnKey="button"
	     			width={this.state.columnWidths.button}
	     			isResizable={false}
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
	        	<Column
	     			columnKey="inWorklist"
	     			width={this.state.columnWidths.inWorklist}
	     			isResizable={true}
	        	    header={props=>(<StepmasterHeader
	        	    			filterType={props.columnKey}
	        	    			handler={this._onType}/> )}
	        	    cell={props=>(WorklistStore.checkIndex(props.rowIndex))} />

	      	</Table>
	      	</div>
	      	<div>
		      	<button 
		      		style={{margin: '10px auto 0px auto', display: 'block'}}
		      		onClick={this.props._onStepmasterClick} 
		      		className="btn btn-primary">Close</button>
	      	</div>
	      	</Modal>
		);
	}
});

module.exports = Stepmaster;