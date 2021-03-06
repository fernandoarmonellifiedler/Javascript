/* Understand Where an Object’s Prototype Comes From

Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:*/

function Bird(name) {
    this.name = name;
}

let duck = new Bird("Donald");

// duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck);
// returns true

// ----------------------------------

// Exercise: Use isPrototypeOf to check the prototype of beagle. */

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);


// ==========================================

/* Understand the Prototype Chain

All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.*/

function Bird(name) {
    this.name = name;
}

typeof Bird.prototype; // yields 'object'

// Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype); // returns true

//How is this useful? You may recall the hasOwnProperty method from a previous challenge:

let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // yields true

/* The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.

----------------------------------

Exercise: Modify the code to show the correct prototype chain.*/

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
