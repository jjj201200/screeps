module.exports = class Task {
    constructor(taskName) {
        this.taskName = taskName;
        this.jobs = {};
        this.jobList = [];
        this.priority = Settings.maxTaskPriority;
    };
    assignJobs() {
        let t = this;
        //determine whether the jobs are in the Jobs.jobList
        _.each(this.jobList, (jobName, jobIndex) => {
            Jobs.jobs[jobName].setPriority(this.priority,jobIndex);
        })
    };
};
Object.defineProperty(Task.prototype, 'priority', {
    configurable: true,
    get: function () {
        if (_.isUndefined(this._priority)) { this._priority = Settings.maxTaskPriority; }
        return this._priority;
    },
    set: function (vaule) {
        if (value instanceof Number) {
            if (vaule < Settings.minTaskPriority) this._priority = Settings.minTaskPriority;
            else this._priority = value;
        } else {/*error*/ }
    }
});