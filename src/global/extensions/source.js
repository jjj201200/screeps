const _ = require('lodash');
import _ from 'lodash';

Object.defineProperties(Source.prototype, {
    // 资源周围8格中可以被占领的位置数组
    stations: {
        configurable: true,
        enumerable: true,
        get: function () {
            // TODO 当周围设施位置变动时需要更新
            if (_.isUndefined(this._stations)) {
                this._stations = _.filter(this.accessibleFields, (pos) => {
                    if (pos.structure.length > 0) // 如果该位置有设施
                        return !(OBSTACLE_OBJECT_TYPES.indexOf(pos.structure.structure.structureType) >= 0);
                    else return true;
                });
            }
            return this._stations;
        }
    },
    // needUpdate: {
    //     value: false,
    // }
});
