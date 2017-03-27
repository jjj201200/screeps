let Tasks = {};
module.exports = Tasks;
Tasks.lastTask = {};
Tasks.currentTask = {};
Tasks.nextTask = {};
Tasks.execute = function () {
    /*
    Tasks 
    --defance
    --default
    */
    _.each(Tasks.tasks, (task) => {
        if (task.check() === true){
            Tasks.setCurrent(task);
            return false;
        }
    });
    if(Tasks.currentTask instanceof Tasks.Task) Tasks.currentTask.execute();
};
Tasks.setCurrent = function (task) {
    Tasks.lastTask = Tasks.currentTask;
    Tasks.currentTask = task;
};