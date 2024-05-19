// any

// we donot know what the type of variable?

// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.

let myVariable: any = 10;
myVariable = true;
myVariable = "abdullah";
myVariable = { name: "abdullah", age: 34 };


// type checking is disabled in it.
