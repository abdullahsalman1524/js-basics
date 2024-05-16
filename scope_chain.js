// kis variable ki kosni value honi chahiyay is ma madad karti ha

// scope chain lexically defined   (****  hum ne function kaha kaha likhy hian us se idea lagaa sakty scope chain

// kaha kaha hain)

// parent of scope chain is global scope ( which is the window object of browser)
// child function can access parent functions

// child apny parent ke scope ma se chezin access kar ke print kar sakta ha


// **How Does the Scope Chain Work?
// ? JavaScript's scope chain determines the hierarchy of places the computer must go through —
// ? one after the other — to find the lexical scope (origin) of the specific variable that got called.

// First fullName variable defined in the global scope:
const fullName = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    // todo this fullname will be the last to be executed
    const fullName = "Oluwa Sofe";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}
