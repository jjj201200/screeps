import _ from 'lodash';
/**
 * 房间内坐标对象
 */
Object.defineProperties(RoomPosition.prototype, {
    // 坐标上的对象
    entries: {
        configurable: true,
        enumerable: true,
        /**
         * @returns {LookAtResult[] | *}
         */
        get: function () {
            if (_.isUndefined(this._entries)) this._entries = this.look();
            return this._entries;
        }
    },
    // 建筑结构
    structure: {
        configurable: true,
        enumerable: true,
        /**
         * @returns {*|Array<AllLookAtTypes[string]>}
         */
        get: function () {
            if (_.isUndefined(this._structure)) { this._structure = this.lookFor(LOOK_STRUCTURES); }
            return this._structure
        }
    },
    // 地形
    terrain: {
        configurable: true,
        enumerable: true,
        get: function () {
            if (_.isUndefined(this._terrain)) {
                this._terrain = _.filter(this.entries, (entry) => {
                    return entry.type == 'terrain';
                });
            }
            return this._terrain
        }
    },
    //获取该坐标点周围8格的坐标对象
    adjacent: {
        configurable: true,
        enumerable: true,
        /**
         * @returns {Array}
         */
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
    }
});