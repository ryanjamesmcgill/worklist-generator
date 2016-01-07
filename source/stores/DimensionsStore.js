const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var stepmaster = {
    height: 500,
    width: 800
};

var worklist = {
    height: 100,
    width: 800
};

var worklistRefs = {
    top: null,
    bottom: null
};

function setStepmasterHeight(height){
    stepmaster.height = height;
}
function setWorklistHeight(height){
    worklist.height = height;
}
function calculateWorklistHeight(){
    var newHeight = worklistRefs.bottom.offsetTop - worklistRefs.top.offsetTop;
    var newHeight = newHeight + 200; //buffer for redraw
    setWorklistHeight(newHeight);
}
function storeReferences(refs){
    worklistRefs.top = refs.top;
    worklistRefs.bottom = refs.bottom;
}

function emitChange(){
    DimensionsStore.emit(CHANGE_EVENT);
}

var DimensionsStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
    getStepmaster: function(){
        return stepmaster;
    },
    getWorklist: function(){
        return worklist;
    }
});

function handleAction(action){
    switch(action.type) {
        case 'set_stepmaster_height':
            setStepmasterHeight(action.height);
            calculateWorklistHeight();
            emitChange();
            break;
            
        case 'store_references':
            storeReferences(action.refs);
            emitChange();
            break;
            
        default: // .. do nothing
    }
}

DimensionsStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = DimensionsStore;