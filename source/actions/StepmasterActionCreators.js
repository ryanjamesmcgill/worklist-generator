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

function setHeight(height){
    var action = {
        type: 'stepmaster_set_height',
        height: height
    }
    AppDispatcher.dispatch(action);
}

module.exports = {
	setStepmaster: setStepmaster,
	setFilter: setFilter,
	setHeight: setHeight
};