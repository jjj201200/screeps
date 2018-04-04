import _ from 'lodash';
import Settings from 'Settings';
export class Job {
    constructor(jobName) {
        this.jobName = jobName;
        this.creeps = {};
        this.actions = {};
        this.priority = global.Settings.lowJobPriority;
        this.taskPriority = global.Settings.lowTaskPriority;
        this.jobIndex = 0;
    };
    get priority () {
        if (_.isUndefined(this._priority)) { this._priority = global.Settings.lowJobPriority; }
        return this._priority;
    }
    set priority (value) {
        if (value instanceof Number) {
            if (value < global.Settings.highJobPriority) this._priority = global.Settings.highJobPriority;
            else this._priority = value;
        } else {/*error*/ }
    }

    get taskPriority () {
        if (_.isUndefined(this._taskPriority)) { this._taskPriority = global.Settings.highJobPriority; }
        return this._taskPriority;
    }
    set taskPriority (value) {
        if (value instanceof Number) {
            if (value < 0) this._taskPriority = 0;
            else this._taskPriority = value;
        } else {/*error*/ }
    }
    setPriority(taskPriority, jobIndex) {
        this.taskPriority = taskPriority;
        this.jobIndex = jobIndex;
    };
    execute(){};
}
