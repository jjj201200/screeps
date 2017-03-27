module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = function () {
    __webpack_require__(2)();
    _.assign(global, {
        // Settings:{
        //     global:require('./settings/global'),
        //     creeps:require('./settings/creeps'),
        // },
        Rooms: __webpack_require__(4)
    });
    // _.assign(global.tasks,{
    // jobs:require('./jobs/jobs'),
    // })
    // _.assign(global.rooms.creeps,{
    // actions:require('./actions/actions'),
    // })
    // _.assign(global.rooms.structures,{
    // controllers:require('./structures/controllers'),
    // containers:require('./structures/containers'),
    // extensions:require('./structures/extensions'),
    // towers:require('./structures/towers'),
    // roads:require('./structures/roads'),
    // spawns:require('./structures/spawns'),
    // walls:require('./structures/walls'),
    // storage:require('./structures/storage'),
    // })
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var roomInject = __webpack_require__(3);
module.exports = function () {
    roomInject();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

module.exports = function () {
    global.c = function () {
        console.log(1);
    };
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Rooms = {
    time: Game.time,
    rooms: {},
    cache: {
        rooms: Game.rooms,
        creeps: Game.creeps,
        spawns: Game.spawns,
        resources: Game.resources,
        structures: Game.structures,
        constructionSites: Game.constructionSites,
        flags: Game.flags
    }
};
module.exports = Rooms;

// Object.defineProperty(Rooms, 'sources', {
//     configurable: true,
//     get: function () {
//         if (_.isArray(Room._sources)) Room._sources = {};
//         return this.v || 1;
//     },
//     set: function (v) {
//         this.v = v;
//     }
// });

//statistic source, population, hostile and structures
Rooms.statistic = function () {
    //cache object which is not in Game
    _.each(Rooms.cache.rooms, function (room, roomName) {
        //init new room object
        Rooms.rooms[roomName] = {
            time: Rooms.time,
            creeps: { my: {}, hostile: {} },
            structures: { my: {}, hostile: {} },
            sources: {},
            constructionSites: { my: {}, hostile: {} },
            flags: {}
        };
        //init cache
        Rooms.rooms[roomName].cache = {};
        //sources
        Rooms.rooms[roomName].sources = room.find(FIND_SOURCES);
        //mineral
        Rooms.rooms[roomName].mineral = room.find(FIND_MINERALS);
        //hostile creeps
        var hostileCreeps = room.find(FIND_HOSTILE_CREEPS);
        _.each(hostileCreeps, function (creep) {
            if (creep instanceof Creep) {
                var creepName = creep.name;
                var creepOwner = creep.owner.username;
                if (_.isUndefined(Rooms.rooms[roomName].creeps.hostile[creepOwner])) Rooms.rooms[roomName].creeps.hostile[creepOwner] = {};
                Rooms.rooms[roomName].creeps.hostile[creepOwner][creepName] = creep;
            }
        });
        //hostile structures
        var hostileStructures = room.find(FIND_HOSTILE_STRUCTURES);
        _.each(hostileStructures, function (structure) {
            if (structure instanceof Structure) {
                var structureType = structure.structureType;
                var structureId = structure.id;
                var structureOwner = structure.owner.username;
                if (_.isUndefined(Rooms.rooms[roomName].structures.hostile[structureOwner])) Rooms.rooms[roomName].structures.hostile[structureOwner] = {};
                Rooms.rooms[roomName].structures.hostile[structureOwner][structureType][structureId] = structure;
            }
        });
        //hostile construction sites
        var hostileConstructionSites = room.find(FIND_HOSTILE_CONSTRUCTION_SITES);
        _.each(hostileConstructionSites, function (constructionSite) {
            if (constructionSite instanceof ConstructionSite) {
                var structureType = constructionSite.structureType;
                var structureId = constructionSite.id;
                var structureOwner = constructionSite.owner.username;
                if (_.isUndefined(Rooms.rooms[roomName].constructionSites.hostile[structureOwner])) Rooms.rooms[roomName].constructionSites.hostile[structureOwner] = {};
                Rooms.rooms[roomName].constructionSites.hostile[structureOwner][structureType][structureId] = structure;
            }
        });
    });
    //init room creeps
    _.each(Rooms.cache.creeps, function (creep) {
        if (creep instanceof Creep) {
            var roomName = creep.room.name;
            var creepName = creep.name;
            if (_.isUndefined(Rooms.rooms[roomName].creeps.my)) {
                Rooms.rooms[roomName].creeps.my = {};
            }
            Rooms.rooms[roomName].creeps.my[creepName] = creep;
        }
    });
    //init room resources
    _.each(Rooms.cache.resources, function (resource, b) {
        if (resource instanceof Resource) {
            var roomName = resource.room.name;
            var resourceType = resource.resourceType;
            var resourceId = resource.id;
            if (_.isUndefined(Rooms.rooms[roomName].resources)) {
                Rooms.rooms[roomName].resources = {};
            }
            if (_.isUndefined(Rooms.rooms[roomName].resources[resourceType])) {
                Rooms.rooms[roomName].resources[resourceType] = {};
            }
            Rooms.rooms[roomName].resources[resourceType][resourceId] = resource;
        }
    });
    //init room structures
    _.each(Rooms.cache.structures, function (structure) {
        if (structure instanceof Structure) {
            var roomName = structure.room.name;
            var structureType = structure.structureType;
            var structureId = structure.structureType;
            if (_.isUndefined(Rooms.rooms[roomName].structures.my)) {
                Rooms.rooms[roomName].structures.my = {};
            }
            if (_.isUndefined(Rooms.rooms[roomName].structures.my[structureType])) {
                Rooms.rooms[roomName].structures.my[structureType] = {};
            }
            Rooms.rooms[roomName].structures.my[structureType][structureId] = structure;
        }
    });
    //init room construction sites
    _.each(Rooms.cache.constructionSites, function (constructionSite) {
        if (constructionSite instanceof ConstructionSite) {
            var roomName = constructionSite.room.name;
            var structureType = constructionSite.structureType;
            var structureId = constructionSite.id;
            Rooms.rooms[roomName].constructionSites.my[structureType][structureId] = structure;
        }
    });
    //init room flags
    _.each(Rooms.cache.flags, function (flag) {
        if (flag instanceof Flag) {
            var roomName = flag.room.name;
            var color = flag.color;
            var secondaryColor = flag.secondaryColor;
            if (_.isUndefined(Rooms.rooms[roomName].flags[color])) Rooms.rooms[roomName].flags[color] = {};
            if (_.isUndefined(Rooms.rooms[roomName].flags[color][secondaryColor])) Rooms.rooms[roomName].flags[color][secondaryColor] = {};
            Rooms.rooms[roomName].flags[color][secondaryColor] = flag;
        }
    });
    delete Rooms.cache;
};
//analysis which task need to be seted
Rooms.analysis = function () {
    _.each(Rooms.rooms, function (room, roomName) {
        _.each(room, function (o, k) {
            console.log(k, _.keys(o));
        });
    });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(1);
// _.each(global,function(k,v){console.log(k)})
global();
// Creep.action.harvest.test();//<--test

/***/ })
/******/ ]);