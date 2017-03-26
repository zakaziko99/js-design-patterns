var myCar = {
    name: 'Audi Q5',

    drive: function() {
        console.log('Weeee. I\'m driving!');
    },

    panic: function() {
        console.log('Wait. How do you stop this thing?');
    }
};

// Use Object.create to instantiate a new car
var yourCar = Object.create(myCar);
// Note: the 'Object.create' is only available on ES5 or later

// Now we can see that one is a prototype of the other
console.log(yourCar.name);
