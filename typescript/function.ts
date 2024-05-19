
// () after this :number is the return type
function addNum(num: number):number {
  return 2;
}


const addNum1 = (num: number):number => {
  return 1
}



function createUser({username: string, password: string}):{username:string, password:string} {
  return {username:username, password:password}
}

createUser({username: "abdulah", password: "123"})

// ! it will be corrected using interface

// todo it is like a struct
type User = {
  username: string;
  password: string;
  age: number;
}

function itsMe(user: User):User{
  return {username: "abdulah",password: "123", age:123}
}
itsMe({username: "abdulah",password: "123", age:123})


type X = {
  x:number;
  y: number;

}

// ab X wali properties b is ma accessible hain
type Y = X & {
  x1:number;
  y2: number;

}
