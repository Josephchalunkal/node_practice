const _ = require('lodash')
const array1 = [1,[1,2],[[1],[2],[[8],9]]]
const newArray = _.flattenDeep(array1);
console.log(newArray);