// Arrays

const fileExtensions = [1, 2, 3, 4]; // don't have to explicitly write type annotations here

const cars = [
    {
        make: "Totoya",
        model: "Model 3"
    },
]

// Tuples -> ordered data structure -> each position of item has some special meaning or convention

let my_car = [2002, "Toyota", "Corolla"];

my_car = ["Honda", 2017, "Sedan"]; // typescript allows us to break our convention


let my_car_2: [number, string, string] = [
    2002,
    "Toyota",
    "Corolla",
];

my_car_2 = ["Honda", 2017, "Accord"]; // error because the order of types of convention is not correct


