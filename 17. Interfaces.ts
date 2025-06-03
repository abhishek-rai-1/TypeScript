// Interface is a way to define a contract for the shape of an object. It specifies the properties and their types that an object must have. Interface are a powrful tool for enforcing a certain structure in our code.

// while interfaces are commonly used to define the structure of objects, they are not limited to just objects. Interfaces in TS can also be used to describe the shape of functions and classes.

// interface for object

interface PersonDetails {
  firstName: string;
  lastName: string;
  age: number;
}

const examplePerson: PersonDetails = {
  firstName: "jony",
  lastName: "raj",
  age: 34,
};

console.log(examplePerson);

// interface for functions

interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
console.log(add(3, 5));

const sub: MathOperation = (a, b) => a - b;
console.log(sub(5, 6));

// interface for class

interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("car is started");
  }

  stop(): void {
    console.log("car is stoped");
  }
}

const bmw = new Car();
bmw.start();
bmw.stop();

// declaration merging
// original interface
interface Car {
  brand: string;
  start(): void;
}

// interface merging (interface extension)
interface Car {
  model: string;
  stop(): void;
}

const myCar: Car = {
  brand: "BMW",
  model: "M3",

  start() {
    console.log("start");
  },

  stop() {
    console.log("stop");
  },
};

myCar.start();
myCar.stop();