module.exports = function () {
    Object.defineProperty(RoomPosition.prototype, 'entries', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._entries)) this._entries = this.look();
            return this._entries;
        }
    });
    Object.defineProperty(RoomPosition.prototype, 'structure', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._structure)) { this._structure = this.lookFor(LOOK_STRUCTURES); }
            return this._structure
        }
    });
    Object.defineProperty(RoomPosition.prototype, 'terrain', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._terrain)) {
                this._terrain = _.filter(this.entries, (entry) => {
                    return entry.type == 'terrain';
                });
            }
            return this._terrain
        }
    });
    Object.defineProperty(RoomPosition.prototype, 'adjacent', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._adjacent)) {
                this._adjacent = [];
                for (let x = this.x - 1; x < this.x + 2; x++) {
                    for (let y = this.y - 1; y < this.y + 2; y++) {
                        if (x > 0 && x < 49 && y > 0 && y < 49) {
                            this._adjacent.push(new RoomPosition(x, y, this.roomName));
                        }
                    }
                }
            }
            return this._adjacent;
        }
    });
};