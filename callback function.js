
// function take another function as parameter and call it  ()
//  ** it is callled callback function


const print = (callbackf) => {
  console.log("abdulah is a good boy")
  callbackf();
}

const callbackf = () => {
  console.log("abdullah is a good boafsdsdadfy")
}

print(callbackf)


// output is
// abdulah is a good boy
// abdullah is a good boafsdsdadfy



// ######   example 2
const calculate = (a, b, operation) => {
  return operation(a, b);
}

const plus = (a, b) => {
  return a + b;
}

//  agr hum idher plus pass kar dain gay to callho jay ga.
const result = calculate(2,3,plus)
console.log(result)
