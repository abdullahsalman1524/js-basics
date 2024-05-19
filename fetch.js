// todo what is promise?

// promise object represent the eventual completion or failure of async operation.
// promise mean queue ma add ho gaya ha magar abhi complete ni hoa

promises has 3 states

// pending
// full filed
// rejected

// how to create a promise
const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('abdullah')
    resolve({ message: 'abc'})
  })
});

// .then ma jo b kam hoa ha wo promise ma wo aa jata ah
//  resolve WALY parameters function ke parameter ma aa jaty hain
promise.then(function(){
  console.log('abdullah is a good boy')
})
