import _ from 'lodash';

Object.defineProperties(Creep.prototype, {
    job: {
        configurable: true,
        enumerable: true,
        get: function () {
            if (_.isUndefined(this._job)) this._job = undefined;
            return this._job;
        }
    }
});
