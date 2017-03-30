module.exports = function () {
    require('./extensions')();
    _.assign(global,{
        Settings:{
            global:require('./settings/global.setting'),
            creeps:require('./settings/creeps.setting'),
            scources:require('./settings/sources.setting'),
        },
        Classes:{
            Job:require('./classes/job'),
            Task:require('./classes/task'),
            Action:require('./classes/action'),
            Manager:require('./classes/manager'),
        },
        Jobs:require('./managers/jobs'),
        Tasks:require('./managers/tasks'),
        Creeps:require('./managers/creeps'),
        Sources:require('./managers/sources'),
        Resources:require('./managers/resources'),
        Minerals:require('./managers/minerals'),
        Rooms:require('./managers/rooms'),
        Roads:require('./managers/roads'),
        Containers:require('./managers/containers'),
        Controllers:require('./managers/controllers'),
        Spawns:require('./managers/spawns'),
        Towers:require('./managers/towers'),
        Walls:require('./managers/walls'),
        Storages:require('./managers/storages'),
        Ramparts:require('./managers/ramparts'),
        Links:require('./managers/links'),
        ConstructionSites:require('./managers/constructionSites'),
        Flags:require('./managers/flags'),
    });
    _.assign(global.Jobs,{
        jobs:{
            construction:require('./jobs/construction.job'),
            collection:require('./jobs/collection.job'),
            repair:require('./jobs/repair.job'),
        }
    });
    _.assign(global.tasks,{
        tasks:{
            defensiveConstruction:require('./tasks/defensiveConstruction.task'),
            generalConstruction:require('./tasks/generalConstruction.task'),
            resourceCollection:require('./tasks/resourceCollection.task'),
        },
    })
    _.assign(Creep,{
        actions:{
            build:require('./actions/build.action'),
            harvest:require('./actions/harvest.action'),
            move:require('./actions/move.action'),
            transfer:require('./actions/transfer.action'),
            upgrade:require('./actions/upgrade.action'),
        }
    })
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
}