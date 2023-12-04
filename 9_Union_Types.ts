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
    

const output1 = maybeGetUserInfo() // logs a tuple
const [first, second] = maybeGetUserInfo()

// first -> ["Error", Error]
// second -> ["Success", Success]

const split1 = first.split

const split2 = second.name // logs Error or Pradyumna

// As in the case of split2 it logs either of the both we need to add a type guard
if(second instanceof Error) {
    second // In this case second is an Error
} else {
    second // In this case second is the User Info - name and email
}

if (output1[0] === "Error") {
        output1 // in this branch of code second is the error
} else {
    output1 // here the output1 is the name and the email
}

// Below is the cleaned up version using type aliases

type UserInfoOutcomeError = ["error", Error]
type UserInfoOutcomeSuccess = [
    "Success",
    { Name: string, Email: string}
]

type UserInfoOutcome = 
    | UserInfoOutcomeSuccess
    | UserInfoOutcomeError

function maybeGetUserInfo1(): UserInfoOutcome {
    if(Math.random() > 0.5) {
        return [
            "Success",
            { Name: "Pradhyumna", Email: "hariharshasripradhyumna@gmail.com" },
        ]
    } else {
        return [
            "error",
            new Error("Sry this coin flipped tails :("),
        ]
    }
}

const result = maybeGetUserInfo1()






















































