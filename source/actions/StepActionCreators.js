var AppDispatcher = require('../dispatcher/AppDispatcher');

function setMasterSteps(stepArray){
    var action = {
        type: 'set_mastersteps',
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

function addStepToWorklist(stepObj){
    var action = {
        type: 'add_step_to_worklist',
        stepObj: stepObj
    }
    AppDispatcher.dispatch(action);
}


module.exports = {
	setMasterSteps: setMasterSteps,
	setFilter: setFilter,
	addStepToWorklist: addStepToWorklist
};