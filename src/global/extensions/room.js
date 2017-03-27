module.exports = function () {

    //creeps
    Object.defineProperty(Room.prototype, 'myCreeps', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myCreeps)) this._myCreeps = Rooms[this.name].creeps.my;
            return this._myCreeps;
        }
    });
    Object.defineProperty(Room.prototype, 'allyCreeps', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyCreeps)) this._allyCreeps = Rooms[this.name].creeps.ally;
            return this._allyCreeps;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileCreeps', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileCreeps)) this._hostileCreeps = Rooms[this.name].creeps.hostile;
            return this._hostileCreeps;
        }
    });
    //injured creeps
    let injuredCreepsFilter = (creep) => { return creep.hits < creep.hitsMax; }
    Object.defineProperty(Room.prototype, 'myInjuredCreeps', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myInjuredCreeps)) this._myInjuredCreeps = _.filter(Rooms[this.name].creeps.my, injuredCreepsFilter);
            return this._myInjuredCreeps;
        }
    });
    Object.defineProperty(Room.prototype, 'allyInjuredCreeps', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyInjuredCreeps)) this._allyInjuredCreeps = _.filter(Rooms[this.name].creeps.ally, injuredCreepsFilter);
            return this._allyInjuredCreeps;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileInjuredCreeps', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileInjuredCreeps)) this._hostileInjuredCreeps = _.filter(Rooms[this.name].creeps.hostile, injuredCreepsFilter);
            return this._hostileInjuredCreeps;
        }
    });

    //structures
    Object.defineProperty(Room.prototype, 'myStructures', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myStructures)) this._myStructures = Rooms[this.name].structures.my;
            return this._myStructures;
        }
    });
    Object.defineProperty(Room.prototype, 'allyStructures', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyStructures)) this._allyStructures = Rooms[this.name].structures.ally;
            return this._allyStructures;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileStructures', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileStructures)) this._hostileStructures = Rooms[this.name].structures.hostile;
            return this._hostileStructures;
        }
    });
    //constructionSites
    Object.defineProperty(Room.prototype, 'myConstructionSites', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myConstructionSites)) this._myConstructionSites = Rooms[this.name].constructionSites.my;
            return this._myConstructionSites;
        }
    });
    Object.defineProperty(Room.prototype, 'allyConstructionSites', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyConstructionSites)) this._allyConstructionSites = Rooms[this.name].constructionSites.ally;
            return this._allyConstructionSites;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileConstructionSites', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileConstructionSites)) this._hostileConstructionSites = Rooms[this.name].constructionSites.hostile;
            return this._hostileConstructionSites;
        }
    });
    //sources
    Object.defineProperty(Room.prototype, 'sources', {
        configurable: true,
        get: function () {
            return Rooms.rooms[this.name].sources
        }
    });

    //mineral
    Object.defineProperty(Room.prototype, 'mineral', {
        configurable: true,
        get: function () {
            return Rooms.rooms[this.name].mineral
        }
    });
    //flags
    Object.defineProperty(Room.prototype, 'flags', {
        configurable: true,
        get: function () {
            return Rooms.rooms[this.name].flags
        }
    });

    //containers
    Object.defineProperty(Room.prototype, 'myContainers', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myContainers)) this._myContainers = _.filter(this.myStructures, { "structureType": STRUCTURE_CONTAINER });
            return this._myContainers;
        }
    });
    Object.defineProperty(Room.prototype, 'allyContainers', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyContainers)) this._allyContainers = _.filter(this.allyStructures, { "structureType": STRUCTURE_CONTAINER });
            return this._allyContainers;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileContainers', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileContainers)) this._hostileContainers = _.filter(this.hostileStructures, { "structureType": STRUCTURE_CONTAINER });
            return this._hostileContainers;
        }
    });

    //storage
    Object.defineProperty(Room.prototype, 'myStorage', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myStorage)) this._myStorage = _.filter(this.myStructures, { "structureType": STRUCTURE_STORAGE });
            return this._myStorage;
        }
    });
    Object.defineProperty(Room.prototype, 'allyStorage', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyStorage)) this._allyStorage = _.filter(this.allyStructures, { "structureType": STRUCTURE_STORAGE });
            return this._allyStorage;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileStorage', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileStorage)) this._hostileStorage = _.filter(this.hostileStructures, { "structureType": STRUCTURE_STORAGE });
            return this._hostileStorage;
        }
    });
    //spawns
    Object.defineProperty(Room.prototype, 'mySpawns', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._mySpawns)) this._mySpawns = _.filter(this.myStructures, { "structureType": STRUCTURE_SPAWN });
            return this._mySpawns;
        }
    });
    Object.defineProperty(Room.prototype, 'allySpawns', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allySpawns)) this._allySpawns = _.filter(this.allyStructures, { "structureType": STRUCTURE_SPAWN });
            return this._allySpawns;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileSpawns', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileSpawns)) this._hostileSpawns = _.filter(this.hostileStructures, { "structureType": STRUCTURE_SPAWN });
            return this._hostileSpawns;
        }
    });
    //extensions
    Object.defineProperty(Room.prototype, 'myExtensions', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myExtensions)) this._myExtensions = _.filter(this.myStructures, { "structureType": STRUCTURE_EXTENSION });
            return this._myExtensions;
        }
    });
    Object.defineProperty(Room.prototype, 'allyExtensions', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyExtensions)) this._allyExtensions = _.filter(this.allyStructures, { "structureType": STRUCTURE_EXTENSION });
            return this._allyExtensions;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileExtensions', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileExtensions)) this._hostileExtensions = _.filter(this.hostileStructures, { "structureType": STRUCTURE_EXTENSION });
            return this._hostileExtensions;
        }
    });
    //links
    Object.defineProperty(Room.prototype, 'myLinks', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myLinks)) this._myLinks = _.filter(this.myStructures, { "structureType": STRUCTURE_LINK });
            return this._myLinks;
        }
    });
    Object.defineProperty(Room.prototype, 'allyLinks', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyLinks)) this._allyLinks = _.filter(this.allyStructures, { "structureType": STRUCTURE_LINK });
            return this._allyLinks;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileLinks', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileLinks)) this._hostileLinks = _.filter(this.hostileStructures, { "structureType": STRUCTURE_LINK });
            return this._hostileLinks;
        }
    });
    //towers
    Object.defineProperty(Room.prototype, 'myTowers', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myTowers)) this._myTowers = _.filter(this.myStructures, { "structureType": STRUCTURE_TOWER });
            return this._myTowers;
        }
    });
    Object.defineProperty(Room.prototype, 'allyTowers', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyTowers)) this._allyTowers = _.filter(this.allyStructures, { "structureType": STRUCTURE_TOWER });
            return this._allyTowers;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileTowers', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileTowers)) this._hostileTowers = _.filter(this.hostileStructures, { "structureType": STRUCTURE_TOWER });
            return this._hostileTowers;
        }
    });
    /*count*/
    Object.defineProperty(Room.prototype, 'flagCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._flagCount)) this._flagCount = _.keys(this.flags).length;
            return this._flagCount;
        }
    });
    Object.defineProperty(Room.prototype, 'sourceCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._sourceCount)) this._sourceCount = _.keys(this.sources).length;
            return this._sourceCount;
        }
    });
    //creep counter
    Object.defineProperty(Room.prototype, 'myCreepCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myCreepCount)) this._myCreepCount = _.keys(this.myCreeps).length;
            return this._myCreepCount;
        }
    });
    Object.defineProperty(Room.prototype, 'allyCreepCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyCreepCount)) this._allyCreepCount = _.keys(this.allyCreeps).length;
            return this._allyCreepCount;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileCreepCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileCreepCount)) this._hostileCreepCount = _.keys(this.hostileCreeps).length;
            return this._hostileCreepCount;
        }
    });
    //structure counter
    Object.defineProperty(Room.prototype, 'myStructureCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myStructureCount)) this._myStructureCount = _.keys(this.myStructures).length;
            return this._myStructureCount;
        }
    });
    Object.defineProperty(Room.prototype, 'allyStructureCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyStructureCount)) this._allyStructureCount = _.keys(this.allyStructures).length;
            return this._allyStructureCount;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileStructureCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileStructureCount)) this._hostileStructureCount = _.keys(this.hostileStructures).length;
            return this._hostileStructureCount;
        }
    });
    //construction site counter
    Object.defineProperty(Room.prototype, 'myConstructionSiteCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._myConstructionSiteCount)) this._myConstructionSiteCount = _.keys(this.myConstructionSites).length;
            return this._myConstructionSiteCount;
        }
    });
    Object.defineProperty(Room.prototype, 'allyConstructionSiteCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._allyConstructionSiteCount)) this._allyConstructionSiteCount = _.keys(this.allyConstructionSites).length;
            return this._allyConstructionSiteCount;
        }
    });
    Object.defineProperty(Room.prototype, 'hostileConstructionSiteCount', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._hostileConstructionSiteCount)) this._hostileConstructionSiteCount = _.keys(this.hostileConstructionSites).length;
            return this._hostileConstructionSiteCount;
        }
    });
    //sources
    Object.defineProperty(Room.prototype, 'energy', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._energy)) {
                this._energy = 0;
                _.each(this.sources, (source) => { this._energy += source.energy; });
            }
            return this._energy;
        },
        set: function (value) {
            if (value instanceof Number) {
                if (value < 0) {/*error*/ }
                else this._energy = value;
            }
            else {/*error*/ }
        }
    });
    Object.defineProperty(Room.prototype, 'energyCapacity', {
        configurable: true,
        get: function () {
            if (_.isUndefined(this._energyCapacity)) {
                this._energyCapacity = 0;
                _.each(this.sources, (source) => { this._energyCapacity += source.energyCapacity; });
            }
            return this._energyCapacity;
        },
        set: function (value) {
            if (value instanceof Number) {
                if (value < 0) {/*error*/ }
                else this._energyCapacity = value;
            }
            else {/*error*/ }
        }
    });

}