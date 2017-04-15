// In this example, we will see an alternative on ES3 (without 'Object.create' method)
// for creating an object with prototypal pattern

// Define a vehicle prototype
var vehiclePrototype = {
    init: function(carModel) {
        this.model = carModel;
    },
    getModel: function() {
        console.log('The model of this vehicle is..' + this.model);
    }
};

// Create a constructor for an object 'vehicle' that return an instance with an existing prototype
function vehicle(model) {
    function F() {};
    F.prototype = vehiclePrototype;

    var f = new F();
    f.init(model);

    return f;
}
// Instead of creating a function 'class' and then setting a prototype,
// this time we do all this contained on a function, and the function that init properties will be
// moved to the prototype. This function 'class' will return an instance of the object created

var car = vehicle('Mercedes AMG');
car.getModel();
// The problem with this alternative, it's that we can't set properties to be read only
car.model = 'Audi Q5';
car.getModel();

// If we don't need any setting of properties, we can use this other alternative
var vehicle2 = (function() {
    function F() {};

    return function(proto) {
        F.prototype = proto;
        return new F();
    };
})();

var suv = vehicle2(vehiclePrototype);
// Now we can set some properties
suv.init('Nissan Qashqai');
console.log(suv);

// We can conclude that the 'Object.create' is lexicaly the best method to create an object
// with an existing prototype, but be very very carefeul on setting the configs for the properties
