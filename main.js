const devide = (x,y)=> x/y
console.log(devide(10,2)) // 5

// ----------------------------

let x = "hello world"
const shout = (x) =>  console.log(x.toUpperCase());

shout(x) // HELLO WORLD

// ----------------------------

const arr1 = [1,2,3,4,5]
const arr2 = [6,7,81,2,31,2,3]

const longer = (arr1,arr2) => arr1.length > arr2.length ? "arr1 longer" : "arr2 longer" 
console.log(longer(arr1,arr2)) // arr2 longer