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

console.log('=================================================');

// Now, we will see four ways to set key/value to an object
// ECMAScript 3 compatible approaches

// 1. Dot syntax
// Set properties
console.time('Literal assign property to an object');
emptyObject1.someKey = 'Hello World';
console.timeEnd('Literal assign property to an object');
// Get properties
console.log('emptyObject1.someKey', emptyObject1.someKey);

// 2. Square bracket syntax
// Set properties
console.time('Another literal assign property to an object');
emptyObject2['someKey'] = 'Hello World';
console.timeEnd('Another literal assign property to an object');
// Get properties
console.log('emptyObject2[\'someKey\']', emptyObject2['someKey']);

// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/

// 3. Object.defineProperty
// Set properties
console.time('Call defineProperty to assign property to an object');
Object.defineProperty(emptyObject3, 'someKey', {
    value: 'for more control of the property\'s behavior',
    writable: true,
    enumerable: true,
    configurable: true
});
// Warning: be careful with the configs 'writable', 'enumerable' or 'configurable'
// they have false as default value
// writable: able to change value with the 1, 2 methods.
// If is false, any change on value will fire an error exception only under strict mode
// enumerable: able to detect the key using for...in or Object.keys method
// configurable: able to change any config (value, enumerable, writable, set, get...) later
// if is false, it will fire an error exception even if we put original config value
console.timeEnd('Call defineProperty to assign property to an object');
// Get properties
console.log('emptyObject3.someKey', emptyObject3.someKey);

// If the above feels a little difficult to read, a short-hand could
// be written as follows:
var defineProp = function (obj, key, value) {
    var config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    };
    Object.defineProperty(obj, key, config);
};
// To use, we then create a new empty "person" object
var person = Object.create( Object.prototype );
// Populate the object with properties
defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);
console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}
// Create a race car driver that inherits from the person object
var driver = Object.create(person);
// Set some properties for the driver
defineProp(driver, 'topSpeed', '100mph');
// Get an inherited property (1981)
console.log('driver.dateOfBirth', driver.dateOfBirth);
// Get the property we set (100mph)
console.log('driver.topSpeed', driver.topSpeed);

// 4. Object.defineProperties
var newObject = new Object();
// Set properties
Object.defineProperties(newObject, {
    someKey: {
        value: 'Hello World',
        writable: true
    },
    anotherKey: {
        value: 'Foo bar',
        writable: false
    }
});
console.log(newObject);
// This fourth way is just a solution for assigning multiple properties in just one call

// Using the Chrome dev tool, we can conclude that usualy the second method is faster than the first
// and that because the first method literal is usually converted to the second method
// and the third method is defintly the much slower
