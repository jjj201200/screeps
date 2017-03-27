module.exports = function(){
    Object.defineProperty(Creep.prototype, 'job', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileCreeps)) this._hostileCreeps = Rooms[this.name].creeps.hostile;
            return this._hostileCreeps;
        }
    });
};