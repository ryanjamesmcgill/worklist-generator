var AppDispatcher = require('../dispatcher/AppDispatcher');

function addIndex(index){
    var action = {
        type: "worklist_add_index",
        index: index
    };
    AppDispatcher.dispatch(action);
}

module.exports = {
    addIndex: addIndex
};