const names = require('./names')
const sayHi = require('./utils')
const alternative = require('./alternative-flavor')
require('./mind')

console.log(names);
console.log(alternative.singlePerson.name);
sayHi(names.john)