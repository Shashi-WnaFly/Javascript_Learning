const arr = [1,2,3,4,5,6,7,8,9];

for(const val of arr){
    console.log("The value of arr array is :", val);
}

const map = new Map();
map.set('In' , 'India');
map.set('UK' , 'United Kingdom');
map.set('GM' , 'Germany');
map.set('SA' , 'South Africa');

// for(const code of map){
//     console.log(code); this print whole object
// }


// for(const [code, country] of map){ // destructuring of map
//     console.log(code, " --> ", country);
// }


const records = {
    rakesh : "patna",
    govinda : "West bengal",
    hari : "uttrakhand"
}

// for(const [rec, city] of records){
//     console.log(rec, " --> ", city); // error records is not iterable
// }

for(const rec in records){
    console.log(rec, "name from the city :",records[rec]);
}

// for(const element in arr){
//     console.log(element); print only index
// }


// for(const element in arr){
//     console.log(arr[element]);
// }

// ((user) => {
//     console.log("hello", user);
// })("Rakesh")

// arr.forEach(function (num){
//     console.log(num);
// })

// arr.forEach( num => {
//     console.log(num);
// })

// let m = 1;
// let printme = (val) => {
//     m *= val;
//     console.log(m);
// }

// arr.forEach(printme);

const myCoding = ["js", "py", "java", "cpp", "rb"];

// const printme = (val) => {
//     console.log(val);
// }
arr.forEach((val, index, arr) => {
    console.log(`${val}  ${index}     ${arr}`);
})

const programming = [
    {
        languageName : "javascript",
        extension : ".js"
    },
    {
        languageName : "java",
        extension : ".java"
    },
    {
        languageName : "python",
        extension : ".py"
    }
]

programming.forEach((key) => {
    console.log(key.extension);
})