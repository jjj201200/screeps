let Creeps = Classes.Manager('creep');
module.exports = Creeps
Creeps.creeps = {
};
Creeps.createCreep = function(target){
    let roomName = target.room.name;
    let spawns = Rooms[roomName].structures.my[STRUCTURE_SPAWN];
    let targetSpawn;
    _.each(spawns,(spawn)=>{
        if(spawn.spawning !==null) {
            targetSpawn= targetSpawn;
            return false;
        }
    });
}
