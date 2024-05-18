// todo falsy values

// false 0 -0 0n(bigint) null "" Nan(not a number)


// truthy values

// "0" 'false' " " [] { } function() { }



// Nulish Coalescing opeator (??)
//  for null and undefined values

let val1;
val1 =5 ?? 10;

console.log(val1); // 5 is the output
// create for db when response could come nil and it should do some error handling
