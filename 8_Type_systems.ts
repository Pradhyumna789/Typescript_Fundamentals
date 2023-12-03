// structural and nominal types
// Type checking -> Type-checking can be thought of as a task that attempts to evaluate the question of compatibility or type equivalence

/*

  function foo(x) {
    // code
  }
  // Is `myValue` type-equivalent to what `foo` wants to receive?
  foo(myValue)

*/

// static type checking - types are defined in your code
// dynamic type checking - type equivalence checking is done during runtime

// Structural type system -> all about structure or shape

class Car {
    make: string
    model: string
    year: number
    isElectric: boolean
};

class Truck {
    make: string
    model: string
    year: number
    towingCapacity: number
};

const vehicle = {
    make: "Honda",
    model: "Accord",
    year: 2017,
}

function printCar5(car: {
    make: string
    model: string
    year: number
}) {
    console.log(`${car.make} ${car.model} ${car.year}`);
}

printCar5(new Car()); // works
printCar5(new Truck); // works
printCar5(vehicle); // works -> all printCar5 cares about is that do you have make, model, and year

// Note -> Like in Java the namespaces of classes Car and Truck for example in this case doesn't play any role in type equivalence checking that would be nominal type system


/* 
Duck type system -> similar to structural type system but also usually used to describe dynamic type systems
Basically it's like we kinda go and use something, and if it works out, it's okay otherwise we throw an error
*/

/*
Strong vs Weak types -> No agreed-upon technical definition
Strong -> static
Weak -> dynamic
*/

