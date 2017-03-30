module.exports = function () {
    Object.defineProperty(Manager.prototype, 'my', {
        configurable: true,
        writable: false,
        enumerable: true,
        get: function () {
            if (_.isUndefined(Memory[_.upperFirst(this.name + 's')]._my)) {
                Memory[_.upperFirst(this.name + 's')]._my = _.filter(global[_.upperFirst(this.name + 's')][this.name + 's'], (entry) => { return entry.my == true; });
            }
            return Memory[_.upperFirst(this.name + 's')]._my;
        }
    });
    Object.defineProperty(Manager.prototype, 'ally', {
        configurable: true,
        writable: false,
        enumerable: true,
        get: function () {
            if (_.isUndefined(Memory[_.upperFirst(this.name + 's')]._ally)) {
                Memory[_.upperFirst(this.name + 's')]._ally = _.filter(global[_.upperFirst(this.name + 's')][this.name + 's'], (entry) => { return Settings.ally.indexOf(entry.onwer.username) >= 0 });
            }
            return Memory[_.upperFirst(this.name + 's')]._ally;
        }
    });
    Object.defineProperty(Manager.prototype, 'hostile', {
        configurable: true,
        writable: false,
        enumerable: true,
        get: function () {
            if (_.isUndefined(Memory[_.upperFirst(this.name + 's')]._hostile)) {
                Memory[_.upperFirst(this.name + 's')]._hostile = _.filter(global[_.upperFirst(this.name + 's')][this.name + 's'], (entry) => { return Settings.ally.indexOf(entry.onwer.username) < 0 });
            }
            return Memory[_.upperFirst(this.name + 's')]._hostile;
        }
    });
};