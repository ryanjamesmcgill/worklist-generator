const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const StepmasterStore = require('./StepmasterStore');
const StepmasterActionCreators = require('../actions/StepmasterActionCreators');
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var worklistindexs = [];


function addIndex(filterindex){
    var index = getStepmasterIndex(filterindex);
    worklistindexs.push(index);
}
function getStepmasterIndex(filterindex){
    return null;
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
    checkIndex: function(filterindex){
        console.log('checkIndex()');
        var index = getStepmasterIndex(filterindex);
        if(worklistindexs.indexOf(index)){
            return 'In Worklist'
        } else {
            return 'Not In Worklist'
        }
    },
    getLength: function(){
        return worklistindexs.length
    }
});

function handleAction(action){
    switch(action.type){
        case 'worklist_add_index':
            addIndex(action.index);
            emitChange();
            break;
        default: // .. do nothing
    }
}

WorklistStore.dispatchToken = AppDispatcher.register(handleAction);
module.exports = WorklistStore;