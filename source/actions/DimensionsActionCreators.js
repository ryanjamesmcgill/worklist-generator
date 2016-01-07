var AppDispatcher = require('../dispatcher/AppDispatcher');

function setStepmasterHeight(height){
    var action = {
        type: 'set_stepmaster_height',
        height: height
    };
    AppDispatcher.dispatch(action);
}

function storeReferences(refs){
    var action = {
        type: "store_references",
        refs: refs
    };
    AppDispatcher.dispatch(action);
}

module.exports = {
	setStepmasterHeight: setStepmasterHeight,
	storeReferences: storeReferences
};