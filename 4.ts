function printCar1(car: {
    make: string
    model: string
    year: number
    chargeVoltage?: number | undefined // you could write this too
}) {
    let str = `${car.make} ${car.model} ${car.year}`

    if(typeof car.chargeVoltage !== undefined) {
        str += ` ${car.chargeVoltage}v`;
    }

    console.log(str);
}

printCar1({
    make: 'Toyota', model: "Corolla", year: 2003,
    chargeVoltage: undefined // now you will have to pass an undefined as an option type here
})
