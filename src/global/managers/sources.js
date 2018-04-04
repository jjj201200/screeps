import Manager from 'Classes/manager';
export default new Manager('source');
// sources.add = function (sourcesArray) {
//     if (_.isArray(sourcesArray)) {
//         _.each(sourcesArray, (source) => {
//             Sources.sources[source.id] = {
//                 energy: source.energy,
//                 energyCapacity: source.energyCapacity,
//                 ticksToRegeneration: source.ticksToRegeneration,
//                 /*
//                 station:[{
//                     position:RoomPosition
//                     available:true/false
//                 }]
//                 */
//                 stations: []
//             };
//             _.each(source.stations, (stationPosition) => {
//                 Sources.sources[source.id].stations.push({
//                     position: stationPosition,
//                     available: false
//                 });
//             });
//         });
//     } else {/*error*/ }
// };