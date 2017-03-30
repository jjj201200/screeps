let Jobs = {};
module.exports = Jobs;
Jobs.jobList = [];
Jobs.jobs = {};
Jobs.execute = function () {
    Jobs.sortJob();
    _.each(Jobs.jobList,(job)=>{
        job.execute();
    });
};
Jobs.sortJob = function () {
    let jobsLength = _.keys(Jobs.jobs).length;
    Jobs.jobList = _.sortBy(Jobs.jobs, (job) => {
        return job.priority - Settings.lowTaskPriority + job.taskPriority - jobsLength + job.jobIndex;
    });
};