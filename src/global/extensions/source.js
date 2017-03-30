module.exports = function () {
    Object.defineProperty(Source.prototype, 'stations', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._stations)) {
                this._stations = _.filter(this.accessibleFields, (pos) => {
                    if (pos.structure.length > 0)
                        return !OBSTACLE_OBJECT_TYPES.indexOf(pos.structure.structure.structureType) > 0;
                    else return true;
                });
            }
            return this._stations;
        }
    });
};