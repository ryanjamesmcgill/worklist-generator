const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const StepmasterStore = require('./StepmasterStore');
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var workliststeps = [];
var dimensions = {
    width: StepmasterStore.getDimensions().width,
    height: 200
};

function addStep(stepObj){
    workliststeps.push(stepObj);
}
function setHeight(height){
    dimensions.height=height;
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
    getDimensions: function(){
        return dimensions;
    },
    getLength: function(){
        return workliststeps.length
    }
});

function handleAction(action){
    switch(action.type){
        case 'add_step':
            addStep(action.stepObj);
            emitChange();
            break;
        case 'set_height':
            setHeight(action.height);
            emitChange();
            break;
            
        default:
            console.error('WorklistStore recieved unknown action type');
    }
}

WorklistStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = WorklistStore;