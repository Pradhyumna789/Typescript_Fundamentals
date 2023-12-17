// Recursive types is used for JSON files
// NestedNumbers 

type NestedNumbers = number | NestedNumbers[]

const val: NestedNumbers = [3, 4, [5, 6, [7], 59], 221]

if(typeof val !== "number") {
  val.push(41)
  val.push([42, 32], 41)
  val.push([]) 
  val.push("this work not number")
}



