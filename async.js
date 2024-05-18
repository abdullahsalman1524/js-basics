// js is syncrounous
// it is single thread.is

// one code is executed one time

// todo ExecutionContext
//  1. call stack
//  2. Memory heap


// todo Blocking Code vs Non Blocking Code

// todo Blocking
//  block the flow of the program  wait()
// eg: read file sync (kernel jab tak file read na kar le tab tak baqi block rehta)


// todo Non Blocking
// baqi ke kam b hoty rahin gay our file b read hoti rhy gi
// todo register callback is used ( task queue) kam hony ke baad humin yaad karwa de kam ho gaya
// task queue se data call stack ma jata ha our execute ho jata ha


console.log("2")
setTimeout(() => {
  console.log("4")

}, timeout);

console.log("3")

// out put will be 2,3,4

// because 4 wali line register callback se taskqueue ma jay gi waha se
// call stack ma jay gi


// for fetch task queue is high priority


// ?Part 2
// handler is a function which donot have name 
