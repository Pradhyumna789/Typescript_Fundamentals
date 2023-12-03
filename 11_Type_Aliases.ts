// TypeScript provides two mechanisms for centrally defining types and giving them useful and meaningful names: interfaces and type aliases. 

import { UserContactInfo } from "./types";

function printContactInfo(info: UserContactInfo): void {
    console.log(info)
    console.log(info.email)
    console.log(info.name)
}

printContactInfo({ name: "Pradyumna", email: "hariharshasripradhyumna@gmail.com" })

// If we were to pass the object with an extra property we can do the following

const Painter = {
    name: "Robert Ross",
    email: "robert@gmail.com",
    favoriteColor: "red",
}

printContactInfo(Painter) // Only email and name are accessible to us not favoriteColor

