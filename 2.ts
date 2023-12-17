/*
Explicitly specify a return type 
Everything is handled as you specity the state to be
Takes you where the error is and not light up at 15 different places
Even with a complicated logic inside the function it has to return a number or throw but can't return null
*/

function add2(a:number, b: number): number {
    return a + b;
}

console.log(add(1, 2));
