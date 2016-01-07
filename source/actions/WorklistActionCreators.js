var AppDispatcher = require('../dispatcher/AppDispatcher');

function addStep(stepObj){
    var action = {
        type: "worklist_add_step",
        stepObj: stepObj
    };
    AppDispatcher.dispatch(action);
}

module.exports = {
    addStep: addStep
};