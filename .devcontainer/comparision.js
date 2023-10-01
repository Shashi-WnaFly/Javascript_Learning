
// console.log(null > 0) --> false
// console.log(null < 0) --> false
// console.log(null >= 0) --> true
// console.log(null <= 0) --> true

// console.log(Number(null)) --> 0

// console.log("2" > 1) --> true
// console.log("02" > 1) --> true
// console.log("2" > "2") --> false

// console.log(undefined == 0)
// console.log(undefined >= 0) in all condition false
// console.log(undefined <= 0)

ar = [12,34,545,56,23]
obj = {
    key: "Jaguar",
    module: "linux",
    price: 232
}
let myfunc = function(){
    console.log("Namaste")
}

// console.log(typeof(myfunc)) --> function
// console.log(typeof(obj)) --> object
// console.log(typeof(ar)) --> object
console.log(obj.key)

//______________________________________________________________________

// primitive goes to stack memory(they are call by value type) and non-primitive goes to heap memory (they call by reference type)
