let globalInject = require('./global');
let roomPositionInject = require('./roomPosition');
let roomObjectInject = require('./roomObject');
let sourceInject = require('./source');
let creepInject = require('./creep');
let roomInject = require('./room');
module.exports = function () {
    globalInject();
    roomPositionInject();
    roomObjectInject();
    sourceInject();
    creepInject();
    roomInject();
};