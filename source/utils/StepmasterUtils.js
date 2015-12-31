const _ = require('lodash');
const StepmasterActionCreator = require('../actions/StepmasterActionCreators');
const stepArray = require('./stepdata/steps.json');

function generateStepmaster(){
    StepmasterActionCreator.setStepmaster(stepArray);
}

function filterTest(row, filters){
    var pass = true;
    _.forEach(filters,function(value, key){
        if(value !== ""){
        pass = pass && (row[key].toLowerCase().indexOf(value) !== -1);
        }
    });
    return pass;
}

module.exports = {
    generateStepmaster: generateStepmaster,
    filterTest: filterTest
};