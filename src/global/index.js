module.exports = function () {
    require('./extensions')();
    _.assign(global,{
        Settings:{
            global:require('./settings/global'),
            creeps:require('./settings/creeps'),
            scources:require('./settings/sources'),
        },
        Rooms:require('./rooms/rooms'),
        Tasks:require('./tasks/tasks'),
        Jobs:require('./jobs/jobs'),
        // Creeps:require('./creeps/creeps'),
        // Sources:require('./rooms/structures'),
        // Structures:require('./rooms/structures'),
    });
    _.assign(global.tasks,{
        task:require('./tasks/task'),
        tasks:{
            defance:require('./tasks/defance.task'),
            collection:require('./tasks/collection.task'),
        },
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