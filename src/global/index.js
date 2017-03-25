import extensionInject from './extension';
import creepInject from './creep';
import taskInject from './task';
import jobInject from './job';
import roomInject from './room';
export default function () {
    extensionInject();
    creepInject();
}