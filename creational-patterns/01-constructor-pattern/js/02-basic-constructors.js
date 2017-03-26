// In this example, we try to analyse creating a constructor object

// Defining the Car constructor object
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function() {
        return this.model + ' has done ' + this.miles + ' miles';
    };
}
// 'this' keyword refers to the new Car object instance created with the constuctor
// Therfore, the 'toString' method will be redefined the same way every time an instance is created
// This is not optimal, because the 'toString' method isn't shared between instances of the Car type

// We can create new instances of the Car object
var cactus = new Car('Citroen Cactus', 2014, 20000);
var tiguain = new Car('Volkswagen Tiguain', 2015, 5000);

// and then open our browser console to view the output of the toString() method
// being called on these objects
console.log(cactus.toString());
console.log(tiguain.toString());
