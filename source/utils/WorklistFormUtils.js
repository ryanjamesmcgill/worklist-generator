const defectClasses = require('./worklistformdata/defectclasses');
const dataTypes = require('./worklistformdata/datatypes');
const WorklistFormActionCreators = require('../actions/WorklistFormActionCreators');

function initializeWorklistFormOptions(){
    WorklistFormActionCreators.setOptionsDefectClasses(defectClasses);
    WorklistFormActionCreators.setOptionsDataTypes(dataTypes);
}

module.exports = {
    initializeWorklistFormOptions: initializeWorklistFormOptions
};