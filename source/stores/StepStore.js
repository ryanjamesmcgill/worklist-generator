const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');
const StepUtils = require('../utils/StepUtils');

const CHANGE_EVENT = 'change';

var MasterSteps = [];
var WorklistSteps = [];
var filteredIndexes = [];
var filters = {
		"processid": {
			"value": "",
			"name": "Process ID"
		},
		"stepseq": {
			"value": "",
			"name": "Step Sequence"
		},
		"stepdesc": {
			"value": "",
			"name": "Step Description"
		},
		"ppid": {
			"value": "",
			"name": "PPID"
		},
		"workliststatus": {
			"value": "",
			"name": "Worklist Status"
		}
};

function setMasterSteps(stepArray){
	for(var i=0; i<stepArray.length; i++){
	    MasterSteps.push(stepArray[i]);
	    MasterSteps[i].workliststatus = false;
	    filteredIndexes.push(i);
	}
}
function setFilter(filtertype, value){
	filters[filtertype].value = value.toLowerCase();
	filter();
}
function filter(){
	//resets filteredIndexes based on values in filters object
	var size = MasterSteps.length;
	filteredIndexes = [];
	for (var index = 0; index < size; index++){
		if(StepUtils.filterTest(MasterSteps[index], filters)){
			filteredIndexes.push(index);
		}
	}
}
function addStepToWorklist(stepObj){
	WorklistSteps.push(stepObj);
	var size = MasterSteps.length;
	for (var index = 0; index < size; index++){
		if(MasterSteps[index].stepseq == stepObj.stepseq){
			MasterSteps[index].workliststatus = true;
		}
	}
}
function emitChange(){
	StepStore.emit(CHANGE_EVENT);
}

var StepStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},
	getMasterStepAt: function(filteredIndex){
		var MasterIndex = filteredIndexes[filteredIndex];
		return MasterSteps[ MasterIndex ];
	},
	getWorlistLength: function(){
		return WorklistSteps.length;
	},
	getFilteredLength: function(){
		return filteredIndexes.length;
	},
	getFilteredSteps: function(){
		return filteredIndexes.map(
					function(index){
						return MasterSteps[index];
					}
			);	
	},
	getFilters: function(){
		return filters;
	}
});

function handleAction(action){
	switch (action.type) {
		case 'set_mastersteps': 
			setMasterSteps(action.stepArray);
			emitChange();
			break;
		case 'set_filter':
			setFilter(action.filtertype, action.value);
			emitChange();
			break;
		case 'add_step_to_worklist':
			addStepToWorklist(action.stepObj);
			emitChange();
			break;
		default: // .. do nothing
	}
}

StepStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = StepStore;