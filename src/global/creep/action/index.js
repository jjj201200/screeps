module.exports = function () {
    _.assign(Creep, {
        action: require('./action')
    });
    _.assign(Creep.action, {
        harvest: require('./harvest')
    });
};