// Union and Intersection Types

function flipCoin(): "heads" | "tails" {
    if(Math.random() > 0.5) return "heads"
        return "tails"

}

const outcome = flipCoin(); // Outcome would be "heads" or "tails"



