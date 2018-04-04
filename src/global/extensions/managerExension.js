import _ from 'lodash';
import Manager from 'Classes/manager';
module.exports = function () {
    Object.defineProperties(Manager.prototype, {
        my: {
            configurable: true,
            enumerable: true,
            get: function () {
                const names = this.name + 's';
                const Names = _.upperFirst(names);
                if (_.isUndefined(Memory[Names]._my)) {
                    Memory[Names]._my = _.filter(global[Names][names], (entry) => { return entry.my == true; });
                }
                return Memory[Names]._my;
            }
        },
        ally: {
            configurable: true,
            enumerable: true,
            get: function () {
                const names = this.name + 's';
                const Names = _.upperFirst(names);
                if (_.isUndefined(Memory[Names]._ally)) {
                    Memory[Names]._ally = _.filter(
                        global[Names][names],
                        (entry) => Settings.ally.indexOf(entry.onwer.username) >= 0,
                    );
                }
                return Memory[Names]._ally;
            }
        },
        hostile: {
            configurable: true,
            enumerable: true,
            get: function () {
                const names = this.name + 's';
                const Names = _.upperFirst(names);
                if (_.isUndefined(Memory[Names]._hostile)) {
                    Memory[Names]._hostile = _.filter(
                        global[Names][names],
                        (entry) => Settings.ally.indexOf(entry.onwer.username) < 0,
                    );
                }
                return Memory[Names]._hostile;
            }
        }

    });
};