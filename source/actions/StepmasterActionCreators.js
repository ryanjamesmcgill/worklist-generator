var AppDispatcher = require('../dispatcher/AppDispatcher');

function setStepmaster(stepArray){
    var action = {
        type: 'set_stepmaster',
        stepArray: stepArray
    };
    AppDispatcher.dispatch(action);
}

function setFilterStepSeq(value){
    var action = {
        type: 'set_filter',
        column: 'stepseq',
        value: value
    };
    AppDispatcher.dispatch(action);
}

module.exports = {
	setStepmaster: setStepmaster,
	setFilterStepSeq: setFilterStepSeq
};