
// function userLoggedInMessage (username) {
//     console.log(`${username} congratulations! You LoggedIn`);
//     // return `${username} congratulations! You LoggedIn`
// }

// console.log(userLoggedInMessage("shashi"));
// const info = userLoggedInMessage("shashi");
// console.log(userLoggedInMessage()); --> undefined congratulations! You LoggedIn
// userLoggedInMessage("Eternal");

function userLoggedInMessage (username) {
    if(!username) {
        console.log("Please enter username");
        return;
    }
    return `${username} congratulations! You LoggedIn`;
}

// console.log(userLoggedInMessage);
// console.log(userLoggedInMessage());
// console.log(userLoggedInMessage("God"));

// function calcucateCartPrice(...array){  // rest operator return an array object
//     return array;
// }

// console.log(calcucateCartPrice(12,34,45,324,23));

const zudoArtist = {
    artistname: "premratan",
    score: "839"
}

function infoOfZudoArtist(anyobject){
    return `The name of the artist ${anyobject.artistname} and his score is ${zudoArtist.score}`;
}

// console.log(infoOfZudoArtist(zudoArtist));

// const greets = ()=>{
//     console.log("Namaste Ji");
// }

// greets();

// (()=>{
//     console.log("Namaste Ji"); // self call function
// })()
