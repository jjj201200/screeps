module.exports = function () {
    global.Define = ({ target, filterObject, filterFunction, extendObject }) => {
        let defineFunction = function (k, i) {
            let ks = k + 's';
            let Ks = _.upperFirst(ks);
            let iKs = _.isUndefined(i) ? ks : (i + ks);
            Object.defineProperty(target.prototype, iKs, {
                configurable: true,
                writable: false,
                enumerable: true,
                get: function () {
                    if (_.inUndefined(filterObject)) filterObject = global[Ks][ks];
                    if (_.isUndefined(this[iKs])) this[iKs] = _.filter(filterObject, filterFunction);
                    return this[iKs];
                }
            });
        }
        _.each(extendObject, (value, key) => {
            if (v.length > 0) {
                _.each(value, (index) => {
                    defineFunction(key, index);
                });
            } else {
                defineFunction(key);
            }

        });
    };
};