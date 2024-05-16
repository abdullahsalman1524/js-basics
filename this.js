// current context ko refer karta ha

//  this is will reusult in error

function sum(a, b) {
  console.log(this.a);
}

// this refers to the
var obj = {
  a: 1,
  b: 2,
  sum: function sum() {
    //  this will work because this refers to the current object var.
    console.log(this.a);
  }
}


