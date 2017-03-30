let thisTask = Tasks.task('resourceCollection');
module.exports = thisTask;
thisTask.jobList = [
    'collectEnergy',
]
thisTask.check = function () {
    if(Rooms.energy/Rooms.energyCapacity<0.9){
        this.priority -= 1;
    }
    if(Rooms.energy/Rooms.energyCapacity<0.7){
        this.priority -= 1;
    }
    if(Rooms.energy/Rooms.energyCapacity<0.5){
        this.priority -= 1;
    }
    if(Rooms.energy/Rooms.energyCapacity<0.3){
        this.priority -= 1;
    }
    if(Rooms.energy/Rooms.energyCapacity<0.1){
        this.priority -= 1;
    }
    if(Rooms.energy/Rooms.energyCapacity<0.01){
        this.priority -= 10;
    }
    return this.priority;
};
thisTask.assignJobs = function(){
    _.each(this.jobList,(jobName)=>{
        Jobs.jobs[jobName].
    });
}