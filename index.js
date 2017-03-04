'use strict';

// const aMod = require('./a-module');
// aMod.doIt();

//Sharing data between instances
const aMod1 = require('./a-module');
const aMod2 = require('./a-module');

//相同module只会require一次。
console.log(aMod1 === aMod2); //true

//data Sharing
aMod1.set("Data Data Data Data Data");
console.log(aMod2.get());


// Destructuring module imports, alias after ":"
// const { ruaBao, doSomething: dsth } = require('./a-module');
// ruaBao();
// dsth();

// const configurableMod = require('./c-module');

// const configuredA = configurableMod({logPrefix: "A> "});
// configuredA.log("Boom!");

// const configuredB = configurableMod({logPrefix: "B> "});
// configuredB.log("Boom!");

// const configuredC = configurableMod({logPrefix: "C> "});
// configuredC.log("Boom!");