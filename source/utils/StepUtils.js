const _ = require('lodash');
const StepActionCreators = require('../actions/StepActionCreators');
const stepArray = require('./stepdata/steps.json');

function generateMasterSteps(){
    StepActionCreators.setMasterSteps(stepArray);
}

function filterTest(row, filters){
    var pass = true;
    _.forEach(filters,function(filterObj, key){
        var value = filterObj.value;
        if(value !== ""){
        pass = pass && (row[key].toLowerCase().indexOf(value) !== -1);
        }
    });
    return pass;
}

module.exports = {
    generateMasterSteps: generateMasterSteps,
    filterTest: filterTest
};