import _ from 'lodash';
export class Manager {
    constructor(name) {
        this.name = name;
        this[name] = {};//{id:entry}
        const names = this.name+'s';
        const Names = _.upperFirst(names);
        if (_.isUndefined(Memory[Names])) Memory[Names] = {};
        if (_.isUndefined(Memory[Names][names])) Memory[Names][names] = {};
    }
};