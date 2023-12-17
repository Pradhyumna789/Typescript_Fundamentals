// Type queries allows us to obtain type info from values
// This becomes important when working with libraries that may not expose type info in a way that's most useful for you

// keyof type query obtains all property keys of the given interface

type DatePropertyNames = keyof Date

type DateStringPropertyNames = DatePropertyNames & string

type DateSymbolPropertyNames = DatePropertyNames & symbol


// typeof type query allows you to extract a type from a value. 
async function main() {
  const apiResponse = await Promise.all([
    fetch("htttps://example.com"),
    Promise.resolve("Titanium White"),
  ])

  type ApiResponseType = typeof apiResponse

}

// Indexed access types
// Used when you just want the types and you don't want to define it
// Used to retrieve some other part of another type via an index
interface Car {
  make: string
  model: string
  year: number
  color: {
    red: string
    green: string
    blue: string
  }
}

let Color: Car["color"]
let carColor: Car["color"]["red"]
let carProperty: Car["color" | "year"]

// The type registry pattern
// Using these we can layer types on top of modules already exposed by a module example ./lig/registry.ts
// refer to these files -> registry.ts, book.ts, magazine.ts, and index.ts



