// In this example we will see an example of creating an object using a protoype,
// but adding some configurable properties

// Let's create a prototype object
var vehicle = {
    getModel: function() {
         console.log('The model of this vehicle is..' + this.model);
    }
};

// Let's create a function that's increments an id
var nextID = (function() {
    var counter = 0;
    return function() {
        return counter++;
    };
})();

// Let's create an object using 'vehicle' object as prototype but adding 'id' and 'model' properties
var AudiCar = Object.create(vehicle, {
    id: {
        value: nextID(),
        // writable:false, configurable:false by default
        enumerable: false
    },
    model: {
        value: 'Audi',
        enumerable: true
    }
});

// Let's create a secomd object adding properties along with the 'vehicle' prototype
var FiatCar = Object.create(vehicle, {
    id: {
        value: nextID(),
        enumerable: true
    },
    model: {
        value: 'Fiat',
        enumerable: true
    }
});

// Notice that on Google Chrome console display, the 'id' property of the 'AudiCar' object
// is faded, that's because the property is not enumerable. It means that the propterty doesn't
// appear in th for...in or Object.keys method
// Therefore, it is recommended to explicitly set the 'enumerable' config to true.
// Otherwise, the property will be invisible, unless you want is so
console.log(AudiCar);
AudiCar.getModel();
console.log(FiatCar);
FiatCar.getModel();
