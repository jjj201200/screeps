let thisTask = Tasks.task('defensiveConstruction');
module.exports = thisTask;
thisTask.joblist = [
    'constructWall',
    'constructRampart',
];
thisTask.check = function () {
    return this.priority;
};
thisTask.assignJobs = function(){

}