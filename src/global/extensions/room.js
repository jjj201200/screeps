import _ from 'lodash';

let roomFilter = (roomObject) => roomObject.room.name == this.name;
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
let injuredCreepsFilter = (creep) => creep.hits < creep.hitsMax;
Define({
    target: Room,
    filterObject: Room,
    filterFunction: injuredCreepsFilter,
    extendObject: {
        "injuredCreeps": ["my", "ally", "hostile"]
    }
})
//energy
Object.defineProperties(Room.prototype, {
    energy: {
        configurable: true,
        enumerable: true,
        get: function () {
            return _.sumBy(this.sources, (source) => { return source.energy; });
        }
    },
    energyCapacity: {
        configurable: true,
        enumerable: true,
        get: function () {
            return _.sumBy(this.sources, (source) => { return source.energyCapacity; });
        }
    }
});
