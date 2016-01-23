const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var options = {
	defectClasses : [],
	dataTypes : []
};

var selections = {
	dates : {
		startday : null,
		endday : null
	},
	defectClasses : [],
	mergeType: null,
	dataType : null
}; 

function setOptionsDefectClasses(array){
	options.defectClasses = array;
}
function setOptionsDataTypes(array){
	options.dataTypes = array;
}
function setSelectionsDefectClasses(array){
	selections.defectClasses = array;
}
function setSelectionDataType(dataType){
	selections.dataType = dataType;
}
function setSelectionMergeType(mergeType){
	selections.mergeType = mergeType;
}
function emitChange(){
	WorklistFormStore.emit(CHANGE_EVENT);
}

var WorklistFormStore = assign({}, EventEmitter.prototype, {
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	},
	getOptionsDefectClasses: function(){
		return options.defectClasses;
	},
	getOptionsDataTypes: function(){
		return options.dataTypes;
	},
	getSelectionsDefectClasses: function(){
		return selections.defectClasses;
	},
	getSelectionsDataType: function(){
		return selections.dataType;
	},
	getSelectionsMergeType: function(){
		return selections.mergeType;
	}
});

function handleAction(action){
	switch (action.type) {
		case 'set_options_defectClasses':
			setOptionsDefectClasses(action.array);
			emitChange();
			break;
		case 'set_options_dataTypes':
			setOptionsDataTypes(action.array);
			emitChange();
			break;
		case 'set_selections_defectClasses':
			setSelectionsDefectClasses(action.array);
			emitChange();
			break;
		case 'set_selections_dataType':
			setSelectionDataType(action.dataType);
			emitChange();
			break;
		case 'set_selections_mergeType':
			setSelectionMergeType(action.mergeType);
			emitChange();
			break;
		default: // .. do nothing
	}
}

WorklistFormStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = WorklistFormStore;