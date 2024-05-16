// call stack ()
// js execution context ( how js execute our code)
// 1. global execution context  ( this)
// 2. function execution context
// 3. eval execution context


// todo js code execute in 2 steps
// ? 1. Memory creation phase    is ma variable ko mem allocate hota ha ( variable  ma undefined stored, and function definaton created )
// ? 2. execution phase   here value is assigned.



// ## for every function these 2 steps are done again.



let val1 =10;
let val2=20;

function addNum(val1, val2) {
  let total = val1 + val2;
  return total;
}

console.log(addNum(val1, val2));
addNum(10,20)





// call stack
// last in first out for nested function
// 2. method called
// 1. global


// source in browser inspect waha sab kuch nazar aa jata
