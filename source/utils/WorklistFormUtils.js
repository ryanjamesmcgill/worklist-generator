const defectClasses = window.references.defectClasses;
const dataTypes = window.references.dataTypes;
const stepSets = window.references.stepSets;
const WorklistFormActionCreators = require('../actions/WorklistFormActionCreators');

function initializeWorklistFormOptions(){
    WorklistFormActionCreators.setOptionsDefectClasses(defectClasses);
    WorklistFormActionCreators.setOptionsDataTypes(dataTypes);
    WorklistFormActionCreators.setOptionsSavedStepSets(stepSets);
}

module.exports = {
    initializeWorklistFormOptions: initializeWorklistFormOptions
};