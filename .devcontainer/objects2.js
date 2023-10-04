
const newObj = new Object() // empty object
const obj = {} // empty object

let whatsappUser = {
    id: "sha3323",
    email: "somebody@gmail.com",
    fullname: {
        user_full_name:{
            firstName: "Astro",
            lastName: "Kamil"
        }
    },
    password: "huhu22guy"
}

// console.log(whatsappUser);
// console.log(whatsappUser.id);
// console.log(whatsappUser.fullname.user_full_name.lastName);

// object concatination

let obj1 = {rock: "mountain", tree: "forest"}
let obj2 = {paper: "copy", led: "pen"}

// let obj3 = {obj1, obj2}; whole object copy as an object of obj3
let obj3 = {...obj1, ...obj2} // --> spread operator
// console.log(obj3);
// console.log(obj1 === obj3); --> false

// Object.freeze(obj1); object assignment not working
// let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
// console.log(obj1 === obj3); --> true, if i do not put there blank curly braces.

// object methods

// console.log(Object.keys(obj3)); // they all return array object
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));

let keyValue = Object.keys(obj3);
for(let i = 0; i < keyValue.length; i++){
    if(keyValue[i] === "led") console.log("Hey! Hi led")
}

console.log(obj3.hasOwnProperty("paper")); // its only take key not value

//_____________ destructuring of the object ________________

const course = {
    coursename: "javascript beginner to advance",
    price: "free",
    teachername: "Hitesh sir"
}

console.log(course.coursename)

// const {coursename} = course
const {coursename: crsname} = course
console.log(crsname)