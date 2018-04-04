const _ = require('lodash');
let Rooms = {
    time: Game.time,
    rooms: {},
    cache: {
        rooms: Game.rooms,
        creeps: Game.creeps,
        spawns: Game.spawns,
        resources: Game.resources,
        structures: Game.structures,
        constructionSites: Game.constructionSites,
        flags: Game.flags,
    },
    statistics: false,
};
module.exports = Rooms;
Rooms.execute = function () {
    Rooms.statistic();
};

//statistic source, population, hostile and structures
Rooms.statistic = function () {
    //cache object which is not in Game
    let ally = Settings.global.ally;
    _.each(Rooms.cache.rooms, (room, roomName) => {
        //init new room object
        Rooms.rooms[roomName] = { time: Rooms.time };
        //init cache
        //sources
        _.each(room.find(FIND_SOURCES), (source) => { Sources.sources[source.id] = source; });
        //mineral
        _.each(room.find(FIND_MINERALS), (mineral) => { Minerals.minerals[mineral.id] = mineral; });
        //hostile creeps
        _.each(room.find(FIND_HOSTILE_CREEPS), (creep) => { Creeps.creeps[creep.id] = creep; });
        //hostile structures
        let hostileStructures = room.find(FIND_HOSTILE_STRUCTURES);
        _.each(hostileStructures, (structure) => {
            if (structure instanceof Structure) {
                let structureTypeS = structure.structureType + 's';
                global[_.upperFirst(structureType)][structureType][structure.id] = structure;
            }
        });
        //hostile construction sites
        let hostileConstructionSites = room.find(FIND_HOSTILE_CONSTRUCTION_SITES);
        _.each(hostileConstructionSites, (constructionSite) => {
            if (constructionSite instanceof ConstructionSite) {
                ConstructionSites.constructionSites[constructionSite.id] = constructionSite;
            }
        });
    });
    //init creeps
    _.each(Rooms.cache.creeps, (creep) => { if (creep instanceof Creep) { Creeps.creeps[creep.id] = creep; } });
    //init resources
    _.each(Rooms.cache.resources, (resource, b) => { if (resource instanceof Resource) { Resources.resources[resource.id] = resource; } });
    //init structures
    _.each(Rooms.cache.structures, (structure) => {
        if (structure instanceof Structure) {
            let structureTypeS = structure.structureType + 's';
            global[_.upperFirst(structureTypeS)][structureTypeS][structure.id] = structure;
        }
    });
    //init room construction sites
    _.each(Rooms.cache.constructionSites, (constructionSite) => {
        if (constructionSite instanceof ConstructionSite) {
            ConstructionSites.constructionSites[constructionSite.id] = constructionSite;
        }
    });
    //init room flags
    _.each(Rooms.cache.flags, (flag) => { if (flag instanceof Flag) { Flags.flags[flag.id] = flag; } });
    delete Rooms.cache;
    Rooms.statistics = true;
};
// Object.defineProperty(Rooms.prototype, 'energy', {
//     configurable: true,
//     get: function () {
//         if (_.isUndefined(this._energy)) { this._energy = _.sumBy(this.rooms, (room) => { return room.energy; }); }
//         return this._energy;
//     }
// });
// Object.defineProperty(Rooms.prototype, 'energyCapacity', {
//     configurable: true,
//     get: function () {
//         if (_.isUndefined(this._energyCapacity)) { this._energyCapacity = _.sumBy(this.rooms, (room) => { return room.energyCapacity; }); }
//         return this._energyCapacity;
//     }
// });