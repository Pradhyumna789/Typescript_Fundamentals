// Interfaces are similar to classes

interface UserInfo {
    name: string
    email: string
}

function printUserInfo(info: UserInfo) {
    info.name
}

// Inheritance in interfaces
// Just as in JavaScript, a subclass extends from a base class.
// Additionally a “sub-interface” extends from a base interface, as shown in the example below

interface Animal {
    isAlive(): boolean
}

interface Mammal extends Animal {
    getFurOrHairOil: string
}

interface Dog extends Mammal {
    getBreed: string
}

function foo(dog: Dog) {
    dog.getFurOrHairOil
    dog.getBreed
}



