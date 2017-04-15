// In this example we will see another approch of creating an object using a factory pattern

// Let's create first the 'Car' and 'Truck' types

// A constructor for defining new cars
function Car(options) {
    // some defaults
    this.doors = options.doors || 4;
    this.state = options.state || 'shining new';
    this.color = options.color || 'grey';

}

// A constructor for defining new trucks
function Truck(options) {
    this.state = options.state || 'used';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'black';
}

// Then let's define a skeleton vehicle factory
function VehicleFactory() {}

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;
// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function(options) {
    switch(options.vehicleType){
        case 'car':
            this.vehicleClass = Car;
            break;
        case 'truck':
            this.vehicleClass = Truck;
            break;
        //defaults to VehicleFactory.prototype.vehicleClass (Car)
    }

    return new this.vehicleClass(options);
};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'brown',
    doors: 6
}); // Notice that we can create an object instance without using the 'new' keyword

// Test to confirm our car was created using the vehicleClass/prototype Car
console.log(
    'is the car object an instance Of VehicleFactory Type',
    car instanceof VehicleFactory
); // false
console.log('is the car object an instance Of Car Type', car instanceof Car); // true

// Outputs: Car object of color "brown", doors: 6 in a "shining new" state
console.log(car);

// This is particularly useful if the object creation process is relatively complex
// e.g. if it strongly depends on dynamic factors or application configuration.


// In this approach, we will create a factory sub class that inherits from the 'VehicleFactory'
function TruckFactory () {}
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;
// This approach can seems better, because it set a protoype for the the sub factory
// and it's more readable. But on the other hand, we will create a sub factory for each type, :(

var truckFactory = new TruckFactory();
var myBigTruck = truckFactory.createVehicle({
    state: 'omg..so bad.',
    color: 'pink',
    wheelSize: 'so big'
});

// Confirms that myBigTruck was created with the prototype Truck
console.log(
    'is the myBigTruck object an instance Of VehicleFactory Type',
    myBigTruck instanceof VehicleFactory
); // false
console.log(
    'is the myBigTruck object an instance Of Truck Type',
    myBigTruck instanceof Truck
); // true
console.log(
    'is the truckFactory prototype an instance Of VehicleFactory Type',
    truckFactory instanceof VehicleFactory
); // true

// Outputs: Truck object with the color "pink", wheelSize "so big" and state "omg. so bad"
console.log(myBigTruck);
