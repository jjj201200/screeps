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
    hostileCreepCount: 0,
    hostileStructureCount: 0,
    hostileConstructionSiteCount: 0,
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
        Rooms.rooms[roomName] = {
            time: Rooms.time,
            creeps: { my: {}, ally: {}, hostile: {} },
            structures: { my: {}, ally: {}, hostile: {} },
            sources: {},
            constructionSites: { my: {}, ally: {}, hostile: {} },
            flags: {},
            hostileCreepCount: 0,
            hostileStructureCount: 0,
            hostileConstructionSiteCount: 0,
        };
        //init cache
        Rooms.rooms[roomName].cache = {};
        //sources
        Rooms.rooms[roomName].sources = room.find(FIND_SOURCES);
        //mineral
        Rooms.rooms[roomName].mineral = room.find(FIND_MINERALS);
        //hostile creeps
        let hostileCreeps = room.find(FIND_HOSTILE_CREEPS);
        _.each(hostileCreeps, (creep) => {
            if (creep instanceof Creep) {
                let creepName = creep.name;
                let owner = creep.owner.username;
                let type = (ally.indexOf(owner) < 0) ? 'hostile' : 'ally';
                if (_.isUndefined(Rooms.rooms[roomName].creeps[type][owner])) Rooms.rooms[roomName].creeps[type][owner] = {};
                Rooms.rooms[roomName].creeps[type][owner][creepName] = creep;
            }
        });
        //hostile structures
        let hostileStructures = room.find(FIND_HOSTILE_STRUCTURES);
        _.each(hostileStructures, (structure) => {
            if (structure instanceof Structure) {
                let structureType = structure.structureType;
                let structureId = structure.id;
                let owner = structure.owner.username;
                let type = (ally.indexOf(owner) < 0) ? 'hostile' : 'ally';
                if (_.isUndefined(Rooms.rooms[roomName].structures[type][owner])) Rooms.rooms[roomName].structures[type][owner] = {};
                if (_.isUndefined(Rooms.rooms[roomName].structures[type][owner][structureType])) Rooms.rooms[roomName].structures[type][owner][structureType] = {};
                Rooms.rooms[roomName].structures[type][owner][structureType][structureId] = structure;

            }
        });
        //hostile construction sites
        let hostileConstructionSites = room.find(FIND_HOSTILE_CONSTRUCTION_SITES);
        _.each(hostileConstructionSites, (constructionSite) => {
            if (constructionSite instanceof ConstructionSite) {
                let structureType = constructionSite.structureType;
                let structureId = constructionSite.id;
                let owner = constructionSite.owner.username;
                let type = (ally.indexOf(owner) < 0) ? 'hostile' : 'ally';
                if (_.isUndefined(Rooms.rooms[roomName].constructionSites[type][structureOwner])) Rooms.rooms[roomName].constructionSites[type][structureOwner] = {};
                Rooms.rooms[roomName].constructionSites[type][structureOwner][structureType][structureId] = structure;
            }
        });
    });
    //init room creeps
    _.each(Rooms.cache.creeps, (creep) => {
        if (creep instanceof Creep) {
            let roomName = creep.room.name;
            let creepName = creep.name;
            if (_.isUndefined(Rooms.rooms[roomName].creeps.my)) { Rooms.rooms[roomName].creeps.my = {}; }
            Rooms.rooms[roomName].creeps.my[creepName] = creep;
        }
    });
    //init room resources
    _.each(Rooms.cache.resources, (resource, b) => {
        if (resource instanceof Resource) {
            let roomName = resource.room.name;
            let resourceType = resource.resourceType;
            let resourceId = resource.id;
            if (_.isUndefined(Rooms.rooms[roomName].resources)) { Rooms.rooms[roomName].resources = {}; }
            if (_.isUndefined(Rooms.rooms[roomName].resources[resourceType])) { Rooms.rooms[roomName].resources[resourceType] = {}; }
            Rooms.rooms[roomName].resources[resourceType][resourceId] = resource;
        }
    });
    //init room structures
    _.each(Rooms.cache.structures, (structure) => {
        if (structure instanceof Structure) {
            let roomName = structure.room.name;
            let structureType = structure.structureType;
            let structureId = structure.structureType;
            if (_.isUndefined(Rooms.rooms[roomName].structures.my)) { Rooms.rooms[roomName].structures.my = {}; }
            if (_.isUndefined(Rooms.rooms[roomName].structures.my[structureType])) { Rooms.rooms[roomName].structures.my[structureType] = {}; }
            Rooms.rooms[roomName].structures.my[structureType][structureId] = structure;
        }
    });
    //init room construction sites
    _.each(Rooms.cache.constructionSites, (constructionSite) => {
        if (constructionSite instanceof ConstructionSite) {
            let roomName = constructionSite.room.name;
            let structureType = constructionSite.structureType;
            let structureId = constructionSite.id;
            Rooms.rooms[roomName].constructionSites.my[structureType][structureId] = structure;
        }
    });
    //init room flags
    _.each(Rooms.cache.flags, (flag) => {
        if (flag instanceof Flag) {
            let roomName = flag.room.name;
            let color = flag.color;
            let secondaryColor = flag.secondaryColor;
            if (_.isUndefined(Rooms.rooms[roomName].flags[color])) Rooms.rooms[roomName].flags[color] = {};
            if (_.isUndefined(Rooms.rooms[roomName].flags[color][secondaryColor])) Rooms.rooms[roomName].flags[color][secondaryColor] = {};
            Rooms.rooms[roomName].flags[color][secondaryColor] = flag;
        }
    });
    delete Rooms.cache;
};
//analysis which task need to be seted
// Rooms.analysis = function () {
//     _.each(Rooms.rooms, (room, roomName) => {
//         _.each(room,(o,k)=>{
//             console.log(k,_.keys(o));
//         });
//     });
// }