module.exports = class Job {
    constructor(jobName) {
        this.jobName = jobName;
        this.creeps = {};
        this.actions = {};
        this.priority = Settings.lowJobPriority;
        this.taskPriority = Settings.lowTaskPriority;
        this.jobIndex = 0;
    };
    setPriority(taskPriority, jobIndex) {
        this.taskPriority = taskPriority;
        this.jobIndex = jobIndex;
    };
    execute(){};
}
Object.defineProperty(Job.prototype, 'priority', {
    configurable: true,
    get: function () {
        if (_.isUndefined(this._priority)) { this._priority = Settings.lowJobPriority; }
        return this._priority;
    },
    set: function (vaule) {
        if (value instanceof Number) {
            if (vaule < Settings.highJobPriority) this._priority = Settings.highJobPriority;
            else this._priority = value;
        } else {/*error*/ }
    }
});
Object.defineProperty(Job.prototype, 'taskPriority', {
    configurable: true,
    get: function () {
        if (_.isUndefined(this._taskPriority)) { this._taskPriority = Settings.highJobPriority; }
        return this._taskPriority;
    },
    set: function (vaule) {
        if (value instanceof Number) {
            if (vaule < 0) this._taskPriority = 0;
            else this._taskPriority = value;
        } else {/*error*/ }
    }
});