let tmp = "";

module.exports = {
    set: (data) => {tmp = data},
    get: () => { return tmp },
    doIt: function() {
        console.log("Boom!");
    },
    doSomething: function() {
        console.log("Boom!Boom!");
    },
    ruaBao: function() {
        console.log("Boom!Boom!Boom!Boom!Boom!Boom!Boom!Boom!Boom!");
    }
};