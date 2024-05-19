interface UserA {
  name: string,
  age: number
}


// it is like a class

const abdullah: UserA = {name: 'ab', age:1}

interface Vehicle {
  name: string,
  age: number
}

// ab vehicle wali properties hum car ma access kar lain gay
interface Car extends Vehicle  {
  color: string,
}
