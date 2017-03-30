let thisTask = Tasks.task('generalConstruction');
module.exports = thisTask;
thisTask.joblist=[
    'constructExtension',
    'constructRoad',
];
thisTask.check = function () {
    return this.priority;
};
thisTask.assignJobs = function(){

}