
// falsy value --->
// false, 0, -0, "", null, BigInt 0n, undefined, NaN

// truthy value
// "0", " ", "false", [], {}, function(){}

// checking an object is empty or not
const myObj = {}

if(Object.keys(myObj).length === 0){
    console.log("this is empty")
}

// Nullish Coalescing operator (??): null and undefined

// let vlu = 25 ?? 45 --> 25
// let vlu = undefined ?? null --> !!! null
// let vlu = null ?? undefined --> !!! undefined
// let vlu = null ?? 24 --> 24
// let vlu = undefined ?? 24
let vlu = 24 ?? undefined

console.log(vlu)

// ternary operator
const rice_price = 90
rice_price >= 100 ? console.log("The price of rice is more than 100") : console.log("The price of rice is less than 100")