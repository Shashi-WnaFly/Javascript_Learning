// Singleton object defined from this syntax Object.create
// object literals

const mySymbol = Symbol("keyfortheDragon")

const JsUser = {
    name: "shashi anand",
    age: 25,
    gmail: "shashianand343@gmail.com",
    absent: ["monday", "saturday"],
    "address": "India, Patna",
    "address of": "India, Bihar, Patna",
    // mySymbol: "key"
    [mySymbol]: "key"
}

// console.log(JsUser.name);
// console.log(JsUser.address);
// console.log(JsUser["address of"]);
// console.log(JsUser.absent[1])
// console.log(JsUser["absent"][0]);
// console.log(JsUser["mySymbol"]) //--> key
// console.log(typeof [mySymbol]) //--> Object
// console.log(typeof mySymbol) //-->  Symbol

// console.log(JsUser["age"])

// console.log(JsUser);

JsUser.communicate = function(){
    console.log(`Hi Everybody This the name of the client : ${this.name}`)
}

// console.log(typeof JsUser["communicate"]) --> function
JsUser.communicate()