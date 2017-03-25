export default function () {
    Object.defineProperty(Creep.prototype, 'v', {
        configurable: true,
        get: function () {
            return this.v||1;
        },
        set: function (v) {
            this.v = v;
        }
    });
}