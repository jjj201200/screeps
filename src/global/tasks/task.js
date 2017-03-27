module.exports = class Task {
    constructor(taskName) {
        this.taskName = taskName;
        this.jobs = {};
        this.jobList = [];
    };
};