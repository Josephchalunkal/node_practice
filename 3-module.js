//every file is a module
// encapsulated code only share minimum
const names = require('./4-names.js')
const sayHi = require('./5-utils')
const newData = require('./6-alternative-app')
require('./7-func')
console.log(newData)
console.log('names',names);
const {joseph,chalunkal} = names
sayHi(joseph);
sayHi(newData.newPerson.name)
console.log(sum);
