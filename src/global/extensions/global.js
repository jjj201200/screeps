import _ from 'lodash';

export const Define = ({target, filterObject, filterFunction, extendObject}) => {
    let defineFunction = function (k, i) {
        let ks = k + 's';
        let Ks = _.upperFirst(ks);
        let iKs = _.isUndefined(i) ? ks : (i + ks);
        Object.defineProperty(target.prototype, iKs, {
            configurable: true,
            enumerable: true,
            get: function () {
                if (_.isUndefined(filterObject)) filterObject = global[Ks][ks];
                if (_.isUndefined(this[iKs])) this[iKs] = _.filter(filterObject, filterFunction);
                return this[iKs];
            }
        });
    }
    _.each(extendObject, (value, key) => {
        if (value.length > 0) {
            _.each(value, (index) => {
                defineFunction(key, index);
            });
        } else {
            defineFunction(key);
        }
    });
};
