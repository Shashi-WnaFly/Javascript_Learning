const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = arrNums.filter( (num) => num > 5); filter return something but foreach not
// console.log(newNums);

// const newNums = arrNums.forEach((num) => (num > 4)) foreach cannot return anything
// console.log(newNums); --> undefined

// const newNums = [];
// arrNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

// const newNums = arrNums.map( (num) => num < 7 ); this return whole object with true and false value
// const newNums = arrNums.map( (num) => num * 2 ).map((num) => num+1).filter( (num) => num < 12); // this is called chaining
// console.log(newNums);

const newNums = arrNums.reduce((acc, currval) => acc+currval)
console.log(newNums)

const shopList = [
    {
        itemName: "Spring boot course",
        price: 19999
    },
    {
        itemName: "Java course",
        price: 3999
    },
    {
        itemName: "Blockchain",
        price: 15999
    }
];
const totalPrice = shopList.reduce( (acc, currval) => acc+currval.price, 0);
console.log(totalPrice);
