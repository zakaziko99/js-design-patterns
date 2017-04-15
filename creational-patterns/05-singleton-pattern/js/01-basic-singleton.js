// In this example we will see an example of object created using a singleton pattern

// Let's create a singleton object that has a method that return the same instance
var mySingleton = (function() {
    // Instance stores a reference to the Singleton, and it is private
    var instance;

    // Here, we create an instance of the Singleton object, this is called the 'Singleton function'
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

    // Return a static object
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
var singleA = mySingleton.getInstance(); // This is called the 'entry point' from a global context
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

// This approach is very usefull to avoid creating useless instances. Also usefull to share
// one instance for different objects. It's the goal of the 'Dependency Injection' approach

// However, Singleton pattern might not be ideal, if we want test them for example.
// In this case, we will need more instances of an object for test purposes.
