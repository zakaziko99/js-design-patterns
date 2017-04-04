// In this example we will see an example of object created using a builder pattern

// First we create an object (using the function method of course),
// this object will create other objects in function of the type of builder we will assign to
// the builder method 'construct'. This object will have only this method that handles
// other builders having the same method names used in the main builder and
// return the correct builder. This main object builder is usually called a Director
function Shop() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

// We create here the Car builder, and creating of course the methods used on the main builder
function CarBuilder() {
    this.car = null;

    this.step1 = function() {
        this.car = new Car();
    };

    this.step2 = function() {
        this.car.addParts();
    };

    this.get = function() {
        return this.car;
    };
}

// We create here the Truck builder, and creating of course the methods used on the main builder
function TruckBuilder() {
    this.truck = null;

    this.step1 = function() {
        this.truck = new Truck();
    };

    this.step2 = function() {
        this.truck.addParts();
    };

    this.get = function() {
        return this.truck;
    };
}

// We create the Car Object used on the Car builder
function Car() {
    this.doors = 0;

    this.addParts = function() {
        this.doors = 4;
    };

    this.say = function() {
        log.add('I am a ' + this.doors + '-door car.');
    };
}

// We create the Car Object used on the Truck builder
function Truck() {
    this.doors = 0;

    this.addParts = function() {
        this.doors = 2;
    };

    this.say = function() {
        log.add('I am a ' + this.doors + '-door truck.');
    };
}

// log helper
var log = (function() {
    var log = '';

    return {
        add: function(msg) {
            log += msg + '\n';
        },
        show: function() {
            console.log(log);
            log = '';
        }
    }
})();

var shop = new Shop();
var carBuilder = new CarBuilder();
var truckBuilder = new TruckBuilder();
var car = shop.construct(carBuilder);
var truck = shop.construct(truckBuilder);

log.add('Is car instance of CarBuilder: ' + (car instanceof CarBuilder)); // false
log.add('Is car instance of Car: ' + (car instanceof Car)); // true, it is what returned finally
log.add('Is car instance of Shop: ' + (car instanceof Shop)); // false

log.add('Is truck instance of TruckBuilder: ' + (truck instanceof TruckBuilder)); // false
log.add('Is truck instance of Truck: ' + (truck instanceof Truck)); // true
log.add('Is truck instance of Shop: ' + (truck instanceof Shop)); // false

car.say();
truck.say();

log.show();

// The builder pattern will use a main director object that uses sub-builders having methods
// called on the main builder method, and return a final object that match
