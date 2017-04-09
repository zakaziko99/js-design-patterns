// We will see in this code, an example of abstract Factory object

// We create first a prototype of the types we may call with the abstract factory
// This is useful to set wich types we will handle on the abstract factory
function Vehicle() {}
Vehicle.prototype.drive = true;
Vehicle.prototype.breakDown = true;

// Creating a Car Type, we don't forget to set the Vehicle prototype
function Car(options) {
    this.color = options.color || 'grey';
    this.state = options.state || 'shining new';
    this.wheelSize = options.wheelSize || 'small';
}
Car.prototype = new Vehicle();

// Creating a Truck Type, we don't forget to set the Vehicle prototype
function Truck(options) {
    this.color = options.color || 'black';
    this.state = options.state || 'usable';
    this.wheelSize = options.wheelSize || 'large';
}
Truck.prototype = new Vehicle();

// Creating the abstract factrory having a private collection of types
// and two methods: one to get the correct type and another to register a type
var abstractVehicleFactory = (function() {
    // Storage for our vehicle types
    var types = {};

    return {
        getVehicle: function(type, customizations) {
            var Vehicle = types[type];

            return (Vehicle ? new Vehicle(customizations) : null);
        },

        registerVehicle: function(type, Vehicle) {
            var proto = Vehicle.prototype;

            // only register classes that fulfill the vehicle contract
            if (proto.drive && proto.breakDown) {
                types[type] = Vehicle;
            }

            return abstractVehicleFactory; // that makes the abstract factory chainable
        }
    };
})();

// Usage:
abstractVehicleFactory.registerVehicle('car', Car).registerVehicle('truck', Truck);

// Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle('car', {
    color: 'lime green',
    state: 'like new'
});

// Instantiate a new truck in a similar manner
var truck = abstractVehicleFactory.getVehicle('truck', {
    wheelSize: 'medium',
    color: 'neon yellow'
});

console.log('the car object', car);
console.log('is car an instance of Car type', car instanceof Car);
console.log('the truck object', truck);
console.log('is truck an instance of Truck type', truck instanceof Truck);

// This is the best method to deal with creating an object using the factory pattern
