module.exports = function () {
    Object.defineProperty(RoomObject.prototype, 'accessibleFields', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._accessibleFields)) {
                this._accessibleFields = _.filter(this.pos.adjacent, (pos) => {
                    return pos.terrain != 'wall';
                });
            }
            return this._accessibleFields;
        }
    });
};