var AppDispatcher = require('../dispatcher/AppDispatcher');

function setStepmaster(stepArray){
    var action = {
        type: 'set_stepmaster',
        stepArray: stepArray
    };
    AppDispatcher.dispatch(action);
}

function setFilter(filtertype, value){
    var action = {
        type: 'set_filter',
        filtertype: filtertype,
        value: value
    };
    AppDispatcher.dispatch(action);
}

function addedToWorklist(stepObj){
    var action = {
        type: 'added_to_worklist',
        stepObj: stepObj
    };
    AppDispatcher.dispatch(action);
}

function removedFromWorklist(index){
    var action = {
        type: 'removed_from_worklist',
        index: index
    };
    AppDispatcher.dispatch(action);
}



module.exports = {
	setStepmaster: setStepmaster,
	setFilter: setFilter,
	addedToWorklist: addedToWorklist,
	removedFromWorklist: removedFromWorklist
};