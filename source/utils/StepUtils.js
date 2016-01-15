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

function sortWorklist(WorklistSteps){
    WorklistSteps.sort(
        function(a,b){
            var aStep = a.stepseq;
            var bStep = b.stepseq;
            if(aStep < bStep){
                return -1;
            } else if(aStep > bStep){
                return 1;
            } else {
                return 0;
            }
        });
}

module.exports = {
    generateMasterSteps: generateMasterSteps,
    filterTest: filterTest,
    sortWorklist: sortWorklist
};