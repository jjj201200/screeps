let collectionTask = Tasks.task('default');
module.exports = collectionTask;
collectionTask.jobList = [
    'collection',
    'construction',
    'repair'
]
collectionTask.check = function () {
    return true;
};
collectionTask.execute = function(){

}