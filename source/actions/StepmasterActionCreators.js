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

module.exports = {
	setStepmaster: setStepmaster,
	setFilter: setFilter
};