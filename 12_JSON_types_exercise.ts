// JSON value must be the following
// object
// array
// number
// string
// or one of the following three literal names
// false
// true
// null

type JSONPrimitive = string | number | boolean | null
type JSONArray = JSONValue[]
type JSONObject = { [key: string]: JSONValue }

type JSONValue = JSONPrimitive | JSONArray | JSONObject

function isJSON(arg: JSONValue) {}

isJSON("hello")
isJSON([4, 8, 15, 16, 23, 42])
isJSON({ greeting: "hello"} )
isJSON(false)
isJSON(true)
isJSON(null)
isJSON({ a: { b: [2, 3, "foo"] } })


isJSON(() => "")



isJSON(class {})



isJSON(undefined)

isJSON(BigInt(143))



isJSON(isJSON)

