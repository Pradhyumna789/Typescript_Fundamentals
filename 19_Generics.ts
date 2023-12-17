// Refer to this -> https://github.com/mike-north/typescript-courses/blob/main/packages/notes-ts-fundamentals-v4/src/13-generics.ts

// Example of two generics
function makeTuple<T, U>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2]
}

const zz = makeTuple(1, 2)
const zzz = makeTuple('foo', window)



