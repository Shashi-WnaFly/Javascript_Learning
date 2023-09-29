"use script"; // treat all Js code as new syntax module or version

// datatypes
// null --> standalone value
// bigInt --> bigger than normal integer
// undefined -->
// symbol --> unique

console.log(typeof(undefined)) // ot --> undefined
console.log(typeof(null)) // ot --> object

let s = 99
console.log(typeof(s))

let n = String(s) // conversion number into string
console.log(typeof(n))

s = "99qw"
let str = Number(s) // not producing error
console.log(typeof str);
console.log(str); // print NaN but still it is a number type

console.log(Number(null)) // ot --> 0
console.log(Number(undefined)); // ot --> undefined
console.log(Number(false)); // ot --> true = 1, false = 0

// let isLoggedIn = 1 ot --> true
// let isLoggedIn = "Shashi" ot --> true
let isLoggedIn = "" // ot --> false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn) // ot --> true