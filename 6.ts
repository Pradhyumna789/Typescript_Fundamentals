// Excess type checking

function printCar4(Car: {
    make: string
    model: string
    year: number
    chargeVoltage?: number
}) {
    // Implementation of the function is skipped

}

const myCar = ({
    make: "Toyota",
    model: "Model 3",
    year: 2003,
    chargeVoltage: 220,
    color: "RED" 
})

myCar.color;

printCar4(myCar); // this will remove the error

// we are passing myCar(object literal) directly to the function and so nobody is going to make use of this color property again


