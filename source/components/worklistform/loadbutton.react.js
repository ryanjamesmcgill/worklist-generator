const React = require('react');
const WorklistFormStore = require('../../stores/WorklistFormStore');
const StepActionCreators = require('../../actions/StepActionCreators');
const _ = require('lodash');

var LoadButton = React.createClass({
	_onSetClick: function(e){
		var key = e.currentTarget.id;
		var steparray = WorklistFormStore.getOptionSavedStepSet(key);
		steparray.map(function(obj, index, array){
			StepActionCreators.addStepToWorklist(obj);
		});
		console.log('onSetClick:', key);	
	},
	createList: function(){
		var list = [];
		var stepSets = WorklistFormStore.getOptionsSavedStepSets();
		var self = this;
		_.forEach(stepSets, function(steps, title){
			var item = <li key={title} id={title} onClick={self._onSetClick}>
							<a className="dropdown-item" href='#'>
							{title}
							</a>
						</li>;
			list.push(item);
		});
		list.push(<li key="divider" className="divider" role="seperator"></li>);
		list.push(	<li key="loadFile" onClick={this.props.onLoadfileClick}>
						<a className="dropdown-item" href="#">Upload a custom set</a>
					</li>);
		return list;
	},
	render: function(){
		var list = this.createList();
		return (
		<div className="btn-group" role="group">
		  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		    Load
		  </button>
		  <ul className="dropdown-menu">
		    {list.map(function(element, index, array){
		    	return element;	
		    })}
		  </ul>
		 </div>
		);
	}
});

module.exports = LoadButton;