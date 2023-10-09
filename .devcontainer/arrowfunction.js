
let id = {
    username: "Jhunjhun wala",
    age: 55,
    // print: console.log(this), // this will print empty object
    info: function (){
        console.log(`${this.username}, name of the client`);// if we use username it's raise an error
        // console.log(this); // this will print whole id object
    },
}

// id.info();
// id.username = "Joker"
id.info();
id.print;

// console.log();

let manager = () => {
    let managername = "tomato radish"
    console.log(`this is the manager details`);
    // console.log(`this is the name : ${this.managername}`); // not working
    // console.log(this); // empty
}

manager()

let sum = (num1, num2) => (num1 + num2);
console.log(sum(23, 23));

let pass = () => ({username: "Ravi Kumar"})
console.log(pass())

// IIFE --> Immediately invoked function expression

let method = (function name(val) {
    console.log(`this is pass value ${val}`);
})(24232)

const arow = ((animal) => {
    console.log("A brown fox jumps over the lazy dog", animal)
})("Orangutan")