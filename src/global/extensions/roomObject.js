const _ = require('lodash');
import _ from 'lodash';
/**
 * RoomObject: {pos, room}
 */
Object.defineProperties(RoomObject.prototype, {
    // 该对象周围8个内的非墙体坐标对象数组
    accessibleFields: {
        configurable: true,
        enumerable: true,
        get: function () {
            if (_.isUndefined(this._accessibleFields)) {
                this._accessibleFields = _.filter(this.pos.adjacent, (pos) => {
                    return pos.terrain != 'wall';
                });
            }
            return this._accessibleFields;
        }
    }
});
