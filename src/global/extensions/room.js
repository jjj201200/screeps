module.exports = function () {
    let roomFilter = (entry) => { return entry.room.name == this.name };
    Define({
        target: Room,
        filterFunction: roomFilter,
        extendObject: {
            "road": [],
            "wall": [],
            "mineral": [],
            "source": [],
            "flag": [],
            "link": ["my", "ally", "hostile"],
            "creep": ["my", "ally", "hostile"],
            "tower": ["my", "ally", "hostile"],
            "spawn": ["my", "ally", "hostile"],
            "storage": ["my", "ally", "hostile"],
            "extension": ["my", "ally", "hostile"],
            "container": ["my", "ally", "hostile"],
            "controller": ["my", "ally", "hostile"],
            "constructionSite": ["my", "ally", "hostile"],
        }
    });
    //injured creeps
    let injuredCreepsFilter = (creep) => { return creep.hits < creep.hitsMax; }
    Define({
        target: Room,
        filterObject: Room,
        filterFunction: injuredCreepsFilter,
        extendObject: {
            "injuredCreeps": ["my", "ally", "hostile"]
        }
    })
    //energy
    Object.defineProperty(Room.prototype, 'energy', {
        configurable: true,
        writable: false,
        enumerable: true,
        get: function () {
            return _.sumBy(this.sources, (source) => { return source.energy; });
        }
    });
    Object.defineProperty(Room.prototype, 'energyCapacity', {
        configurable: true,
        writable: false,
        enumerable: true,
        get: function () {
            return _.sumBy(this.sources, (source) => { return source.energyCapacity; });
        }
    });

}