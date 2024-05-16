// A function that return a function or takes other function as argument

// treat function like a variable
// it can be passed on or it can be returned as

const salary = (num) => {
  return num * 1000;
}

// passing function like variable
// after 100 milliseconds it will be called salary.
setTimeout(salary, 100)


const salaries = [10, 20, 30, 40, 50, 60]

salaries.filter(salary => salary > 24 ).map(salary => console.log(salary))
