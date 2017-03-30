module.exports = class Manager {
    constructor(name) {
        this.name = name;
        this[name] = {};//{id:entry}
        if (_.isUndefined(Memory[_.upperFirst(this.name + 's')])) Memory[_.upperFirst(this.name + 's')] = {};
        if (_.isUndefined(Memory[_.upperFirst(this.name + 's')][this.name+'s'])) Memory[_.upperFirst(this.name + 's')][this.name+'s'] = {};
    }
};