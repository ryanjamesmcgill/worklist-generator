const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const StepmasterStore = require('./StepmasterStore');
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var workliststeps = [];


function addStep(stepObj){
    workliststeps.push(stepObj);
}
function emitChange(){
    WorklistStore.emit(CHANGE_EVENT);
}

var WorklistStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
        this.removeChangeListener(CHANGE_EVENT, callback)
    },
    getLength: function(){
        return workliststeps.length
    }
});

function handleAction(action){
    switch(action.type){
        case 'worklist_add_step':
            addStep(action.stepObj);
            emitChange();
            break;
        default: // .. do nothing
    }
}

WorklistStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = WorklistStore;