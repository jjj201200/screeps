import _ from 'lodash';
import Manager from 'Classes/manager';
const Creeps = new Manager('creep');
Creeps.creeps = {
};
Creeps.createCreep = function(target){
    let roomName = target.room.name;
    let spawns = global.Rooms[roomName].structures.my[STRUCTURE_SPAWN];
    let targetSpawn;
    _.each(spawns,(spawn)=>{
        if(spawn.spawning !==null) {
            targetSpawn= targetSpawn;
            return false;
        }
    });
}
export default Creeps;

