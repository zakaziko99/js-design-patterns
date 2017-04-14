// In this example we will see an example of object created using a singleton pattern

// Let's create a singleton object that has a method that return the same instance
var mySingleton = (function() {
    // Instance stores a reference to the Singleton, and it is private
    var instance;

    // Here, we create an instance of the Singleton object
    function init() {
        // Private methods and variables
        function privateMethod() {
            console.log('I am private');
        }

        var privateVariable = 'Im also private';

        var privateRandomNumber = Math.random();

        return {
            // Public methods and variables
            publicMethod: function() {
                console.log('The public can see me!');
            },

            publicProperty: 'I am also public',

            getRandomNumber: function() {
                return privateRandomNumber;
            }
        };
    };

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function() {
            if (!instance) {
                // The 'init' function is called only once
                instance = init();
            }

            return instance;
        }
    };
})();

// Usage:
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

// This approach is very usefull to avoid creating useless instances. Also usefull to share
// one instance for different objects. It's the goal of the 'Dependency Injection' approach
