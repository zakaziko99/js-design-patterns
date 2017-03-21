// In this example, we try to analyse the 3 principal methods for creating an object

// Each of the following options will create a new empty object:
console.time('Literal create empty object');
var emptyObject1 = {};
console.timeEnd('Literal create empty object');

console.time('Call create method for an empty object');
var emptyObject2 = Object.create(Object.prototype);
console.timeEnd('Call create method for an empty object');

console.time('Create empty object with Object constructor');
var emptyObject3 = new Object();
console.timeEnd('Create empty object with Object constructor');

// Using the Chrome dev tool, we can conclude that usualy the third method is faster
// and the second method is defintly the much slower
