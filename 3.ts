/*
Optional Properties:

property        Is present      Type        Note

make            Always          string  
model           Always          string
year            Always          number
chargeVoltage   Sometimes       number      not present unless car is electric

*/

function printCar(car: {
    make: string
    model: string
    year: number
    chargeVoltage?: number // ? indicates that chargeVoltage may or maynot be there if it is there it's going to be a number
}) {
    let str = `${car.make} ${car.model} ${car.year}`
    car.chargeVoltage // hover the mouse pointer over this line and it shows number | undefined

    if(typeof car.chargeVoltage !== undefined) { // this is called as a type guard
        str += ` ${car.chargeVoltage}v`; // this line will throw an error if type guard isn't there
    }

    console.log(str);
}

/*
 Typescript demands that you put the type guard because it says could be undefined
*/
