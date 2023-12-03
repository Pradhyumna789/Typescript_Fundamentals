function flipCoin1(): "heads" | "tails" {
    if(Math.random() > 0.5) return "heads" 
        return "tails" 
}

function maybeGetUserInfo(): 
    | ["Error", Error]
    | ["Success", { name: string, email: string }] {
        if(flipCoin1() == "heads") {
            return [
                "Success",
                { name: "Pradyumna", email: "hariharshasripradhyumna@gmail.com"},
            ]
        } else {
            return [
                "Error",
                new Error("Sry this coin flipped a tail :("),
            ]
        }
    }
    
const output1 = maybeGetUserInfo();
console.log(output1);

