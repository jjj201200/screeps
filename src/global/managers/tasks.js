let Tasks = {};
module.exports = Tasks;
Tasks.taskList = [];
Tasks.execute = function () {
    /*
    Tasks 
    --defensiveConstruction
    --generalConstruction
    --resourceCollection
    */
    Tasks.sortTask();
    _.each(Tasks.taskList,function(task){
        task.assignJobs();
    });
};
Tasks.sortTask = function () {
    let defaultTaskList = [];
    defaultTaskList = _.soryBy(Tasks.tasks, (task) => { return task.priority; });
    Tasks.taskList = _.soryBy(Tasks.taskList, (task,defaultPriority) => { return task.check(); });
}