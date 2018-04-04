/* global global*/
import _ from 'lodash';
module.exports = class Task {
    constructor(taskName) {
        this.taskName = taskName;
        this.jobs = {};
        this.jobList = [];
        this.priority = global.Settings.maxTaskPriority;
    };
    get priority () {
        if (_.isUndefined(this._priority)) { this._priority = global.Settings.maxTaskPriority; }
        return this._priority;
    }
    set priority (value) {
        if (value instanceof Number) {
            if (value < global.Settings.minTaskPriority) this._priority = global.Settings.minTaskPriority;
            else this._priority = value;
        } else {/*error*/ }
    }
    assignJobs() {
        let t = this;
        //determine whether the jobs are in the Jobs.jobList
        _.each(this.jobList, (jobName, jobIndex) => {
            global.Jobs.jobs[jobName].setPriority(this.priority,jobIndex);
        })
    };
};
Object.defineProperty(Task.prototype, 'priority', {
    configurable: true,
    get: function () {
        if (_.isUndefined(this._priority)) { this._priority = global.Settings.maxTaskPriority; }
        return this._priority;
    },
    set: function (value) {
        if (value instanceof Number) {
            if (value < global.Settings.minTaskPriority) this._priority = global.Settings.minTaskPriority;
            else this._priority = value;
        } else {/*error*/ }
    }
});