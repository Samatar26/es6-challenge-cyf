// Turn this function into an arrow function
 let arrow = () => {return 'es6 is awesome!'}

//Use the es6 syntax for default parameter
let defaultParameter= (name) =>  name = name || 'sam'


// Use the spread operator to combine arr1 and arr2
function combineArrays(arr1, arr2) {
  return arr1.concat(arr2)
}

//use destructuring to return the object's cyf property
let destructuring = (obj) => obj.cyf;


// use template literal to return a string with the sum of a and b
let templateString= (a, b) => `The sum is equal to ${a + b}`



module.exports = {
  arrow,
  defaultParameter,
  combineArrays,
  destructuring,
  templateString,
}
