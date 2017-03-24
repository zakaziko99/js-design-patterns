// In this example, we try to analyse creating a constructor object with prototype workaround

// Defining the Car constructor object
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function() {
    return this.model + ' has done ' + this.miles + ' miles';
};

// We can create new instances of the Car object
var cactus = new Car('Citroen Cactus', 2014, 20000);
var tiguain = new Car('Volkswagen Tiguain', 2015, 5000);

// and then open our browser console to view the output of the toString() method
// being called on these objects
console.log(cactus.toString());
console.log(tiguain.toString());
