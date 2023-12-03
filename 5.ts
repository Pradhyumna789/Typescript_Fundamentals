// Excess type checking

function printCar3(Car: {
    make: string
    model: string
    year: number
    chargeVoltage?: number
}) {
    // Implementation of the function is skipped

}

printCar3({
    make: "Toyota",
    model: "Model 3",
    year: 2003,
    chargeVoltage: 220,
    color: "RED" // Extra property produces an error
})


