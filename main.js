const _ = require('lodash');


// Example of using a Lodash function
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = _.map(numbers, (num) => num * num);
const split = _.chunk(numbers,2)
const even = _.filter(numbers , (a) => a%2 == 0)
const sum = _.reduce(numbers, (acc, num) => acc + num, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
console.log(even)
console.log(split);

